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

app.get('/', function (req, res) {
    res.send('Hola Mundo');
})

app.listen(PORT, function () {
    console.log('ok');
}); 
