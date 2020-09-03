class WordCloudData {
    constructor(inputString) {
      this.wordsToCounts = new Map();
      this.populateWordsToCounts(inputString);
    }
  
    populateWordsToCounts(inputString) {
  
      // Count the frequency of each word
      let startIdx = 0
      let endIdx = 0
  
      for(let i = 0; i < inputString.length; i++) {
        let curr = inputString[i]
        
        if(startIdx === 0 && endIdx === 0 && this.isLetter(curr)) {
          console.log(`This is the start of a new word at ${curr}`)
          startIdx = i
          endIdx = i + 1
        } else if(i === inputString.length - 1 && this.isLetter(curr)) {
          const word = inputString.slice(startIdx)
          console.log(word)
        } else if(this.isLetter(curr)) {
          endIdx++
        } else if(!this.isLetter(curr)) {
          const word = inputString.slice(startIdx, endIdx)
          console.log(word)
          startIdx = 0
          endIdx = 0
        } 
      }
  
    }
    
    isLetter(letter) {
      const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      return letters.indexOf(letter) >= 0
    }
  
  }

  const test = new WordCloudData('Just a test')
  console.log(test.populateWordsToCounts)