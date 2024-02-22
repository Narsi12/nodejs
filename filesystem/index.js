let fs = require('fs')
fs.readFile('./simple.txt',(err,data) => {
    if(err){
        console.log("file not found")
    }
    else{
        console.log(data.toString()) // tostring method will convert binary to readable format
    }
})

console.log('before reading')

let nenu = fs.readFileSync('./simple.txt')
console.log(nenu)