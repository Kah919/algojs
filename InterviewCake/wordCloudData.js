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
          startIdx = i
          endIdx = i + 1
        } else if(i === inputString.length - 1 && this.isLetter(curr)) {
          const word = inputString.slice(startIdx)
          this.normalize(word)
        } else if(this.isLetter(curr) || curr === '\'') {
          endIdx++
        } else if(!this.isLetter(curr)) {
          const word = inputString.slice(startIdx, endIdx)
          this.normalize(word)
          startIdx = 0
          endIdx = 0
        } 
      }
  
    }
    
    isLetter(letter) {
      const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      return letters.indexOf(letter) >= 0
    }

    addToMap(word) {
      if(this.wordsToCounts.has(word)) {
        this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1)
      } else {
        this.wordsToCounts.set(word, 1)
      }
    }

    normalize(word) {
      const capitalize = word.charAt(0).toUpperCase() + word.slice(1)
      const lowercase = word.charAt(0).toLowerCase() + word.slice(1)
      if(word === lowercase && this.wordsToCounts.has(capitalize)) {
        this.wordsToCounts.set(lowercase, this.wordsToCounts.get(capitalize) + 1)
        this.wordsToCounts.delete(capitalize)
      } else if(word === capitalize && this.wordsToCounts.has(lowercase)) {
        this.wordsToCounts.set(lowercase, this.wordsToCounts.get(lowercase) + 1)
      } else if(word !== ''){
        this.addToMap(word)
      }
    }
    
  
  }

  // const test = new WordCloudData('Strawberry short cake? Yum!')
  // const test2 = new WordCloudData('I like cake')
  // const test3 = new WordCloudData('Chocolate cake for dinner and pound cake for dessert  ')
  // const test4 = new WordCloudData('Dessert - mille-feuille cake')
  // const test5 = new WordCloudData('Mmm...mmm...decisions...decisions')
  const test6 = new WordCloudData("Allie's Bakery: Sasha's Cakes")
  console.log(test6.populateWordsToCounts)
  console.log(test6.wordsToCounts)