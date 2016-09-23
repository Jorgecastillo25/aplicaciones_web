$(document).ready(function(){
    $('#divSalida').html('listo.');
    $('#imgtaric').click(function(){
        $('#divSalida').html('un click');
        $('#divSalida').addClass('normal');
        $('#divSalida').removeClass('error');
        $.get('/helloworld/',{},function(conte){
          $('#divSalida').html(''+conte);          
        });
    });
$('#imglulu').click(function(){
            $('#divSalida').addClass('normal');
            $('#divSalida').removeClass('error');
       //console.log('hola we');
        $.getJSON('/alumnos/',function(datos){
            //console.log(datos);  
            var elemento=[];
            $.each(datos,function(i,v){
                console.log(v.nombre);
                elemento.push(v.nombre)
            });
            $('#divSalida').html(''+elemento.join('<br>'));
        }).fail(function(){
            $('#divSalida').html('Error');
            $('#divSalida').addClass('error');
        });   
                 
    });

});