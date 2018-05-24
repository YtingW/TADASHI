$(function(){
            function DetailHtml(url,main_selector){
                if(!url || !main_selector) return;
                this.url = url;
                this.main_ele = $(main_selector);
                this.init();
            }
            DetailHtml.prototype = {
                constructor:DetailHtml,
                init(){
                    this.load_data()
                    .then(function(res){
                        this.json = res.list;
                        this.render_page();
                        DownPage(".list-content",".down",".up",".list-down");
						new BigImg(".span-img-big");
						this.click_control();
						this.car_cookie();
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
                	var pro_id=$.cookie("pro_id");
                    this.json.forEach(function(item){
                    	if(item.id==pro_id){
                    		 this.html=`<div class="left-pro">
					<div class="pro-left-list">
						<div class="list-div">
							<div class="list-content">
								<h4 class="list-title">
									<a href="#" class="narmal-a">
										商品描述<span class="down"></span><span class="up"></span>
									</a>
								</h4>
							</div>
							<div class="list-down">
								<div class="list-down-content">
									灵感来自随心之境，唯美绣花蕾丝搭配吊带流苏细节营造春日浪漫之感，是度假的不二之选。
								</div>
							</div>
						</div>
						<div class="list-div">
							<div class="list-content">
								<h4 class="list-title">
									<a href="#" class="narmal-a">
										商品保养<span class="down"></span><span class="up"></span>
									</a>
								</h4>
							</div>
							<div class="list-down">
								<div class="list-down-content">
									<ul class="pro-icon">
										<li><img src="http://img.tadashishoji.cn/skin/frontend/tadashishoji/responsive_v1/img/116.jpg"></li>
										<li><img src="http://img.tadashishoji.cn/skin/frontend/tadashishoji/responsive_v1/img/119.jpg"></li>
										<li><img src="http://img.tadashishoji.cn/skin/frontend/tadashishoji/responsive_v1/img/120.jpg"></li>
										<li><img src="http://img.tadashishoji.cn/skin/frontend/tadashishoji/responsive_v1/img/133.jpg"></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="list-div">
							<div class="list-content">
								<h4 class="list-title">
									<a href="#" class="narmal-a">
										面料构成<span class="down"></span><span class="up"></span>
									</a>
								</h4>
							</div>
							<div class="list-down">
								<div class="list-down-content">
									面布:<br />
									100%涤纶<br />
									里布:<br />
									100%涤纶<br />
								</div>
							</div>
						</div>
						<div class="list-div list-four">
							<div class="list-content">
								<h4 class="list-title">
									<a href="#" class="narmal-a">
										全码尺寸表（单位：厘米）<span class="down"></span><span class="up"></span>
									</a>
								</h4>
							</div>
							<div class="list-down">
								<div class="list-down-content">
									<table>
                                        <thead>
						                    <tr>
						                        <th>Sizes</th>
						                        <th><strong>00</strong></th>
						                        <th>0</th>
						                        <th>2</th>
						                        <th>4</th>
						                        <th>6</th>
						                        <th>8</th>
						                        <th>10</th>
						                    </tr>
						            </thead>
                                    <tbody>
                                        <tr>
					                        <td class="tbody-td">胸围</td>
					                        <td>83</td>
					                        <td>85</td>
					                        <td>88</td>
					                        <td>90</td>
					                        <td>93</td>
					                        <td>95</td>
					                        <td>98</td>
					                    </tr>
                                        <tr>
						                    <td class="tbody-td">腰围</td>
						                    <td>85</td>
						                    <td>88</td>
						                    <td>90</td>
						                    <td>93</td>
						                    <td>95</td>
						                    <td>98</td>
						                    <td>100</td>
						                </tr>
                                        <tr>
					                        <td class="tbody-td">臀围</td>
					                        <td>94</td>
					                        <td>97</td>
					                        <td>99</td>
					                        <td>102</td>
					                        <td>104</td>
					                        <td>107</td>
					                        <td>109</td>
					                    </tr>
                                        <tr>
					                        <td class="tbody-td">衣长</td>
					                        <td>70</td>
					                        <td>70</td>
					                        <td>70</td>
					                        <td>70</td>
					                        <td>70</td>
					                        <td>70</td>
					                        <td>77</td>
					                    </tr>
                                    </tbody>
                				</table>
                                <p>数据仅供参考，如遇尺码问题请联系客服热线：4001-666-299</p>
								</div>
							</div>
						</div>
						<div class="freefix">
							我们提供免费修改衣长服务 
							<a href="#" class="freefix-a">了解详情</a>
						</div>
					</div>
					<div class="pro-left-more">
						<p>更多细节</p>
						<ul>
							<li>
								<img src=${item.small_1}
									ref=${item.center_img_1}
									data=${item.big_img_1} />
							</li>
							<li>
								<img src=${item.small_2}
									ref=${item.center_img_2}
									data=${item.big_img_2} />
							</li>
						</ul>
					</div>
				</div>
				<div class="center-pro">
					<div class="center-img">
						<span class="center-img-span">
							<img src=${item.center_img_1} />
							<img src=${item.big_img_1} class="span-img-big"/>
						</span>
					</div>
				</div>
				<div class="right-pro">
					<div class="pro-name">${item.name}</div>
					<div class="pro-num">${item.id}</div>
					<form class="form-ac" action="shopCar.html" method="get">
						<div class="form-price">
							<span>${item.price}</span>
						</div>
						<div class="form-date">
							 下单后10-15个工作日发货 
						</div>
						<div class="form-msg">
							<p>购买该产品，您可以获得 <span>7998</span>积分</p>
						</div>
						<div class="form-color">
							<label>颜色:</label>
							<ul>
								<li><img src=${item.pic_pro}></li>
							</ul>
						</div>
						<div class="form-option">
							<div class="option-pro">
								<div class="pro-add">
									<a href="#">添加到收藏 +</a>
								</div>
								<div class="pro-option">
									<div class="pro-size">
										<select>
											<option>尺寸</option>
											<option>00</option>
											<option>0</option>
											<option>2</option>
											<option>4</option>
											<option>6</option>
											<option>8</option>
											<option>10</option>
										</select>
									</div>
								</div>
								<div class="pro-addcar">
									<div class="add-num pro-option">
										<div class="pro-size">
											<select id="num-value">
												<option value="1">1件</option>
												<option value="2">2件</option>
												<option value="3">3件</option>
												<option value="4">4件</option>
												<option value="5">5件</option>
											</select>
										</div>
									</div>
									<div class="add-car">
										<button type="submit" class="add-car-btn" data-id=${item.id}>添加到购物车</button>
									</div>
								</div>
							</div>
						</div>
					</form>
					<div class="pro-share">
						<div>
							<a href="#" class="wx-icon"></a>
							<a href="#" class="sina-icon"></a>
							<a href="#" class="qq-icon"></a>
							<a href="#" class="tx-icon"></a>
						</div>
					</div>
				</div>`;
                    	}
                       
                    }.bind(this))
                    this.main_ele.html(this.main_ele.html() + this.html);
                },
                click_control(){
                	$(".pro-left-more").find("li").click(function(){
							$(".center-img-span img:first-child").attr("src",$(this).find("img").attr("ref"));
							$(".span-img-big").attr("src",$(this).find("img").attr("data"));
						});
                },
                car_cookie(){
                	$(".add-car-btn").click(function(){
                		var car_cookie=$.cookie("car_list");
                		var id=$(this).attr("data-id");
                		var num_val=Number($("#num-value").val());
                		var obj=[{"id":id,"num":num_val}];	
                		if(!car_cookie){
                			var obj=[{"id":id,"num":num_val}];	
                			$.cookie("car_list",JSON.stringify(obj));
                		}else{
                			var isNum=false;
                			var obj={"id":id,"num":num_val};	
                			car_cookie=JSON.parse(car_cookie);
                			console.log(car_cookie);
                			car_cookie.forEach(function(item){
                				if(item.id==id){
                					item.num=item.num+num_val;
                					isNum=true;	
                				}
                			});
                			if(!isNum){
                				car_cookie.push(obj);
                			}
                			$.cookie("car_list",JSON.stringify(car_cookie));
                		}
                	})
                },
                load_err(){
                    alert("报错了!");
                }
            }           
            new DetailHtml("/TADASHIS/JOSN/product.json",".pro-detail");
        })
