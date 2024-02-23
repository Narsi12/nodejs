const sql = require('mysql2')

const con = sql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'root',
        database:'test'
    }
)

function getMobiles(){
    con.query(`SELECT * FROM mobiles`, function(err,rows,col){
        if(err){
            console.log("error")
        }
        else{
            console.log(rows)
        }
    })
}

getMobiles()