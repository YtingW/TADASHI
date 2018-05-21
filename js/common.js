//头部播放
var headtext=$(".header-text-ul")[0];
function headerScroll(){
		if(headtext.offsetTop==-60){
			$(".header-text-ul").eq(0).animate({top:headtext.offsetTop-30},1000,function(){
				$(this).css("top",0);
			})
		}else{
			var h=headtext.offsetTop-30;
			$(".header-text-ul").eq(0).animate({top:h},1000);
		}
	}
$(".header-text-ul").eq(0).ready(function(){
	setInterval(headerScroll,3000);
});
//二级菜单
+function($){
	$.fn.taNav=function(selector){
		new Nav(selector);
	}
	function Nav(selector){
		this.ele=$(selector);
		if(!this.ele) return;
		this.init();
	}
	Nav.prototype={
		constructor:Nav,
		init(){
			this.ele.on("mouseenter",$.proxy(this.showline,this));
			this.ele.on("mouseleave",$.proxy(this.hideline,this));
		},
		showline(event){
			$(event.target).parent().siblings().eq(0)
			.animate({left:18,right:20},300,"linear");
			console.log($(event.target).parent().parent().next("div"));
			$(event.target).parent().parent().next("div")
			.stop()
			.css("display","block")
			.stop()
			.animate({opacity: 1},500);
		},
		hideline(event){	
			$(event.target).parent().parent().next("div")
			.mouseenter(function(){
				$(event.target).parent().siblings().eq(0)
				.stop()
				.animate({left:18,right:20},300,"linear");
				$(this).siblings("div").css("display","none");
				$(this)
				.stop()
				.css("display","block")
				.stop()
				.animate({opacity: 1},500);	
			});
			$(event.target).parent().parent().next("div")
			.mouseleave(function(){
				$(event.target).parent().siblings().eq(0)
				.stop()
				.animate({left:-180,right:200},300,"linear");
				$(this)
				.stop()
				.animate({opacity: 0},500,function(){
					$(this).css("display","none");
				});
				
			});
			$(event.target).parent().siblings().eq(0)
			.stop()
			.animate({left:-180,right:200},300,"linear");
			$(event.target).parent().parent().next("div")
			.stop()
			.animate({opacity: 0},500,function(){
				$(this).css("display","none");
			});
		}
	}
}(jQuery)
$(function(){
	$(".nav-sp")
	.taNav(".mu-li");
});
$(window).scroll(function(){
	this.scroll=$(document).scrollTop();
	this.hea=$("#header");
	this.aside=$("#aside-menu");
	$(this.hea)
	.css("top",this.scroll);
	if(this.scroll>120){
		$(this.aside)
		.stop(false,false)
		.animate({height:200});
	}else{
		$(this.aside)
		.stop(false,false)
		.animate({height:153});
	}
});
