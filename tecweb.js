var express = require ('express');
var app = express();

app.get('/aplicativo',function(req,res){
    res.send('Aplicativo Exemplo!');
});
app.get('/html', function(req,res){
    res.send('<html><title>Hello World!</title><body>Lista 03 – Tecnologias Web</body></html>');
});
app.post('/imagens', function(req,res){
    res.send("Imagem 1 – Imagem 2 – Imagem3");
});
app.delete('/clientes/10', function(req,res){
    res.send("Cliente número 10 removido com sucesso");
});
app.listen(3000,function(){
    console.log('Example app listening on port 3000!');
});