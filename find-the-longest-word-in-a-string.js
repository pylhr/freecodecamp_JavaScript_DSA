function findLongestWordLength(str) {
  const word = str.split(' ');

  let longestWord = 0;

  for(let i = 0; i< word.length; i++ ){
    const wordOfConcern = word[i];
    if(wordOfConcern.length > longestWord){
      longestWord = wordOfConcern.length;
    }
  }
  console.log(longestWord);
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");