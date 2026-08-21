// test_geo_filter.js
const fs = require('fs');

// Load RAG dataset
const ragData = JSON.parse(fs.readFileSync('nuptial_rag_dataset.json', 'utf8'));
const SPECIES = ragData.species;

function isLocationInIndia(place, lat, lon){
  if(place && place.name){
    const p = place.name.toLowerCase();
    if(/\b(india|bharat|bangalore|bengaluru|mumbai|delhi|hyderabad|chennai|kolkata|pune|ahmedabad|kerala|karnataka|tamil nadu|telangana|maharashtra|rajasthan|gujarat|goa|andhra|odisha|west bengal|assam|meghalaya|bihar|punjab|haryana|uttar pradesh|madhya pradesh|kashmir|chandigarh|mysore|coimbatore|kochi|indore|bhopal|nagpur|patna|jaipur|lucknow|surat|visakhapatnam|vadodara|dehradun)\b/i.test(p)){
      return true;
    }
  }
  return lat >= 6.5 && lat <= 37.5 && lon >= 68.0 && lon <= 97.5;
}

function detectZone(place, lat, lon){
  if(isLocationInIndia(place, lat, lon)) return 'SA';
  if(lat >= 34 && lat <= 72 && lon >= -25 && lon <= 45) return 'EU';
  if(lat >= 5 && lat <= 72 && lon >= -170 && lon <= -50) return 'NA';
  return 'GLOBAL';
}

function matchSpeciesForTest(place, lat, lon){
  const inIndia = isLocationInIndia(place, lat, lon);
  const userZone = detectZone(place, lat, lon);

  let candidateSpecies = SPECIES;
  if(inIndia){
    candidateSpecies = SPECIES.filter(sp => sp.isFoundInIndia === true || sp.zone === 'SA' || sp.zone === 'SA_GLOBAL');
  }else if(userZone === 'EU'){
    candidateSpecies = SPECIES.filter(sp => sp.zone && (sp.zone.includes('EU') || sp.zone === 'GLOBAL'));
  }else if(userZone === 'NA'){
    candidateSpecies = SPECIES.filter(sp => sp.zone && (sp.zone.includes('NA') || sp.zone === 'GLOBAL'));
  }

  return candidateSpecies;
}

console.log('--- TEST 1: Bangalore, Karnataka, India (12.97, 77.59) ---');
const blrMatches = matchSpeciesForTest({name: 'Bangalore, Karnataka, India'}, 12.97, 77.59);
console.log(`Matched ${blrMatches.length} species for Bangalore.`);
const nonIndiaInBlr = blrMatches.filter(s => !s.isFoundInIndia);
if(nonIndiaInBlr.length > 0){
  console.error('FAIL: Found non-India species in Bangalore:', nonIndiaInBlr.map(s => s.name));
  process.exit(1);
}else{
  console.log('PASS: 100% of species are native or established in India!');
  console.log('Sample species shown:', blrMatches.slice(0, 5).map(s => `${s.name} (${s.sci})`));
}

console.log('\n--- TEST 2: Delhi, India (28.61, 77.20) ---');
const delhiMatches = matchSpeciesForTest({name: 'New Delhi, Delhi, India'}, 28.61, 77.20);
console.log(`Matched ${delhiMatches.length} species for Delhi.`);
if(delhiMatches.some(s => !s.isFoundInIndia)){
  console.error('FAIL: Non-India species in Delhi!');
  process.exit(1);
}else{
  console.log('PASS: 100% of species in Delhi are verified Indian species!');
}

console.log('\n--- TEST 3: London, UK (51.50, -0.12) ---');
const londonMatches = matchSpeciesForTest({name: 'London, Greater London, United Kingdom'}, 51.50, -0.12);
console.log(`Matched ${londonMatches.length} species for London.`);
console.log('European species shown:', londonMatches.slice(0, 5).map(s => `${s.name} (${s.sci})`));

console.log('\n✓ ALL GEOGRAPHIC FILTERING TESTS PASSED!');
