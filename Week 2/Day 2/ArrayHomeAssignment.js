let arr = ['hello', 99, 1.25,, null, 'QA', '@@', 'WORLD']

//push()
//Add an value at the end of the array
arr.push('new')
console.log("Push: "+arr)

//pop()
//Removes the last word from the array
arr.pop()
console.log("Pop: "+arr)

//shift()
//Removes the first element from the array
arr.shift()
console.log("Shift: "+arr)

//unshift()
//Add an new value at the beginning of an array
arr.unshift("Hello")
console.log("Unshift: "+arr)

//To check an value present in the array
console.log(arr.includes("@@"))
console.log(arr.includes("99.0"))

//To check the index of an value in the array
console.log(arr.indexOf(1.25))

//convert array into an String
console.log("Join: "+arr.join())

//Reverse the array
console.log("Reverse: "+arr.reverse())

//sort the array
console.log("Sort: "+arr.sort())