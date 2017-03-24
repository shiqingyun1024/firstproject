/**
 * Created by acer on 2017/3/20.
 */
/*$(function(){
    $("#gain").blur(function(){
        $("#search ul").empty();
    });
    $("#gain").on("keypress", function() {
        var key = $("#gain").val();
        $("#search ul").empty();
        $.get("http://10.9.9.116:8080/financial/company/" + key, function(data) {
            $.each(data,function(index){
                $("#search ul").append('<li>'+data[index].name+'</li>')
                $("#search ul li").eq(index).click(function(){
                    $("#gain").val(data[index].name);
                    $("#search ul").empty();
                    if( $("#gain").val() == data[index].name ){
                        $("#result").text(data[index].judgeResult);
                    }
                });
            })
        });

    });
});*/
/*
$(function(){
//取得div层
    var $search = $('#search');
//取得输入框JQuery对象
    var $searchInput = $search.find('#search-text');
//关闭浏览器提供给输入框的自动完成
    $searchInput.attr('autocomplete','off');
//创建自动完成的下拉列表，用于显示服务器返回的数据,插入在搜索按钮的后面，等显示的时候再调整位置
    var $autocomplete = $('<div class="autocomplete"></div>')
        .hide()
        .insertAfter('#submit');
//清空下拉列表的内容并且隐藏下拉列表区
    var clear = function(){
        $autocomplete.empty().hide();
    };
//注册事件，当输入框失去焦点的时候清空下拉列表并隐藏
    $searchInput.blur(function(){
        setTimeout(clear,500);
    });
//下拉列表中高亮的项目的索引，当显示下拉列表项的时候，移动鼠标或者键盘的上下键就会移动高亮的项目，想百度搜索那样
    var selectedItem = null;
//timeout的ID
    var timeoutid = null;
//设置下拉项的高亮背景
    var setSelectedItem = function(item){
//更新索引变量
        selectedItem = item ;
//按上下键是循环显示的，小于0就置成最大的值，大于最大值就置成0
        if(selectedItem < 0){
            selectedItem = $autocomplete.find('li').length - 1;
        }
        else if(selectedItem > $autocomplete.find('li').length-1 ) {
            selectedItem = 0;
        }
//首先移除其他列表项的高亮背景，然后再高亮当前索引的背景
        $autocomplete.find('li').removeClass('highlight')
            .eq(selectedItem).addClass('highlight');
    };
    var ajax_request = function(){
        var key = $("#search-text").val();
//ajax服务端通信
        $.get("http://10.9.9.116:8080/financial/company/" + key,function(data){

//遍历data，添加到自动完成区
            $.each(data, function(index,term) {
//创建li标签,添加到下拉列表中
                $("<li></li>").text(term.name).appendTo($autocomplete)
                    .addClass('clickable')
                    .hover(function(){
//下拉列表每一项的事件，鼠标移进去的操作
                        $(this).siblings().removeClass('highlight');
                        $(this).addClass('highlight');
                        selectedItem = index;
                    },function(){
//下拉列表每一项的事件，鼠标离开的操作
                        $(this).removeClass('highlight');
//当鼠标离开时索引置-1，当作标记
                        selectedItem = -1;
                    })
                    .click(function(){
//鼠标单击下拉列表的这一项的话，就将这一项的值添加到输入框中
                        $searchInput.val(term.name);
//清空并隐藏下拉列表
                        $autocomplete.empty();
                        if( $searchInput.val() == term.name ){
                            $("#result").text(term.judgeResult);
                        }
                        $("#submit").click(function(){
                            window.open(term.id);
                        });
                    })
                    .keypress(function(event){
                        if(event.keyCode == 13){
                            $searchInput.val(term.name);
//清空并隐藏下拉列表
                            $autocomplete.empty();
                            //console.log(2222);
                            if( $searchInput.val() == term.name ){
                                $("#result").text(term.judgeResult);
                            }
                        }
                    });

            });//事件注册完毕
//设置下拉列表的位置，然后显示下拉列表
            var ypos = $searchInput.position().top;
            var xpos = $searchInput.position().left;
            $autocomplete.css('width',$searchInput.css('width'));
            $autocomplete.css({'position':'relative','left':xpos + "px",'top':ypos +"px"});
            setSelectedItem(0);
//显示下拉列表
            $autocomplete.show();
        })
    };

//对输入框进行事件注册
    $searchInput
        .keyup(function(event) {
//字母数字，退格，空格
            if(event.keyCode > 40 || event.keyCode == 8 || event.keyCode ==32) {
//首先删除下拉列表中的信息
                $autocomplete.empty().hide();
                clearTimeout(timeoutid);
                timeoutid = setTimeout(ajax_request,100);
            }
            else if(event.keyCode == 38){
//上
//selectedItem = -1 代表鼠标离开
                if(selectedItem == -1){
                    setSelectedItem($autocomplete.find('li').length-1);
                }
                else {
//索引减1
                    setSelectedItem(selectedItem - 1);
                }
                event.preventDefault();
            }
            else if(event.keyCode == 40) {
//下
//selectedItem = -1 代表鼠标离开
                if(selectedItem == -1){
                    setSelectedItem(0);
                }
                else {
//索引加1
                    setSelectedItem(selectedItem + 1);
                }
                event.preventDefault();
            }
        })
        .keypress(function(event){
//enter键
            if(event.keyCode == 13) {
//列表为空或者鼠标离开导致当前没有索引值
                if($autocomplete.find('li').length == 0 || selectedItem == -1) {
                    return;
                }
                $searchInput.val($autocomplete.find('li').eq(selectedItem).text());
                $autocomplete.empty().hide();
                event.preventDefault();
            }
        })
        .keydown(function(event){
//esc键
            if(event.keyCode == 27 ) {
                $autocomplete.empty().hide();
                event.preventDefault();
            }
        });
//注册窗口大小改变的事件，重新调整下拉列表的位置
    $(window).resize(function() {
        var ypos = $searchInput.position().top;
        var xpos = $searchInput.position().left;
        $autocomplete.css('width',$searchInput.css('width'));
        $autocomplete.css({'position':'relative','left':xpos + "px",'top':ypos +"px"});
    });
});*/

