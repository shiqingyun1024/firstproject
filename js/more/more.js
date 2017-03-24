/**
 * Created by acer on 2017/3/18.
 */
/*为了实现点击更多按钮的时候能够直接添加在数据下面，而不是在下面另起一行*/
(function(){
    $("#add tr").eq(9).nextAll().hide();
    $("#btn").click(function () {
        $("#add tr").eq(9).nextAll().toggle(1000
        );
        if($("#btn").html() == "收起"){
            $("#btn").html("更多");
        }else{
            $("#btn").html("收起");
        }

    });

})();