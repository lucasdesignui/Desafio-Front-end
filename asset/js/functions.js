//mask para telefone no cadastro
$(document).ready(function () {
    $('.telefone').mask('(00) 0000-0000');
});

//troca cor dos btn com hover
$(function () {
    $("#btn-nav-buy").hover(
        function () {
            $('.btn-nav-buy-img').attr('src','asset/arrow-right-black-small.svg');

            $(this).mouseleave(function () {
                $(this).children('.btn-nav-buy-img').attr('src', 'asset/arrow-left-right-small.svg');
            });
        }
    );

    $("#btn-plano-1").hover(
        function () {
            $(this).children('.btn-plano-img').attr('src','asset/cart-white.svg');
            $(this).toggleClass('text-white');
            $(this).toggleClass('text-black-50');

            $(this).mouseleave(function () {
                $(this).children('.btn-plano-img').attr('src', 'asset/cart-black.svg');
            });
            
        }
    );

    $("#btn-plano-2").hover(
        function () {
            $(this).children('.btn-plano-img').attr('src','asset/cart-white.svg');
            $(this).toggleClass('text-white');
            $(this).toggleClass('text-black-50');

            $(this).mouseleave(function () {
                $(this).children('.btn-plano-img').attr('src', 'asset/cart-black.svg');
            });
            
        }
    );

});
// botão voltar para o topo
$(function (){
    $("#toTop").click(function () {

        $("html, body").animate({scrollTop: 0}, 1000);
     });
});