'use strict'

/**
 input: word, letters (both strings)
 output: true/false
 ONLY LOWERCASE! NO SPACE OR PUNCTUATION!

 testcases:
 canConstructWord('aa', 'abc');
  // false -- can't build "aa" with only 1 "a"

canConstructWord('abc', 'dcba');
  // true -- can build "abc" with letters "abcd"

canConstructWord('aabb', 'bcabad');
  // true -- can build "aabbcc" with those letters
 */

/** Takes strings, word and letters, and checks if word can be constructed from
 * characters in letters. Returns true or false.
 */
function canConstructWord(word, letters) {
  //create freq counter for word
  const wordCounter = createFrequencyCounter(word);
  //create freq counter for letters
  const letterCounter = createFrequencyCounter(letters);

  //loop through word freq counter
  for (let letter in wordCounter) {
    //&& check that wordFreq[letter] <= lettersFreq[letter]
    //if false, return false
    if (!(letter in letterCounter)) return false;
    if (wordCounter[letter] > letterCounter[letter]) return false;
  }

  return true;
}

//TODO: docstring
//TODO: parameter more general (items)

function createFrequencyCounter(str) {
  const letterCounts = {};

  for (let letter of str) {
    const count = letterCounts[letter] || 0;
    letterCounts[letter] = count + 1;
  }

  return letterCounts;
}
