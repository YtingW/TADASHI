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
 
