let fs = require('fs')

fs.unlink('D:\\nodejsCodes\\filesystem\\simple.txt',(err) => {
    if(err){
        console.log("append not success")
    }
    else{
        console.log("write append success") // tostring method will convert binary to readable format
    }
})

 