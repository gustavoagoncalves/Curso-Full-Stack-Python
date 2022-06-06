// instancia jQuery e evit conflitos com outras bibliotecas
// jQuery(function($){
$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel();
    
    let titulos = $('h4') //tag
    
    let itens = $('.featured-item') //class
    
    let destaques = $('#featured') //id
    
    // Configuração de produtos
    $ ('.featured-item a').addClass('btn btn-success stretch-link');
    
    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').prepend('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    // $('.featured-item:first h4').css('color', '#f000')
    
    $('.featured-item h4').click( function(){
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100' 
        });  
        
    });
    
    /*
    * Manipulação de evento
    */
    $('.featured-item a').on('click', function(event){
        
        event.preventDefault();
        alert('Produto Esgotado');
        
    })

    /*
    Callback
    * entendendo ações que começam ao término de outra
    */ 

    $('.featured-item:nth(1)')
        .hide(2000, function(){
        //este é o callback
        console.log($(this).find('h4').text() + 'esgotado') //esconde
        })
        .show(2000, function(){
            console.log($(this).find('h4').text() + 'em estoque') //mostra
        })

    /*
    * Animações
    */

    const duracao = 1000 // equivalente a 1 segundo

    $('.featured-item:nth(0)')
    .hide(duracao)
    .show(duracao)
    .fadeOut(duracao)
    .fadeIn(duracao)
    .toggle(duracao)
    .toggle(duracao)

    $('#form-submit').on('click', function(e){

        e.preventDefault()
        
        if($('#email').val() != ''){
            $('#email').animate({
                opacity: "toggle",
                top: "-50"
            }, duracao, function(){
                console.log($(this).val())
            })
        }

    }); 

    
});