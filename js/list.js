$(window).scroll(function(){
	this.scroll=$(document).scrollTop();
	this.nav=$("#colg-nav");
	if(this.scroll>170){
		$(this.nav)
		.css( {
			"position": "fixed",
  	  		"top": "170px",
    		"overflow-x": "hidden",
    		"overflow-y": "auto",
    		"width": "200px",
    		"height": "233px"});
	}else{
		$(this.nav)
		.css( {
			"position": "static",
  	  		"top": "",
    		"overflow-x": "visible",
    		"overflow-y": "visible",
    		"width": "100%",
    		"max-width": "260px",
    		"height": "auto"});
	}
});
+function($){
	$.fn.taDown=function(selector){
		new DownPage(selector);
	}
	function DownPage(selector){
		this.ele=$(selector);
		if(!this.ele) return;
		this.init();
	}
	DownPage.prototype={
		constructor:DownPage,
		init(){
			this.ele.on("click",$.proxy(this.taToggle,this));
		},
		taToggle(event){
			$(event.target).find(".down")
			.toggle();
			$(event.target).find(".up")
			.toggle();
			$(event.target).siblings(".colg-kind-ul")
			.slideToggle("normal");
		}
	}
}(jQuery)
$(function(){
	$("#colg-nav")
	.taDown(".colg-nav-list>li");
})