var ary=[],tick;
var useNumber;
var winWidth,mbbWidth,lbWidth;

if (window.history.scrollRestoration && (window.history.scrollRestoration=="auto"))
    window.history.scrollRestoration="manual";

$(document).ready(function(){
    useNumber=0;
    menuRez();
    /*發佈更新*/
    msgBoxResize();
    $(".btnClose,.msgFullBg").click(function(){
        infoClose();
    });
    $(".btnPublish").click(function(){
        $(".msgFullBg,.msgBox").fadeIn();
    });
    $(".btnCopy").click(function(){
        var a = $(this).prev().select();
        document.execCommand("Copy");
        infoClose();
    });
    /*menu 編輯器開關*/
    $(".menuHid").click(function(){
        var oplb,opma;
        if(winWidth >= 1200){
            oplb = 410;
            opma = 410;
        }else if(winWidth <= 1199 && winWidth >= 992){
            oplb = 310;
            opma = 330;
        }
        $(".menuBox").animate({left:-240},500);
        $(".menuBoxBelow").animate({left:-300},500);//動態抓寬填or if
        $(".leftBar").animate({left:0,width:oplb},500);//藍塊410 須動態變數
        $(".main").animate({paddingLeft:opma},500);//內容偏移 動太
        $(".topBar").animate({left:0},500,function(){ //藍底提示滿版
            getPos();
        });
    });
    $(".showC").click(function(){
        var lb,ma,lft = 240; //mbb
        if(winWidth >= 1200){
            lb = 340;
            ma = 580;
        }else if(winWidth <= 1199 && winWidth >= 992){
            lb = 240;
            ma = 500;
        }else{
            lft = 0;
        }
        $(".menuBox").animate({left:0},500);
        $(".menuBoxBelow").animate({left:-60},500);
        $(".leftBar").animate({left:lft,width:lb},500); 
        $(".main").animate({paddingLeft:ma},500);
        $(".topBar").animate({left:240},500,function(){
            $(".leftBar,.main").attr("style","opacity:1");
            $(this).removeAttr("style");
            getPos();
        });
    });
    
    /*menu 履歷版塊管理 顯示所在版塊*/
    $("#stb,.stMove2").on("click","li",function(){ //內抓
        var check = $(this).index();
        $("html,body").animate({scrollTop:ary[check]},600);
    });
    $(".rSortable ul:first-child li,.pic~p").click(function(){ //最上
        $("html,body").animate({scrollTop:0},600);
    });
    $(window).scroll(function(e) {
        if (tick > 0) {
            clearTimeout(tick);
            tick = 0;
        }
        tick = setTimeout(setPos, 100);
    }).resize(getPos);
    getPos();
    
    /*menu 履歷版塊管理 隱藏變名刪除開關*/
    $("#stb").on("click",".tipsBox > i",function(){
        var t = $(this).next();
        if(t.css("display") == "block"){
            t.fadeOut(400);
        }else{
            t.fadeIn(400).closest(".stMove").siblings().children(".tipsBox").children(".tips").fadeOut();
        }
    });
    /*menu 履歷版塊管理 隱藏變名刪除功能*/
    $(".stHid").click(function(e){
        var t = $(this).closest(".stMove");
        var a = t.index();
        t.hide();
        $(".stMove2 > li").eq(a).hide(400);
        var ta = $(this).closest(".tipsBox").prev().children().text();
        var i = '<div class="hidBox">'+ta+'</div>';
        $(i).appendTo($("#hidInfoBox")).css("opacity","0").animate({opacity:1},400);
        if($("#hidInfoBox .hifBox").length < 1){
           $(".hbNone").animate({height:0},400,function(){
               $(this).hide();
           });
        }
        $(".stMove3 > li").eq(a).fadeOut(400, function(){
            getPos();    
        });
    });
    $("#stb").on("click",".chgName",(function(){
        var t = $(this);
        var te = t.closest(".tipsBox").prev().children();
        var a = t.parents(".stMove").index();
        t.parent().hide();
        te.attr("contenteditable","true").focus().keydown(function(e){
            var kc = e.keyCode;
            if(kc == 13){
                this.setAttribute("contenteditable","false");
            }
        }).blur(function(){
            var f = $(this).attr("contenteditable","false").text();
            $(".stMove2 > li").eq(a).text(f);
        });
    }));
    $("#stb").on("click",".del",(function(){
        var t = $(this).parents(".stMove");
        var a = t.index();
        t.remove();
        $(".stMove3 > li").eq(a).remove();
        $(".stMove2 > li").eq(a).remove();
        useNumber--;
        $(".useBox span").empty().text(useNumber);
        getPos();
    }));
    /*menu 新增履歷版塊 開關*/
    $(".addBtn,.btnClz").click(function(){
        var n = parseInt($(".menuBoxBelow").css("left"));
        var a = (n == -60)?240:-60;
        $(".menuBoxBelow").animate({left:a},500);
    });
    /*menuBoxBelow 履歷版塊隱藏內容*/
    $("#hidInfoBox").on("click",".hidBox:not(.hbNone)",function(e){
        var len = $("#hidInfoBox .hidBox").length;
        var t = $(this);
        var tex = t.text();
        var ay = []; 
        t.animate({opacity:0},400,function(){
            $(this).remove();
            if($("#hidInfoBox .hidBox").length == 1){
                $(".hbNone").show().animate({height:94},400);
            }
        });
        for(var i = 0; i<ary.length;i++){ //抓左側所有項目的值
            ay.push($(".stInfo span").eq(i).text());
        }
        for(var i = 0, j=ay.length; i<j;i++){
            if (tex == ay[i]){
                $(".stMove").eq(i).show(400);
                $(".stMove2 > li").eq(i).show(400);
                $("html,body").animate({scrollTop:ary[i]},400,function(){
                    $(".stMove3 > li").eq(i).fadeIn(400);
                    getPos();
                });
                $(".tips").eq(i).hide();
                break;
            }
        }
    });
    /*menuBoxBelow 自訂版塊*/
    $(".adCtzBox img").click(function(){
        if(useNumber < 2){
            switch(this.id){
                case "adNewBox1":
                    buildUp(4,3,2);
                    break;
                case "adNewBox2":
                    buildUp(6,2,2);
                    break;
                case "adNewBox3":
                    buildUp(12,1,1);
                    break;
            }
            useNumber++;
        }
        $(".useBox span").empty().text(useNumber);
    });
    /*menu 加分亮點 影音履歷 開關*/
    $("#exhibitShow,#videoShow").change(function(){
        var a = (this.id == "exhibitShow")?".eShow":".vShow";
        if(this.value == 1){
            $(a).fadeOut(400);
        }else{
            $(a).fadeIn(400,function(){
                var b = ".rightBar "+ a;
                var h = ($(b).offset().top) -100;
                $("html,body").animate({scrollTop:h},400);
            });
        }
    });
    /*menu 履歷版塊管理 拖曳換位子*/
    $("#stb").sortable({
        axis:"y", 
        cursor: 'move', 
        handle: ".stm",
        start: function(e, ui) {
            str = ui.item.index();
        },
        update: function(e, ui) {
            end = ui.item.index();
            rightMove(str,end,".stMove2 > li");
            rightMove(str,end,".stMove3 > li");
            getPos();
            setPos();
            $("html,body").animate({scrollTop:ary[end]},400);
        }
    }).disableSelection();
});
/*menu 履歷版塊管理 拖曳換位子 排序狀態取高*/
function rightMove(s,e,c){ 
    var li = $(c).css("position", "relative");
    if(e > s){ //往下
        if(e == li.length-1){
            li.eq(e).after(li.eq(s)); //結束後接開始
        }
        li.eq(s).insertBefore(li.eq(e+1)); //開始到結束+1的前
    }
    else{ //往上
        if(e == 0){
            li.eq(s).insertBefore(li.eq(0)); //開始到0前
        }
        li.eq(s).insertBefore(li.eq(e)); //開始到結束前
    }
}
function setPos(){ //給st狀態
    var v = $("html,body").scrollTop() +30;
    var li = $(".stMove");
    var aboutMe = $(".rSortable ul:first-child li");
    for(var i = 0,j = ary.length; i < j;++i){
        if (v >= ary[i]){
            li.eq(i).addClass("st").siblings().removeClass("st");
            aboutMe.removeClass("st");
        }
        else if(v<ary[0]){
            li.removeClass("st");
            aboutMe.addClass("st");
        }
        else
            break;
    }
}
function getPos(){ //抓右邊每個版的高放ary內
    if(ary.length>0) ary = [];
    $(".stMove3 > li").each(function(){
        ary.push(
            $(this).offset().top -100
        );
    });
}

/*發佈更新*/
$(window).resize(function(){
    msgBoxResize();
    menuRez();
});
function msgBoxResize(){
    var w = $(window).width();
    var h = $(window).height();
    var a = w/2-240;
    var b = h/2-100;
    $(".msgBox").css({"left":a,"top":b});
}
function infoClose(){
    $(".msgFullBg,.msgBox").fadeOut();
}
/*工具列抓寬*/
function menuRez(){
    winWidth = $("html").width();
    mbbWidth = $(".menuBoxBelow").innerWidth();
    lbWidth = $(".leftBar").innerWidth();
}