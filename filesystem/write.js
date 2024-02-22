let fs = require('fs')

fs.writeFile('./simple.txt',"updating through program",(err,data) => {
    if(err){
        console.log("write not success")
    }
    else{
        console.log("write success") // tostring method will convert binary to readable format [data.toString()]
    }
})

console.log('before reading')

let nenu = fs.readFileSync('./simple.txt')
console.log(nenu) 