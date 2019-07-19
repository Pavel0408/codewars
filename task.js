// Some languages like Chinese, Japanese, and Thai do not have spaces between words. However, most natural languages processing tasks like part-of-speech tagging require texts that have segmented words. A simple and reasonably effective algorithm to segment a sentence into its component words is called "MaxMatch".

// MaxMatch
// MaxMatch starts at the first character of a sentence and tries to find the longest valid word starting from that character. If no word is found, the first character is deemed the longest "word", regardless of its validity. In order to find the rest of the words, MaxMatch is then recursively invoked on all of the remaining characters until no characters remain. A list of all of the words that were found is returned.

// So for the string "happyday", "happy" is found because "happyday" is not a valid word, nor is "happyda", nor "happyd". Then, MaxMatch is called on "day", and "day" is found. The output is the list ["happy", "day"] in that order.

// The Challenge
// Write maxMatch, which takes a spaceless, lowercased String as input and returns an Array of all the words found, in the order they were found. All valid words are in the Set VALID_WORDS, which only contains around 500 English words.

// Note: This algorithm is simple and operates better on Chinese text, so accept the fact that some words will be segmented wrongly.

// Happy coding :)

const VALID_WORDS = new Set([`good`, `luck`]);

function maxMatch(sentence) {
  const output = [];
  function checkWord(word) {
    return VALID_WORDS.has(word);
  }

  function sliceWord(word) {
    let localWord = word;
    while (localWord.length > 1) {
      if (checkWord(localWord)) {
        return localWord;
      }
      localWord = localWord.slice(0, -1);
    }

    return localWord;
  }
  while (sentence.length > 0) {
    const nextWord = sliceWord(sentence);
    output.push(nextWord);

    sentence = sentence.slice(nextWord.length, sentence.length);
  }

  return output;
}
