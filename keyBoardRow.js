// Given a List of words, return the words that can be typed using letters of alphabet
// on only one row's of American keyboard like the image below.

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let rows = { // created a hash storing key (alphabets) and value (row number)
        q: 0, w: 0, e: 0, r: 0, t: 0, y: 0, u: 0, i: 0, o: 0, p: 0,
        a: 1, s: 1, d: 1, f: 1, g: 1, h: 1, j: 1, k: 1, l: 1,
        z: 2, x: 2, c: 2, v: 2, b: 2, n: 2, m: 2
    }

    return words.filter(word => { // returning a new array
        let row = rows[word[0].toLowerCase()] // this tells us which row the word is in by taking the first letter
        let valid = true; // default of true

        for(let i = 1; i < word.length; i++) { // we now itterate through the current word starting at index of 1
            if(rows[word[i].toLowerCase()] !== row) { // if a letter doesn't match the word's row
                valid = false; // set valid to false
                break; // break out of for loop
            }
        }
        return valid // return true or false
    })

};
