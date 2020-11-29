/*
 * 乐购商城首页js
 */
 //当页面加载完毕
 $(function (){
/* 首页大图轮播 */
$("#banner").tyslide({
        boxh:420,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:50,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字/是否显示数字
});
/*  图书电子小轮播  */
$("#ebooks-banner").tyslide({
        boxh:223,//盒子的高度
        w:332,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:3,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
});

$('.ebooks .right-box ul > li').mouseenter(function () {
        //所有兄弟：隐藏详情 显示标题
        $(this).siblings().find('.desc').hide();    //隐藏详情
        $(this).siblings().find('.ebooks-title').show();     //显示标题

        //当前：隐藏标题 显示详情
        $(this).find('.ebooks-title').hide();  //隐藏标题
        $(this).find('.desc').show();    //显示详情
})
/*  服装小轮播  */
$("#clothes-banner").tyslide({
        boxh:334,//盒子的高度
        w:432,//盒子的宽度
        h:334,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:3,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
});
/*  户外运动小轮播  */
$("#sport-banner").tyslide({
        boxh:334,//盒子的高度
        w:432,//盒子的宽度
        h:334,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:3,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
});
/*  童装小轮播  */
$("#children—clothes-banner").tyslide({
        boxh:334,//盒子的高度
        w:432,//盒子的宽度
        h:334,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:3,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
});
/*服装tab切换*/
$('.clothe .clothes-nav li').mouseenter(function () {

})
/*户外运动tab切换*/
$('sports .clothes-nav li').mouseenter(function (){

})
/*童装tab切换*/
$('children-clothes .clothes-nav li').mouseenter(function(){

})

/*推广商品切换*/
$('.promotion .title ul li').mouseenter(function () {
    //导航激活类的切换
    $(this).addClass('active').siblings().removeClass('active')

   //内容切换
   //获取对应的索引
   var index = $(this).index();


   console.log(index)
   console.log( $('.promotion .promotion-content .inner-box') )
   //左右移动
   $('.promotion .promotion-content .inner-box').animate({
    'left': -index * 1170
    }, 300)
})

/*返回顶部*/
//绑定滚动事件
$(document).scroll(function (){ 
//获取距离顶部的位置
var topDistance = $('html, body').scrollTop();
//判断
if (topDistance > 500) {
    $('.backToTop').fadeIn();
}else{
    $('.backToTop').fadeOut();
}
})
//返回顶部功能
$('.backToTop').click(function () {
$('html, body').animate({
    scrollTop: 0
}, 300)
})


/*二维码滑出效果*/
$('.qr-code .ticket').hover(function () {
//让二维码滑出来
$('.qr-code div').stop(true).animate({
    left: '-100px'
})
}, function () {
//让二维码收起来
    $('.qr-code div').stop(true).animate({
    left: 0
})
})



/*顶部搜索框交互*/
$(document).scroll(function () {
//获取到顶部的距离
var topDistance = $('html, body').scrollTop();
//判断
if (topDistance > 500) {
    //如果滑动距离大于500  滑下来
    $('.top-search-box').slideDown(300)
} else {
    //否则 收回去
    $('.top-search-box').slideUp(300)
}
})


/*楼梯跳转*/
$('.floor li').click(function () {
//获取索引
var index = $(this).index();
//选中每一个板块到顶部的偏移
var topOffset = $('.floorBox').eq(index).offset().top;

//让滚动条滚到这个位置
$('html, body').animate({
        scrollTop: topOffset -50
})
})



})