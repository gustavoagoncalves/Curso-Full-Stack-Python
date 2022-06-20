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
        console.log($(this).find('h4').text() + ' esgotado') //esconde
        })
        .show(2000, function(){
            console.log($(this).find('h4').text() + ' em estoque') //mostra
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

    /*
    * Ouvinte de eventos .nav-modal-open
    */
    $('.nav-modal-open').on('click', function(e){

        e.preventDefault();
        let elem= $(this).attr('rel')
        $('.modal-body').html($('#'+elem).html())
        $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modelId'))
        myModal.show()
    })

    function validate( elem ){
        if(elem.val() == ''){
            
            console.log('O campo '+ elem.attr('name')+ ' é obrigatório')

            elem.parent().find('text-muted').show()

            elem.addClass('invalid')

            return false
        } else {
            elem.parent().find('text-muted').hide()
            elem.removeClass('invalid')
        }
    }

    $('.body').on('submit', '.modal-body .form', function(e){

        e.preventDefault()
        const inputNome = $('#nome')
        const inputEmail = $('#e-mail')

        validate(inputNome)
        validate(inputEmail)

        if(inputEmail.hasClass('invalid') || inputNome.hasClass('invalid')){
            console.log('verificar os campos obrigatórios')
            return false
        } else {
            $(this).submit()
        }
    })

    $('body').on('blur', '#nome', function(){
        validate($(this))
    })

    $('body').on('blur', '#e-mail', function(){
        validate($(this))
    })

    $('body').on('focus', '#date', function(){
        $(this).datepicker()
    })

    $('body').on('blur', '#date', function(){
        validate($(this))
        $('#date').mask('00/00/0000');
    })
    $('body').on('blur', '#time', function(){
        validate($(this))
        $('#time').mask('00:00');
    })
    $('body').on('blur', '#cep', function(){
        validate($(this))
        $('#cep').mask('00000-000');
    })
    $('body').on('blur', '#phone', function(){
        validate($(this))
        $('#phone').mask('00000-0000');
    })
    $('body').on('blur', '#cpf', function(){
        validate($(this))
        $(this).mask('000.000.000-00');
    })
    
})