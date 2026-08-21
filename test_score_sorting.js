// test_score_sorting.js
const fs = require('fs');
const ragData = JSON.parse(fs.readFileSync('nuptial_rag_dataset.json', 'utf8'));
const SPECIES = ragData.species;

function matchSpeciesTest(temp, rh, rain48, rainNow, wind, month, period, inIndia){
  let candidates = SPECIES;
  if(inIndia){
    candidates = SPECIES.filter(sp => sp.isFoundInIndia === true || sp.zone === 'SA' || sp.zone === 'SA_GLOBAL');
  }

  return candidates.map(sp => {
    if(sp.isNonFlying || sp.tier === 'TIER_3'){
      return { 
        sp, 
        score: 0, 
        totalFactors: 4,
        pct: 0,
        isNonFlying: true
      };
    }

    let score = 0;
    const totalFactors = 4;

    // Factor 1: Seasonality
    if(sp.months && sp.months.includes(month)) score++;

    // Factor 2: Temperature
    const [tMin, tMax] = sp.tempRange || [18, 34];
    if(temp >= tMin && temp <= tMax) score++;

    // Factor 3: Diurnal Timing
    if(sp.timeOfDay && sp.timeOfDay.includes(period)) score++;

    // Factor 4: Moisture
    let condMet = false;
    switch(sp.condition){
      case 'after_rain': condMet = (rain48 > 2 && rainNow < 2.0); break;
      case 'humid_still_evening': condMet = (rh >= 50 && wind < 16); break;
      case 'monsoon_humidity': condMet = (rain48 > 1 || rh >= 60); break;
      case 'warm_calm_afternoon': condMet = (wind < 15 && rh >= 35); break;
      case 'hot_dry_afternoon': condMet = (rh < 60 && temp >= tMin); break;
      default: condMet = wind <= (sp.windMax || 15); break;
    }
    if(condMet) score++;

    const pct = Math.round((score / totalFactors) * 100);
    return { sp, score, totalFactors, pct, isNonFlying: false };
  }).sort((a, b) => {
    if(a.isNonFlying && !b.isNonFlying) return 1;
    if(!a.isNonFlying && b.isNonFlying) return -1;
    if(b.score !== a.score) return b.score - a.score;
    return b.pct - a.pct;
  });
}

// Test case: Bangalore monsoon evening (June, 27°C, 80% RH, 15mm rain in 48h, 6 km/h wind, evening)
console.log('--- TEST: Bangalore Prime Monsoon Conditions (June, 27°C, 80% RH, 15mm Rain) ---');
const results = matchSpeciesTest(27.0, 80, 15.0, 0.0, 6.0, 6, 'evening', true);

console.log(`Total Indian Species evaluated: ${results.length}\n`);
results.forEach((r, idx) => {
  const name = r.sp.name;
  const scoreStr = r.isNonFlying ? 'Non-Flying' : `Score: ${r.score}/${r.totalFactors} (${r.pct}%)`;
  console.log(`#${idx + 1}`.padEnd(5) + `| ${scoreStr.padEnd(20)} | ${name}`);
});

// Verify descending sort
for(let i = 0; i < results.length - 1; i++){
  if(!results[i].isNonFlying && !results[i+1].isNonFlying){
    if(results[i].score < results[i+1].score){
      console.error(`FAIL: Sorting violation at index ${i}: score ${results[i].score} < ${results[i+1].score}`);
      process.exit(1);
    }
  }
}

console.log('\n✓ PASS: Species are strictly sorted in descending order of factor matches!');
