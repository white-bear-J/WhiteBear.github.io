
var scollTop = 0;
var navHeight = $(".header").height();
var padHeight = $(".tj-tab").height();
$(function () {

    $(window).scroll(function () {
        scollTop = $(window).scrollTop();
        getTopData(scollTop);
    });


    $(function () {
        $(".control-tab").click(function () {
            $(this).addClass("active").children(".bottom-line").show();
            $(this).siblings().removeClass("active").children(".bottom-line").hide();
        });
    })

});

function getTopData(scollTop) {
    if(scollTop>navHeight){
        $(".tj-tab").css({"position":"fixed","top":0,"width":"100%","z-index":99});
        $(".nav").css("display","none");
        $("body").css("padding-top",padHeight);
    }
    if (scollTop<=navHeight) {
        $(".tj-tab").css("position","relative");
        $(".nav").css("display","block");
        $("body").css("padding-top",0);
    }
}
