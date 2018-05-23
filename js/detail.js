function BigImg(selector){
	this.ele=$(selector);
	this.x=0;
	this.y=0;
	if(!this.ele) return;
	this.init();
}
BigImg.prototype={
	constructor:BigImg,
	init(){
		this.ele.on("mouseenter",$.proxy(this.toShow,this));
		this.ele.on("mouseleave",$.proxy(this.toHide,this));
		this.ele.on("mousemove",$.proxy(this.toMove,this));
	},
	toShow(){
		this.ele.css("opacity",1);	
	},
	toHide(){
		this.ele.css("opacity",0);
	},
	toMove(event){
		this.nowX=event.offsetX-this.x;
		this.nowY=event.offsetY-this.y;
		this.offtop=this.ele.position().top;
		this.offleft=this.ele.position().left;
		this.top=this.offtop-this.nowY/1.8;
		this.left=this.offleft-this.nowX/2.6;
		this.ele.css(
			{"top":this.top,
			"left":this.left});
		this.x=event.offsetX;
		this.y=event.offsetY;
	}
}
$(".pro-left-more").find("li").click(function(){
	console.log($(".center-img-span img:first-child"));
	$(".center-img-span img:first-child").attr("src",$(this).find("img").attr("ref"));
	$(".span-img-big").attr("src",$(this).find("img").attr("data"));
});
