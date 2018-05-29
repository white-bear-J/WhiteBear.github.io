var _start = 0,
    _end = 0,
    startY = 0


$(function () {
    $("body").on("touchstart",function (e) {
        _start = e.originalEvent.changedTouches[0].pageY;
    });

    $("body").on("touchmove",function (e) {
        _end = _start - e.originalEvent.changedTouches[0].pageY;
        //下滑才执行操作
        if(_end < 0){
            slideDownStep1(_end);
        }
    });

    $("body").on("touchend",function (e) {
        if(_end >0){
            console.log("左滑或上滑 "+_end);
        }else{
            console.log("右滑或下滑"+_end);
            slideDownStep2();
            //刷新成功则
            //模拟刷新成功进入第三步
            setTimeout(function(){
                slideDownStep3();
            },2500);
        }
    });
});


//第一步：下拉过程
function slideDownStep1(dist){ // dist 下滑的距离，用以拉长背景模拟拉伸效果
    var slideDown = $(".up-box");
    $(slideDown).show();
    // $(slideDown).css("height",dist+"px")
}
//第二步：下拉，然后松开，
function slideDownStep2(){
    //刷新数据
    if($(window).scrollTop()==0){
        location.reload();
    }
}
//第三步：刷新完成，回归之前状态
function slideDownStep3(){
    var slideDown = $(".up-box");
    $(slideDown).hide();
}