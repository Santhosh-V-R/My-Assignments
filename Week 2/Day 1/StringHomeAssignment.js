//Given a string s consisting of words and spaces, return the length of the last word in the string.
//Example 1:
console.log("Example 1")
let s = "Hello World"
//spliting the string into two using " " & converting into array
let value = s.split(" ");
console.log(value)
//find the last word from the array
let lastWord = value[value.length-1]
console.log("The last word in the string: "+lastWord)
//Find the length of the last word
let wordLength = lastWord.length;
console.log("The length of the last word in the string: "+wordLength);


console.log(" ")
console.log("Example 2")
//Example 2:
let str = " fly me to the moon "
//Remove the empty space at beginning and end of the given string
let data = str.trim()
console.log("Data: "+data)
//spliting the string " " & converting into array
let arr = data.split(" ")
console.log("Array: "+arr)

function countLastWord(arr1){
for(let i=0; i<arr1.length; i++){
   //Fetching the last word
   if (i === arr1.length-1){
    console.log("The last word in the string: " +arr[i])
    //console.log("The length of the last word in the string: " +arr[i].length)
    return arr[i].length
   }
}
}

console.log("The length of the last word in the string: " +countLastWord(arr))


console.log(" ")
console.log("Example 3")
