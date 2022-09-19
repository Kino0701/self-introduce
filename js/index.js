var component = {
    init : function () {
        component.layui();
        component.mySign();
    },

    layui : function () {
        layui.use(['layer', 'form', 'element'], function () {
            var layer = layui.layer
                , form = layui.form
                , element = layui.element
     
        });
    },
    
    mySign : function () {

        //Img
        var signImgTouch = function () {
            $(this).animate({borderRadius : 0}, 1000);
        };
        var signImgLeave = function () {
            $(this).animate({borderRadius : 93}, 1000);
        };
        $("#my-signImg").mouseenter(signImgTouch)
            .mouseleave(signImgLeave);

        //Title
        var signTitleTouch = function () {
            $(this).animate({marginLeft : 50}, 800);
        };
        var signTitleLeave = function () {
            $(this).animate({marginLeft : 0}, 800);
        };
        $("#my-signTitle").mouseenter(signTitleTouch)
            .mouseleave(signTitleLeave);
    }

};
