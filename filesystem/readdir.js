let fs = require('fs')

fs.readdir('./filesystem/new.txt',(err,data) => {
    if(err){
        console.log("append not success")
    }
    else{
        console.log("write append success") // tostring method will convert binary to readable format
        console.log(data)
        for(f of data){
            fs.readdir('./filesystem/new.txt'+f,(err,data) =>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log(data)
                }
            })
        }
    }
})