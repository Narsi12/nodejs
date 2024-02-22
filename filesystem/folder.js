let fs = require('fs')

fs.mkdir('./filesystem/new.txt/sub1',(err) => {
    if(err){
        console.log("append not success")
    }
    else{
        console.log("write append success") // tostring method will convert binary to readable format
    }
})

 