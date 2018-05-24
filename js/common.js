//头部播放
var headtext=$(".header-text-ul")[0];
function headerScroll(){
		if(headtext.offsetTop<=-60){
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
	this.aside=$("#aside-menu");
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
//mini购物车

            function MiniCar(url,main_selector){
                if(!url || !main_selector) return;
                this.url = url;
                this.main_ele = $(main_selector);
                this.init();
            }
            MiniCar.prototype = {
                constructor:MiniCar,
                init(){
                    this.load_data()
                    .then(function(res){
                        this.json = res.list;
                        this.render_page();
                        this.del_pro();
                    }.bind(this))
                    .fail(function(def,type,err_msg){
                        this.load_err();
                    }.bind(this))
                },
                load_data(){
                    this.opt = {
                        url:this.url
                    };
                    return $.ajax(this.opt)
                },
                render_page(){
    				if(!$.cookie("car_list")) return;
                	this.pro_id=JSON.parse($.cookie("car_list"));
                	this.html="";
                	this.pro_id.forEach(function(val,index){
                		this.json.forEach(function(item){
                			if(val.id==item.id){
                    				 this.html+=`<li>
										<div class="pull-car-left">
											<a href="#">
												<img src=${item.small_pic_car} class="car-img"/>
											</a>
										</div>
										<div class="car-pro">
											<a href="#" class="remove-pro" data-id=${item.id}></a>
											<p class="car-name">
												<a href="#">${item.name}</a>
											</p>
											<span class="car-price">${item.price}</span>
										</div>
									</li>`;
                    		}
                		}.bind(this));
                	}.bind(this));
                    this.main_ele.html(this.html);
                },
                del_pro(){
                	if(!$.cookie("car_list")) return;
                	var pro=JSON.parse($.cookie("car_list"));
                	$(".remove-pro").click(function(){
                		pro.forEach(function(item,index){
                			if(item.id==$(this).attr("data-id")){
                				pro.splice(index,1);
                			}
                		}.bind(this));	
                		$.cookie("car_list",JSON.stringify(pro));
                		location.reload();
                	});
                },
                load_err(){
                    alert("报错了!");
                }
            }           
$(".myCar").hover(function(){
	$(".down-car")
	.show();
	new MiniCar("/TADASHIS/JOSN/product.json","#car-ol");
},function(){
	console.log(2);
	$(".down-car")
	.hide();
});
if($.cookie("user")){
$("#user-login").html($.cookie("user"));
}