var express = require ('express');
var app = express();

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "Ufsj2010!!",
    database: "patinetebase"
});
app.use(express.json());

app.post("/patinete",(req, resp)=>{
    var patinete = req.body;
    console.log("POST - patinete");
    connection.query("INSERT INTO patinete SET ?",[patinete],(err, result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();
        }else{
            resp.status(200);
            resp.json(result);
        }
    });

});

app.get("/patinete/:patineteId",(req,resp) =>{
    var patineteId = req.params.patineteId;
    console.log("GET - patineteID" +  patineteId ); 
    connection.query("SELECT * FROM patinete WHERE id = ?",[patineteId],(err, result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();
        }else{
            resp.status(200);
            resp.json(result);
        }
    });  
});

app.put("/patinete/:patineteId",(req,resp) =>{
    var patineteId = req.params.patineteId;
    console.log("PUT - patineteID" +  patineteId );    
});

app.delete("/patinete/:patineteId",(req,resp) =>{
    var patineteId = req.params.patineteId;
    console.log("DELETE - patineteID" +  patineteId );    
});
app.listen(3000,() =>{
    console.log('TecPatinete - Porta 3000:')
});