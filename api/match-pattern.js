import { qaPatterns } from '../src/lib/qa-patterns.js';

export const runtime = 'edge';

// Handle OPTIONS request for CORS
export async function OPTIONS(req) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

function calculateSimilarity(query, triggers) {
  const normalizedQuery = query.toLowerCase().trim();
  let maxScore = 0;

  for (const trigger of triggers) {
    const normalizedTrigger = trigger.toLowerCase();
    
    // Exact match
    if (normalizedQuery.includes(normalizedTrigger) || normalizedTrigger.includes(normalizedQuery)) {
      return 1.0;
    }
    
    // Word-level matching
    const queryWords = normalizedQuery.split(/\s+/);
    const triggerWords = normalizedTrigger.split(/\s+/);
    
    let matchCount = 0;
    for (const qWord of queryWords) {
      for (const tWord of triggerWords) {
        if (qWord === tWord || (qWord.length > 3 && tWord.includes(qWord)) || (tWord.length > 3 && qWord.includes(tWord))) {
          matchCount++;
          break;
        }
      }
    }
    
    const score = matchCount / Math.max(queryWords.length, triggerWords.length);
    maxScore = Math.max(maxScore, score);
  }
  
  return maxScore;
}

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return OPTIONS(req);
  }
  
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { query } = await req.json();
    
    if (!query || typeof query !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Invalid query' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    let bestMatch = null;
    let highestScore = 0;
    
    for (const pattern of qaPatterns) {
      const score = calculateSimilarity(query, pattern.triggers);
      if (score > highestScore && score >= 0.5) { // Minimum threshold of 0.5
        highestScore = score;
        bestMatch = pattern;
      }
    }
    
    if (bestMatch) {
      return new Response(
        JSON.stringify({
          match: true,
          pattern: bestMatch,
          confidence: highestScore
        }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    return new Response(
      JSON.stringify({
        match: false,
        pattern: null,
        confidence: 0
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Pattern matching error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to match pattern' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}