/*var data = [
    "你好，我是Michael",
    "你是谁",
    "你最好啦",
    "你最珍贵",
    "你是我最好的朋友",
    "你画我猜",
    "你是笨蛋",
    "你懂得",
    "你为我着迷",
    "你是我的眼"
];*/
var data = [
    "你好，我是Michael",
    "你是谁",
    "你最好啦",
    "你最珍贵",
    "你是我最好的朋友",
    "你画我猜",
    "你是笨蛋",
    "你懂得",
    "你为我着迷",
    "你是我的眼"
];
$(document).ready(function(){
    $(document).keydown(function(e){
        e = e || window.event;
        var keycode = e.which ? e.which : e.keyCode;
        if(keycode == 38){
            if(jQuery.trim($("#append").html())==""){
                return;
            }
            movePrev();
        }else if(keycode == 40){
            if(jQuery.trim($("#append").html())==""){
                return;
            }
            $("#kw").blur();
            if($(".item").hasClass("addbg")){
                moveNext();
            }else{
                $(".item").removeClass('addbg').eq(0).addClass('addbg');
            }

        }else if(keycode == 13){
            dojob();
        }
    });

    var movePrev = function(){
        $("#kw").blur();
        var index = $(".addbg").prevAll().length;
        if(index == 0){
            //  如果到了第一个，按上箭头转到最后一个
            $(".item").removeClass('addbg').eq($(".item").length-1).addClass('addbg');
        }else{
            $(".item").removeClass('addbg').eq(index-1).addClass('addbg');
        }
    }

    var moveNext = function(){
        var index = $(".addbg").prevAll().length;
        if(index == $(".item").length-1){
            //  如果到了最后一个，按下箭头转到第一个
            $(".item").removeClass('addbg').eq(0).addClass('addbg');
        }else{
            $(".item").removeClass('addbg').eq(index+1).addClass('addbg');
        }

    }

    var dojob = function(){
        $("#kw").blur();
        var value = $(".addbg").text();
        $("#kw").val(value);
        $("#append").hide().html("");
    }
});

function getContent(obj){
    var kw = jQuery.trim($(obj).val());
    if(kw == ""){
        $("#append").hide().html("");
        return false;
    }
    var html = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i].indexOf(kw) >= 0) {
            html = html + "<div class='item' onmouseenter='getFocus(this)' onClick='getCon(this);'>" + data[i] + "</div>"
        }
    }
    if(html != ""){
        $("#append").addClass('addscroll').show().html(html);
    }else{
        $("#append").hide().html("");
    }
};
function getFocus(obj){
    $(".item").removeClass("addbg");
    $(obj).addClass("addbg");
};
function getCon(obj){
    var value = $(obj).text();
    $("#kw").val(value);
    $("#append").hide().html("");
};





