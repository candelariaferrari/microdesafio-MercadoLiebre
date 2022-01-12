const express = require('express');
const app = express();
const path = require('path');


app.use('/static',express.static(__dirname + '/public'));

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname,'/views/home.html'));
                        // dirname es una constante de node.js que hacer referencia al directorio del archivo que se esta ejecutando
})
app.listen(3000,()=> console.log('Microdesafio Mercado Liebre'));