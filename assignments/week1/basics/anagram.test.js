const isAnagram = require('./anagram');

describe('isAnagram', () => {
  test('returns true for anagrams with different casing', () => {
    expect(isAnagram('listen', 'siLent')).toBe(true);
  });

  test('returns false for non-anagrams', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
  });

  test('returns true for anagrams with spaces and casing', () => {
    expect(isAnagram('rail safety', 'fairy tales')).toBe(true);
  });

  test('returns false for different length strings', () => {
    expect(isAnagram('openai', 'aiopen!')).toBe(false);
  });

  test('Sample test', () => {
    expect(isAnagram('adhil', 'lihda')).toBe(true)
  })

  // Add more test cases as needed to cover different scenarios
});