$(function(){
    //每个固定的时间移动图片
    var timer = setInterval(picLoop,1000);
    var ind = 0;
    function picLoop(){
        ind++;
        if (ind==8) {ind=0;}
        $(".content1").animate({"left":-1170*ind},600);
        $(".first").eq(ind).css("background-color","#e6e6e6")
               .siblings().css("background-color","rgba(100,100,100,0.3)");
    }

    //定时器的控制
    $(".pic").hover(function(){
        clearInterval(timer);
        $(".left").show();
        $(".right").show();
    },function(){
        timer = setInterval(picLoop,1000);
        $(".left").hide();
        $(".right").hide();
    })

    $(".first").mouseover(function(){
        $(this).css("background-color","#e6e6e6")
               .siblings().css("background-color","rgba(100,100,100,0.3)");
        ind = $(this).ind();
        $(".content1").animate({"left":-1170*ind},600);

    })

    $(".left").click(function(){
        ind--;
        if (ind==-1) {ind=7;}
        $(".content1").animate({"left":-1170*ind},600);
        $(".first").eq(ind).css("background-color","#e6e6e6")
               .siblings().css("background-color","rgba(100,100,100,0.3)");
    })
    $(".right").click(function(){
        ind++;
        if (ind==8) {ind=0}
        $(".content1").animate({"left":-1170*ind},600);
        $(".first").eq(ind).css("background-color","#e6e6e6")
               .siblings().css("background-color","rgba(100,100,100,0.3)");    
    })
})