function isAnagram(data1, data2){

    //Removing the spaces & converting the given string lowercase
    let value1 = data1.trim().toLowerCase()
    let value2 = data2.trim().toLowerCase()

    //Sorting the given string
    let str1 = value1.split("").sort().join()
    let str2 = value2.split("").sort().join()

    //Comparing the two sorted strings
    if(str1===str2){
        console.log("The given two strings are anagrams")
    }else{
        console.log("The given two strings are not anagrams")
    }

}

isAnagram(" Listen ", " Silent ")
isAnagram("hello", "world")