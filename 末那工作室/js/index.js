/**
 * Created by Administrator on 2017/2/10 0010.
 */
$(function(){
    //导航部分
    //(function (){
    //    var arrBtn=$(".nav a");
    //    arrBtn.click(function () {
    //        $(this).addClass("now").siblings().removeClass("now")
    //    })
    //})();

 //无缝全屏轮播
(function (){
    var oWrap=$(".ban_wrap");
    var  oBan=$(".banner");
    var arrBan=$(".arr_ban");
    oBan.append(arrBan.first().clone());
    oBan.prepend(arrBan.last().clone());
    var arrBan=$(".arr_ban");
    var page=1;
    var timer=0;
    var oWidth=oWrap.width();
    oBan.width(oWidth*arrBan.size()+"px");
    arrBan.width(oWidth+"px");
    oBan.css("left",-oWidth+"px");
    start();
    $("#next").click(function () {
        //stop();
        page++;
        if(page<arrBan.size()-1){
            oBan.stop(true,true).animate({"left":page*-oWidth+"px"})
        }else{
            page=1;
            oBan.stop(true,true).animate({"left":(arrBan.size()-1)*-oWidth+"px"},//回到最后一张
                function () {
                    oBan.css("left",-oWidth+"px");//回到第一张图片上
                })
        }
        start();
    });
    $("#prev").click(function () {
        stop();
        page--;
        if(page>=1){
            oBan.stop(true,true).animate({"left":page*-oWidth+"px"})
        }else{
            page=2;//一共几张图轮播
            oBan.stop(true,true).animate({"left":"0px"},//回到第一张
                function () {
                    oBan.css("left",2*-oWidth+"px");//回到最后一张
                })
        }
        start();
    });
    function start(){
        if(timer==0){
            timer=setInterval(function () {
                page++;
                if(page<arrBan.size()-1){
                    oBan.stop(true,true).animate({"left":page*-oWidth+"px"});
                }else{
                    page=1;
                    oBan.stop(true,true).animate({"left":(arrBan.size()-1)*-oWidth+"px"},
                        function () {
                            oBan.css("left",-oWidth+"px");
                        })
                }
            },2000)
        }
    }
    function stop(){
        clearInterval(timer);
        timer=0;
    }
    oBan.mouseover(stop);
    oBan.mouseout(start);
})();

//选项卡轮播
    (function(){
        var oBan=$(".ser_ban");
        var page=0;
        $(".ser_next").click(function () {
            page++;
            if(page==0){
                oBan.stop(true,true).animate({"left":0+"px"})
            }
            oBan.stop(true,true).animate({"left":-320+"px"})
        });

        $(".ser_prev").click(function () {
            page--;
            if(page==3){
                oBan.stop(true,true).animate({"left":-320+"px"})
            }
            oBan.stop(true,true).animate({"left":"0px"})
        });
    })();

//底部轮播
    (function (){
        var oWrap=$(".footer_wrap");
        var  oBan=$(".footer_ban");
        var arrBan=$(".footer_arr");
        oBan.append(arrBan.first().clone());
        oBan.prepend(arrBan.last().clone());
        var arrBan=$(".arr_ban");
        var page=1;
        var oWidth=oWrap.width();
        oBan.width(oWidth*arrBan.size()+"px");
        arrBan.width(oWidth+"px");
        oBan.css({"left":-oWidth+"px"});
        $(".footer_next").click(function () {
            page++;
            if(page<arrBan.size()-1){
                oBan.stop(true,true).animate({"left":page*-oWidth+"px"})
            }else{
                page=1;
                oBan.stop(true,true).animate({"left":(arrBan.size()-1)*-oWidth+"px"},//回到最后一张
                    function () {
                        oBan.css("left",-oWidth+"px");//回到第一张图片上
                    })
            }
        });
        $(".footer_prev").click(function () {
            page--;
            if(page>=1){
                oBan.stop(true,true).animate({"left":page*-oWidth+"px"})
            }else{
                page=2;//一共几张图轮播
                oBan.stop(true,true).animate({"left":"0px"},//回到第一张
                    function () {
                        oBan.css("left",2*-oWidth+"px");//回到最后一张
                    })
            }
        });
    })();




//返回顶部
    (function (){
        var oBack_top=$(".scroll_top");
        var oScrollTop_box=$(".fixed_box");
        function Height(){
            var scrollTop=$('body').scrollTop();
            if(scrollTop<=300){
                oScrollTop_box.fadeOut();
            }else{
                oScrollTop_box.fadeIn();
            }
        }
        Height();
        oBack_top.click(function () {
            $('body,html').animate({ scrollTop:0},600);
            return false;
        });
        window.onscroll = function(){
            Height();
        }
    })();

});

