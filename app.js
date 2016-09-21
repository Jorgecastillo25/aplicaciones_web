var express = require('express');
var app = express();

const PORT = 8080;
//

app.engine('html', require('atpl').__express);
app.set('devel', false);
app.set('view engine', 'html');

app.get('/nosotros/',function(req,res){
 res.render('nosotros',{'nombre':'ponchotec'});   
});

app.get('/listado', function(req,res){
    var arreglo=[];
    arreglo.push('pastel');
    arreglo.push('sushi');
    arreglo.push('dogo');
    arreglo.push('soda');
    arreglo.push('agua fresca');
    arreglo.push('ctm');
    
    //res.send('un texto');
    var variables = {
        'arreglo': arreglo
    };
    res.render('mostrar2',variables);
});

/*app.get('/', function (req, res) {
    res.send('Hola Mundo');
})*/
app.use('/',express.static(__dirname+"/public"));
app.get('/helloworld/', function(req,res){
    var oFecha= new Date();
    var rnd = oFecha.getTime();
    res.send('Hola Mundo' + rnd);
});
app.get('/numeros/', function(req,res){
    var numeros = [2,3,4,5,100];
    res.json(numeros)
});
app.get('/alumnos/', function(req,res){
    var alumnos = [];
    alumnos.push({nombre:"Luis", "correo":"luis@gmail.com"});
    alumnos.push({nombre:"pepe", "correo":"pepe@gmail.com"});
    res.json(alumnos);
});

app.listen(PORT, function () {
    console.log('ok');
}); 
