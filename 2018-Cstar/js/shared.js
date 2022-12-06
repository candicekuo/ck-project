$(document).ready(function(){
    //gotop 回最上
    $("#gotop").click(function(){
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });
    //gotop 判斷出現隱藏
    $(window).scroll(function(){
                goTop();
            });
    //topBar xs 開合
    $(".topBar i").click(function(){
        $(".topBar ul").slideToggle();
    });
    
}); 

/*gotop出現隱藏*/
function goTop(){
    var h = $("html,body").scrollTop();
    $(document).scrollTop() > 700?$("#gotop").fadeIn():$("#gotop").fadeOut();
}

