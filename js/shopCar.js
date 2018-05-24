$(function(){
            function ShopCar(url,main_selector){
                if(!url || !main_selector) return;
                this.url = url;
                this.main_ele = $(main_selector);
                this.init();
            }
            ShopCar.prototype = {
                constructor:ShopCar,
                init(){
                    this.load_data()
                    .then(function(res){
                        this.json = res.list;
                        this.render_page();
                        this.changeNum();
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
                	this.pro_id=JSON.parse($.cookie("car_list"));
                	this.price="";
                	var sum=0;
                	this.pro_id.forEach(function(val,index){
                		this.json.forEach(function(item){
                			if(val.id==item.id){
                				this.price+=item.price;
                				this.price=this.price.replace(",","");
                				this.parr=this.price.split("￥");
                				this.parr.forEach(function(item){
                					sum+=Number(item)*val.num;
                				})
                    			if(index==0){
                    				 this.html+=`<tr class="first-body-tr">
										<td class="item-img">
											<a href="#">
												<img src=${item.pic_car} />
											</a>
										</td>
										<td class="item-info">
											<div class="item-info-name">
												<a href="#">${item.name}</a>
											</div>
											<dl class="item-info-dl">
												<dt>Size</dt>
												<dd>4</dd>
											</dl>
											<div class="item-info-text">下单后10-15个工作日发货</div>
										</td>
										<td>
											<span>普通商品</span>
										</td>
										<td class="tx-cn item-price">
											<span>${item.price}</span>
										</td>
										<td class="tx-cn item-num">
											<span class="item-span item-minus" data-id="${item.id}">
												<span class="item-minus-icon item-icon"></span>
											</span>
											<input type="text" class="item-input" value=${val.num}>
											<span class="item-span item-plus" data-id=${item.id}>
												<span class="item-plus-icon item-icon"></span>
											</span>
										</td>
										<td class="tx-cn">
											<span class="item-span-price">${item.price}</span>
										</td>
										<td class="item-del" data-id=${item.id}>
											<a href="#">删除项目</a>
										</td>
									</tr>`;
                    			}else{
                    				this.html+=`<tr class="body-tr">
										<td class="item-img">
											<a href="#">
												<img src=${item.pic_car} />
											</a>
										</td>
										<td class="item-info">
											<div class="item-info-name">
												<a href="#">${item.name}</a>
											</div>
											<dl class="item-info-dl">
												<dt>Size</dt>
												<dd>4</dd>
											</dl>
											<div class="item-info-text">下单后10-15个工作日发货</div>
										</td>
										<td>
											<span>普通商品</span>
										</td>
										<td class="tx-cn item-price">
											<span>${item.price}</span>
										</td>
										<td class="tx-cn item-num">
											<span class="item-span item-minus" data-id="${item.id}">
												<span class="item-minus-icon item-icon"></span>
											</span>
											<input type="text" class="item-input" value=${val.num}>
											<span class="item-span item-plus" data-id=${item.id}>
												<span class="item-plus-icon item-icon"></span>
											</span>
										</td>
										<td class="tx-cn">
											<span class="item-span-price">${item.price}</span>
										</td>
										<td class="item-del" data-id=${item.id}>
											<a href="#">删除项目</a>
										</td>
									</tr>`;
									}
                    			}
                		}.bind(this));
                	}.bind(this));
                	this.html+=`
									<tr class="odd body-tr">
										<td colspan="7">
											<div>
												<div class="pull-left">
													<p>中国大陆地区顾客提供全店免运费配送服务</p>
													<a href="index.html">继续购物</a>
												</div>
												<div class="pull-right">
													<strong>总计</strong>
													<strong>
														<span>￥ ${sum}.00</span>
													</strong>
												</div>
											</div>
										</td>
									</tr>
								`;
                    this.main_ele.html(this.html+this.main_ele.html());
                },
                changeNum(){
                	var pro=JSON.parse($.cookie("car_list"));
                	var num=$(this).siblings(".item-input").eq(0).val();
                	$(".item-plus").click(function(){
                		pro.forEach(function(item){
                			if(item.id==$(this).attr("data-id")){
                				item.num++;
                			}
                		}.bind(this));
                		$.cookie("car_list",JSON.stringify(pro));
                		location.reload();
                	});
                	$(".item-minus").click(function(){
                		pro.forEach(function(item,index){
                			if(item.id==$(this).attr("data-id")){
                				item.num--;
                				if(item.num==0){
			                		pro.splice(index,1);
			                	}
                			}
                		}.bind(this));
                		$.cookie("car_list",JSON.stringify(pro));
                		location.reload();
                	});
                },
                del_pro(){
                	var pro=JSON.parse($.cookie("car_list"));
                	$(".item-del").click(function(){
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
            new ShopCar("/TADASHIS/JOSN/product.json","#main-table-tbody");
        })