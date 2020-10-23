var express = require ('express');
var app = express();

app.use(express.json());

app.post("/patinete",(req, resp)=>{
    var patinete = req.body;
    console.log(JSON.stringify(patinete));
});

app.get("/patinete/:patineteId",(req,resp) =>{
    var patineteId = req.params.patineteId;
    console.log("Get - patineteID" +  patineteId );    
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