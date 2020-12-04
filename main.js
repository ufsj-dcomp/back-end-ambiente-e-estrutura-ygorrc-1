var express = require ('express');
var cors = require('cors');
var jwt = require('jsonwebtoken');
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

app.post("/auth",(req,resp) =>{
    var user = req.body;
    console.log("AUTH - usuario" + req.body); 
    connection.query("SELECT * FROM usuario WHERE email = ? and senha = ? ",[user.email,user.senha],(err, result) =>{
        var usuario = result[0];
        if(result.length == 0){
            resp.status(401);
            resp.send({token: null,usuario: usuario,success: false});
        }else{
            let token = jwt.sign({id: usuario.email},'patineteweb',{expiresIn:6000});
            resp.status(200);
            resp.send({token: token,usuario: usuario,success: true});
        }
        
    });  
});
verifica_token = (req, resp, next) =>{
    var token = req.headers['x-access-token'];

    if(!token){
        return resp.status(401).end();
    }
    jwt.verify(token,'patineteweb',(err,docoded) =>{
        if(err)
            return resp.status(401).end();
        
        req.usario = docoded.id;
        next();
    })
}
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
app.get("/patinete",verifica_token,(req,resp) =>{
    var patineteId = req.params.patineteId;
    console.log("GET - patinete"); 
    connection.query("SELECT * FROM patinete",(err, result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();
        }else{
            resp.status(200);
            resp.json(result).end();
        }
    });  
});
app.post("/patinete",verifica_token,(req, resp)=>{
    var patinete = req.body;
    console.log("POST - patinete");
    connection.query("INSERT INTO patinete SET ?",[patinete],(err, result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();
        }else{
            resp.status(200);
            resp.json(result.isertedId).end();
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
            resp.json(result).end();
        }
    });

});
app.get("/patinete/:patineteId",verifica_token,(req,resp) =>{
    var patineteId = req.params.patineteId;
    console.log("GET - patineteID" +  patineteId ); 
    connection.query("SELECT * FROM patinete WHERE id = ?",[patineteId],(err, result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();
        }else{
            resp.status(200);
            resp.json(result).end;
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
            resp.json(result).end();
        }
    });  
});
app.put("/patinete/:patineteId",verifica_token,(req,resp) =>{
    var patineteId = req.params.patineteId;
    var patinete = req.body;
    console.log("PUT - patineteID " +  patineteId ); 
    connection.query("UPDATE patinete SET ? WHERE id = ?",[patinete,patineteId],(err, result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();
        }else{
            resp.status(200);
            resp.json(result).end;
        }
    });  
});
app.delete( "/patinete/:patineteId" ,verifica_token, (req, resp )  =>  {
    var  patineteId  =  req.params.patineteId ;
    console.log ( "DELETE - patineteId "  +  patineteId ) ;

    connection.query ( "DELETE FROM patinete WHERE id = ?" ,  [ patineteId ] ,  ( err ,  result )  =>  {
        if  (err)  {
            console.log (err);
            resp.status(500).end() ;
        }  else  {
            resp.status ( 200 ) ;
            resp.json(result).end;
        }
    } ) ;

} ) ;
app.listen(3000,() =>{
    console.log('TecPatinete - Porta 3000:')
});