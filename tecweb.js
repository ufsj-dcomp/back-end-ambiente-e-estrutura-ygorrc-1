var express = require ('express');
var cors = require('cors');
var app = express();

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "Ufsj2010!!",
    database: "patinetebase"
});
app.use(cors());
app.use(express.json());

app.get("/usuario",(req,resp) =>{
    var usuarioId = req.params.usuarioId;
    console.log("GET - usuario"); 
    connection.query("SELECT * FROM usuario",(err, result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();
        }else{
            resp.status(200);
            resp.json(result);
        }
    });  
});
app.get("/patinete",(req,resp) =>{
    var patineteId = req.params.patineteId;
    console.log("GET - patinete"); 
    connection.query("SELECT * FROM patinete",(err, result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();
        }else{
            resp.status(200);
            resp.json(result);
        }
    });  
});
app.post("/patinete",(req, resp)=>{
    var patinete = req.body;
    console.log("POST - patinete");
    connection.query("INSERT INTO patinete SET ?",[patinete],(err, result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();
        }else{
            resp.status(200);
            resp.json(result.isertedId);
        }
    });

});
//usuario post
app.post("/usuario",(req, resp)=>{
    var usuario = req.body;
    console.log("POST - usuario");
    connection.query("INSERT INTO usuario SET ?",[usuario],(err, result) =>{
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
//usuario
app.get("/usuario/:usuarioId",(req,resp) =>{
    var patineteId = req.params.usuarioId;
    console.log("GET - usuarioID" +  usuarioId ); 
    connection.query("SELECT * FROM patinete WHERE id = ?",[usuarioId],(err, result) =>{
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
    var patinete = req.corpo;
    console.log("PUT - patineteID" +  patineteId ); 
    connection.query("UPDATE patinete SET? WHERE id = ?",[patinete,patineteId],(err, result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();
        }else{
            resp.status(200);
        }
    });  
});
app.delete ( "/patinete/:patineteId" ,  ( req ,  resp )  =>  {
    var  patineteId  =  req . params . culturaId ;
    var  patinete  =  req . corpo ;
    console . log ( "DELETE - patineteId"  +  patineteId ) ;

    conexão . query ( "Delete FROM patinete WHERE id =?" ,  [ patinteId ] ,  ( err ,  resultado )  =>  {
        if  ( err )  {
            console . log ( err ) ;
            resp . status ( 500 ) . end ( ) ;
        }  else  {
            resp . status ( 200 ) ;
            resp . json ( resultado ) ;
        }
    } ) ;

} ) ;
app.listen(3000,() =>{
    console.log('TecPatinete - Porta 3000:')
});