let fs = require('fs')

fs.appendFile('D:\\nodejsCodes\\filesystem\\simple.txt',"adding extra line",(err) => {
    if(err){
        console.log("append not success")
    }
    else{
        console.log("write append success") // tostring method will convert binary to readable format
    }
})

 