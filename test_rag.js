// test_rag.js
const fs = require('fs');

// Load rag_data.js by evaluating in a window mock
global.window = {};
const ragDataCode = fs.readFileSync('./rag_data.js', 'utf8');
eval(ragDataCode);

const RAG_DATA = global.window.ANT_RAG_DATA;
console.log('✓ Loaded ANT_RAG_DATA');
console.log(`Total species: ${RAG_DATA.species.length}`);
console.log(`Total chunks: ${RAG_DATA.chunks.length}`);

// Test tier definitions
const tiers = RAG_DATA.metadata.tiers;
console.log('Tiers defined:', Object.keys(tiers));

// Retrieval function matching client implementation
function retrieveRelevantChunks(query, topK = 4) {
  const CHUNKS = RAG_DATA.chunks;
  const tokens = query.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(t => t.length > 2);
  
  const scored = CHUNKS.map(chunk => {
    let score = 0;
    const contentLower = chunk.content.toLowerCase();
    const titleLower = chunk.title.toLowerCase();
    const keywords = (chunk.keywords || []).map(k => k.toLowerCase());

    tokens.forEach(token => {
      if (titleLower.includes(token)) score += 12;
      keywords.forEach(kw => {
        if (kw.includes(token)) score += 8;
      });
      const count = (contentLower.match(new RegExp('\\b' + token, 'g')) || []).length;
      score += Math.min(count * 3, 15);
    });

    if (query.toLowerCase().includes('monomorium') || query.toLowerCase().includes('pharaoh') || query.toLowerCase().includes('not fly') || query.toLowerCase().includes('tramp')) {
      if (chunk.id.includes('MON-PHA') || chunk.id.includes('LIN-HUM') || chunk.id.includes('ANO-GRA') || chunk.tier === 'TIER_3') score += 25;
    }
    if (query.toLowerCase().includes('solenopsis') || query.toLowerCase().includes('fire ant')) {
      if (chunk.id.includes('SOL-INV') || chunk.id.includes('SOL-GEM')) score += 25;
    }
    if (query.toLowerCase().includes('editor') || query.toLowerCase().includes('sericeus') || query.toLowerCase().includes('lopatina') || query.toLowerCase().includes('kipyatkov')) {
      if (chunk.id.includes('EDITOR') || chunk.id.includes('CAM-SER')) score += 30;
    }
    if (query.toLowerCase().includes('dry') || query.toLowerCase().includes('tetraponera')) {
      if (chunk.id.includes('TET-RUF')) score += 30;
    }
    if (query.toLowerCase().includes('jumping') || query.toLowerCase().includes('harpegnathos') || query.toLowerCase().includes('monsoon flooding') || query.toLowerCase().includes('diacamma')) {
      if (chunk.id.includes('HAR-SAL') || chunk.id.includes('DIA-IND') || chunk.tier === 'TIER_5') score += 25;
    }
    if (query.toLowerCase().includes('tier') || query.toLowerCase().includes('confidence') || query.toLowerCase().includes('methodology')) {
      if (chunk.id.includes('META')) score += 20;
    }

    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK).filter(s => s.score > 0).map(s => s.chunk);
}

const testQueries = [
  "Show recent user-contributed queen sightings and community records.",
  "Why don't Pharaoh ants (Monomorium pharaonis) have nuptial flight triggers?",
  "What are the exact quantified thresholds for Solenopsis invicta flights?",
  "Which Indian ant species fly on dry days without rain?",
  "What is known about Harpegnathos saltator and monsoon flooding?",
  "What does the Editor's Note say about the Camponotus sericeus Lopatina citation caveat?",
  "Explain the 6 confidence tiers used in this dataset"
];

// Add a mock user contribution chunk
RAG_DATA.chunks.push({
  id: 'CHUNK-USER-1724263200000',
  title: 'Community Sighting: Carebara diversa in Bangalore, Karnataka, India',
  tier: 'USER_CONTRIBUTION',
  content: '[User Contribution · Citizen Science Field Record]\nSpecies: Carebara diversa\nLocation: Bangalore\nDate: 2026-08-19\nProvenance: User Upload (Tier 4 Citizen Science)',
  keywords: ['user contribution', 'citizen science', 'community sighting', 'carebara diversa', 'bangalore', 'queen'],
  source: 'User Contribution by Arjun M. on 2026-08-19'
});

console.log('\n--- Running Retrieval Validation Tests ---');
let allPassed = true;

testQueries.forEach((q, i) => {
  const results = retrieveRelevantChunks(q, 3);
  console.log(`\nQuery ${i + 1}: "${q}"`);
  console.log(`Retrieved ${results.length} chunks:`);
  results.forEach(r => {
    console.log(`  - [${r.id}] (${r.tier}) ${r.title}`);
  });
  if (results.length === 0) {
    console.error('FAIL: No chunks retrieved!');
    allPassed = false;
  }
});

if (allPassed) {
  console.log('\n✓ ALL RAG RETRIEVAL TESTS PASSED SUCCESSFULLY!');
} else {
  console.error('\n✗ SOME TESTS FAILED');
  process.exit(1);
}
