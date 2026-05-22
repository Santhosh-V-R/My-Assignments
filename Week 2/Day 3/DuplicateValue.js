let dup = [56,78,90,23,90,76,43,56]
dup.sort()
for(let i=0; i<dup.length; i++){
    if(dup[i]===dup[i+1]){
        console.log("Duplicate Number: "+dup[i])
    }
}

let data = ["chrome",true,132.8]
data[5]= 'webkit'
console.log(data)
data.pop()
console.log(data)
data.push("firefox")
console.log(data)
data.shift()
console.log(data)
