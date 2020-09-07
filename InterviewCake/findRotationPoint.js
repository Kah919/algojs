// I want to learn some big words so people think I'm smart.

// I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

// Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:

//   const words = [
//   'ptolemaic',
//   'retrograde',
//   'supplant',
//   'undulate',
//   'xenoepist',
//   'asymptote',  // <-- rotates here!
//   'babka',
//   'banoffee',
//   'engender',
//   'karpatka',
//   'othellolagkage',
// ];

// JavaScript
// Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

// To keep things simple, you can assume all words are lowercase.

function findRotationPoint(words) {

    // Find the rotation point in the vector
      let start = 0
      let end = words.length - 1
      
      while(start < end) {
        let distance = end - start
        let mid = start + Math.floor(distance / 2)
        let curr = words[mid]
      
        if(curr >= words[start]) {
          start = mid
        } else {
          end = mid
        }
        
        if(start + 1 === end) return end
        
      }
  }

console.log(findRotationPoint(['b', 'c', 'd', 'e', 'a']))
console.log(findRotationPoint(['e', 'a', 'b', 'c', 'd']))
console.log(findRotationPoint(['d', 'e', 'a', 'b', 'c']))

