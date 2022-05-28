/*const scrollUp = document.querySelector('.scrollUp');

window.addEventListener('scroll', () => {
    if(window.pageXOffset > 100){
        scrollUp.classList.add("active");
    }else{
        scrollUp.classList.remove("active");
    }
});
*/

$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 900){
            $('#topBtn').fadeIn();
        } else{

            $('#topBtn').fadeOut();


        }
    });

$("#topBtn").click(function(){

    $('html ,body').animate({scrollTop : 0},800)
})

});

