window.onscroll = () => {
    let header = document.querySelector('.header')

    header.classList.toggle('sticky', window.scrollY > 100)
}

$(document).ready(function() {
    $('.scrollTo').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var moveTo = $(target).offset().top;

        $('html, body').animate({
            scrollTop: moveTo
        }, 1000); // Tempo da animação em milissegundos
    });
});
