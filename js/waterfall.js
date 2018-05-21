       $(function(){
            function WaterFall(url,main_selector){
                if(!url || !main_selector) return;
                this.url = url;
                this.main_ele = $(main_selector);
                this.init();
            }
            WaterFall.prototype = {
                constructor:WaterFall,
                init(){
                    this.load_data()
                    .then(function(res){
                        this.json = res.list;
                        this.render_page();
                    }.bind(this))
                    .fail(function(def,type,err_msg){
                        this.load_err();
                    }.bind(this))
                    $(document).on("scroll",$.proxy(this.is_load,this))
                },
                load_data(){
                    this.opt = {
                        url:this.url
                    };
                    return $.ajax(this.opt)
                },
                render_page(){
                    this.json.forEach(function(item){
                        this.html +=`<li class="pd-item">
									<div class="pd-li-inner">
										<div class="main-box">
											<div class="pd-pic">
												<a href="#">
													<span class="pd-img"><img src=${item.f_img}></span>
													<span class="pd-img pd-back"><img src=${item.b_img}></span>
												</a>
											</div>
											<span class="pd-name">
												<a href="#">${item.name}</a>
											</span>
											<span class="pd-price">
												${item.price}
											</span>
										</div>
									</div>
								</li>`;
                    }.bind(this))
                    this.main_ele.html(this.main_ele.html() + this.html);
                },
                load_err(){
                    alert("报错了!");
                },
                is_load(){
                    this.scrollTop = $("html,body").scrollTop();
                    this.clientHeight = document.documentElement.clientHeight;
                    this.lastTop = this.main_ele.find("li").eq(this.main_ele.find("li").length - 1).position().top;
                    this.loading = false; 
                    if(this.scrollTop + this.clientHeight >= this.lastTop){
                        this.loading = true;
                    }
                    if(!this.loading || this.loading_msg) return 0 ;
                    this.loading_msg = true;
                    this.load_data()
                    .then(function(res){
                        this.json = res.list;
                        this.render_page();
                        this.loading_msg = false;
                    }.bind(this))                    
                }
            }           
            new WaterFall("/TADASHI/JOSN/product.json",".product");
        })