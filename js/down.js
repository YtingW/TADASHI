//+function($){
//	$.fn.taDown=function(selector){
//		new DownPage(selector);
//	}
//	function DownPage(selector){
//		this.ele=$(selector);
//		if(!this.ele) return;
//		this.init();
//	}
//	DownPage.prototype={
//		constructor:DownPage,
//		init(){
//			this.ele.on("click",$.proxy(this.taToggle,this));
//		},
//		taToggle(event){
//			$(event.target).find(".down")
//			.toggle();
//			$(event.target).find(".up")
//			.toggle();
//			$(event.target).siblings(".colg-kind-ul")
//			.slideToggle("normal");
//		}
//	}
//}(jQuery)
function DownPage(selector,down,up,down_list){
	$(selector).click(function(){
	$(this).find(down)
	.stop()
	.toggle();
	$(this).find(up)
	.stop()
	.toggle();
	$(this).siblings(down_list)
	.stop()
	.slideToggle("normal");
	})
}