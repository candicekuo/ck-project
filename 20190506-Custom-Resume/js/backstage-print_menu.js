if (window.history.scrollRestoration && (window.history.scrollRestoration=="auto"))
    window.history.scrollRestoration="manual";
var ary = [];
$(document).ready(function(){
    getPos();
    /*列印*/
    $(".btnPrint").click(function(){
        var tick;
        $(".cut").attr("class","pageBreak");
        window.print();
        tick = setTimeout(function(){
            $(".pageBreak").attr("class","cut col-xs-12");
        },100);
    });
    /*page break 刪除分頁*/
    $("#stb").on("click",".del",function(){
        var t = $(this);
        var a = t.closest("li").index();
        t.closest(".stMove").fadeOut(200,function(){
            this.remove();
        });
        $(".stMove3 > li").eq(a).fadeOut(200,function(){
            this.remove();
        });
    });
    /*page break 增加分頁按鈕*/
    $(".addBtn").click(function(){
        var a = $("html,body").height();
        $("#copyPgbk").clone().appendTo('#stb').removeAttr("style").removeAttr("id");
        $(".stMove3").append('<li class="cut col-xs-12"></li>');
        $("html,body").animate({scrollTop:a},400);
    });
    /*QR code 顯示設定*/
    $(".qrbox").on("click","li",function(){
        var t = $(this);
        var a = t.index();
        var h = $(".evPrent").offset().top;
        $("html,body").animate({scrollTop:h},400);
        if( t.data("qr") == "on"){
            t.data("qr","off").children("i").text("check_box_outline_blank");
            $(".evPrent div").eq(a).fadeOut(400);
        }else{
            t.data("qr","on").children("i").text("check_box");
            $(".evPrent div").eq(a).fadeIn(400);
        }
        var b = $(".qrbox li").eq(0).data("qr");
        var c = $(".qrbox li").eq(1).data("qr");
        if(b == "off" && c == "off"){
            $(".evPrent").hide(400);
        }else{
            $(".evPrent").show(400,function(){
                h = $(".evPrent").offset().top;
                $("html,body").animate({scrollTop:h},400);
            });
        }
    });
    /*menu 加入分頁拖曳*/
    $("#stb").sortable({
        axis:"y", 
        cursor: 'move',
        handle: ".stm",
        start: function(e, ui) {
            str = ui.item.index();
        },
        update: function(e, ui) {
            end = ui.item.index();
            rightMove(str,end,".stMove3 > li");
            getPos();
            $("html,body").animate({scrollTop:ary[end]},400);
        }
    }).disableSelection();
});
/*menu 履歷版塊管理 拖曳換位子 排序狀態取高*/
function rightMove(s,e,c){ 
    var li = $(c).css("position", "relative");
    if(e > s){ //往下
        if(e == li.length-1){
            li.eq(e).after(li.eq(s));
        }
        li.eq(s).insertBefore(li.eq(e+1));
    }
    else{ //往上
        if(e == 0){
            li.eq(s).insertBefore(li.eq(0));
        }
        li.eq(s).insertBefore(li.eq(e));
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