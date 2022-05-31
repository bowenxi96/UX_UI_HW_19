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



LottieInteractivity.create({
    mode:"scroll",
    player: "#firstLottie",
    container: "#block-yui_3_17_2_1_1653944671761_10292",
    actions: [
        {
            visibility:[0,1],
            type: "seek",
            frames: [-160, 160]
        }
    ]
});


