//Reversing number

function reverse(number){
    s = 0;
    
    s = Number(String(number).split('').reverse().join(''));

    return s;
}
console.log("Reversed number is " + reverse (12346789));



//Finding the longest word
var text = "Assalomu alaykum ahli haloyiq" 

function findLongWord(arr) {
    arr = arr.split(" ");
    
    var longestWord = arr[0];
    for(i=1; i<arr.length; i++){
        
        if(longestWord.length < arr[i].length){
            longestWord=arr[i];
        }
    }
    return longestWord;
}

console.log(findLongWord(text));

//Finding number of vowels
var text = "Welcome to our English speaking club"
const vowelCount = str => {
    let vowels = /[aeiou]/gi;
    let result = str.match(vowels);
    let count = result.length;
  
    console.log(count);
};
vowelCount(text);

  