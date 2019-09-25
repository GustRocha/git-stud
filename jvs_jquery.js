$ (document).ready(function(){
    $('#tiras').click(function(){
        //$('h1').hide(); //Esconder de modo bruto
        $('h1').fadeOut(); // Esconde de maneira suave
    });
    $('#playba').click(function(){
    //$('h1').show(); // Mostra o que esta em oculto modo bruto
    $('h1').fadeIn(); //Mosta o que esta em oculto modo suave 
    $('#deu').text("Deu ruim os canas"); // mensagem no HTML
    $('#deu').css({color:'blue', border:'2px solid red', backgroundColor:'black'}); 
    $('#deu').delay(3000);  //delay
    $('#deu').fadeOut(); 
    });
});