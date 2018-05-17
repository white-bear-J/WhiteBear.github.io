// var fun =function () {};



/*
标签切换
 */
function tab() {
    $(this).addClass("active").siblings().removeClass("active");
    var page = $(this).attr("title");
    $("#"+page).show().siblings().hide();
    // var my = this;
    // fun(my);
}


/*
 单图上传
 s:{
uploadfileID:input[type="file"]的文件id,
sawfile_target:显示图片的div选择器,
uploadBtn:提交按钮选择器,
employeeImageUploadUrl:图片上传接口地址,
PicUrl_target:储存图片服务器地址的input[type='hidden']选择器
}

*/
function openPicFile(s) {
    var num = 0;
    $("#"+s.uploadfileID).change (function(){
        var size=this.files[0].size/1024;
        var name=this.value;
        var fileName = name.substring(name.lastIndexOf(".")+1).toLowerCase();
        if(fileName !="png" && fileName !="jpg"&&fileName !="gif"){
            alert("请上传图片格式文件！");
            $("#"+s.uploadfileID).val("");
            if(isIE()=="IE"){
                ieCleaFile(this);
            }
        }else if(size>300){
            alert("图片大小不能超过300KB");
            $("#"+s.uploadfileID).val("");
            if(isIE()=="IE"){
                ieCleaFile(this);
            }
        }else {
            num=1;
            $(s.sawfile_target).css('backgroundImage','url('+window.URL.createObjectURL(this.files[0])+')');//图片路径
        }
        num=0;
    });
    $(s.uploadBtn).click(function(){
        if(num==0){
            alert("请上传图片！");
        }
        if(num==1&&s.employeeImageUploadUrl){
            ajaxFileUpload(s.employeeImageUploadUrl,s.uploadfileID,s.PicUrl_target);
        }
        num = 0
    });


    function ieCleaFile(file) {
        file.after(file.clone());
        file.remove();
    }
}

//employeeImageUploadUrl:图片上传地址
//uploadfileID:input[type="file"]的文件id
//PicUrl_target:储存图片服务器地址的input[type='hidden']选择器
function ajaxFileUpload(employeeImageUploadUrl,uploadfileID,PicUrl_target) {
    $.ajaxFileUpload(
        {
            type:"post",
            url: employeeImageUploadUrl,
            secureuri: false,
            fileElementId: uploadfileID,
            dataType: 'json',
            success: function (data, status)
            {
                if(data.code == 1){
                    $(PicUrl_target).val(data.url);
                    alert("提交成功！");
                }else{
                    alert("上传失败！");
                }
            },
            error: function (data, status, e)
            {
                alert("上传失败！");
            }
        }
    )
}
/*
   返回顶部
    */

function goTop(btn){
    var top =$(window).scrollTop();
    getTopData();

    //btn:返回顶部的按钮的选择器

    $(window).scroll(function () {
        top =$(window).scrollTop()
        getTopData()
    });

    $(btn).click(function () {
//        html和body都写是为了浏览器兼容性
        $("html,body").animate({scrollTop:0},500);

    });

    function getTopData() {
        if(top>400){
            $(btn).stop().show(100);
        }else{
            $(btn).stop().hide(100);
        }
    }
}



function isIE() {
    var explorer =navigator.userAgent ;
//ie
    if (explorer.indexOf("MSIE") >= 0) {
        return "IE";
    }
//firefox
    else if (explorer.indexOf("Firefox") >= 0) {
        return "Firefox";
    }
//Chrome
    else if(explorer.indexOf("Chrome") >= 0){
        return "Chrome";
    }
//Opera
    else if(explorer.indexOf("Opera") >= 0){
        return "Opera";
    }
//Safari
    else if(explorer.indexOf("Safari") >= 0){
        return "Safari";
    }
}

//打赏

var index = 0;
var count= 0;
var flag=0;

count = $(".gift-page-index ").children("a").length;

$(".gift-page").on("touchstart", function(e) {
    startX = e.originalEvent.changedTouches[0].pageX;
    startY = e.originalEvent.changedTouches[0].pageY;
});

$(".gift-page").on("touchend", function(e) {

    moveEndX = e.originalEvent.changedTouches[0].pageX;
    moveEndY = e.originalEvent.changedTouches[0].pageY;
    X = moveEndX - startX;
    Y = moveEndY - startY;
    //左滑
    if ( X < 0 ) {
        e.preventDefault();
        index++;
        if(index>count-1){
            index = 0;
        }
        move(index);
    }
    //右滑
    else if ( X > 0 ) {
        e.preventDefault();
        index--;
        if(index<0){
            index = count-1;
        }
        move(index);
    }
});

function move(index){
    $(".gift-page").eq(index).show().siblings().hide();
    $(".gift-page-index a").eq(index).addClass("active").siblings().removeClass("active");
}
var mo=function(e){e.preventDefault();};

// /***禁止滑动***/
function stop(){
    document.body.style.overflow='hidden';
    document.addEventListener("touchmove",mo,false);//禁止页面滑动
}

// /***取消滑动限制***/
function move(){
    document.body.style.overflow='';//出现滚动条
    document.removeEventListener("touchmove",mo,false);
}


function fixedTop() {
    var bodtH = $("body").height()+60;
    $(".mask").show();
    $("body").css({
        overflow: "hidden",
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
        height: bodtH+"px"
    });

    $(".pl-bottom-wrapper").css("top","0");
    $(".pl-bottom-wrapper").css("bottom","");
}

function fixedBottom() {
    $(".mask").hide();
    $("body").css({
        overflow: "",
        position: "relative",
        bottom: "",
        right: "",
        left: "",
        top: "",
        height: ""
    });
    $(".pl-bottom-wrapper").css("top","");
    // $(".pl-bottom-wrapper").css(" transform","");
    $(".pl-bottom-wrapper").css("bottom",0);
}