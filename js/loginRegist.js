$(function(){
		var flag1=false;
		var flag2=false;
		var flag3=false;
		var flag4=false;
		var count=0;
        $("#login").on("click",function(){
            var username = $("#ipt-email").val();
            var pwd = $("#ipt-password").val();
            if(username==""){
         		$("#ipt-email").addClass("default-input");
         		$("#ipt-email").val("");
         		$("#ipt-email").attr("placeholder","用户名不能为空");
         		return;
         	}
           	var pwdRep=/^[\w]{6,}$/;
           	if(!pwdRep.test(pwd)){
           		$("#ipt-password").addClass("default-input");
           		$("#ipt-password").val("");
         		$("#ipt-password").attr("placeholder","请输入六个或更多字符。开头或结尾处的空格会被忽略");
           		return;
           	}
            var opt = {
                url:"http://localhost/TADASHIS/php/login.php",
                type:"POST",
                data:{username:username,password:pwd}
            }
            $.ajax(opt)
            .then(function(res){
            	if(res==0){
            		$.cookie("user",$("#ipt-email").val());
            		window.location.href="index.html";	
            		alert("登录成功");
            	}else if(res==1){
            		alert("密码错误");
            	}else if(res==2){
            		alert("用户名不存在");
            	}
            })
        })
         $("#register").on("click",function(){
            var username = $("#ipt-mynum").val();
            var pwd = $("#ipt-mypass").val();
            if(!(flag1&&flag2&&flag3&&flag4)){
            	return;
            }
            var opt = {
                url:"http://localhost/TADASHIS/php/regist.php",
                type:"POST",
                data:{username:username,password:pwd}
            }
            $.ajax(opt)
            .then(function(res){
                	if(res==0){
            		alert("用户名已存在");
            	}else if(res==1){
            		window.location.href="loginRegist.html";
            		alert("注册成功");
            	}
            })
        })
         $("#ipt-mynum").on("change",function(){
         	$("#ipt-mynum").removeClass("default-input");
         	flag1=false;
         	var numRep=/^\d{11}$/;
         	if(!numRep.test($("#ipt-mynum").val())){
         		$("#ipt-mynum").addClass("default-input");
           		$("#ipt-mynum").val("");
         		$("#ipt-mynum").attr("placeholder","请检查手机号格式");
         		return;
         	}
         	flag1=true;
         })
         $("#ipt-ee").on("change",function(){
         	$("#ipt-ee").removeClass("default-input");
         	flag2=false;
         	var eeRep=/^\w+([-+.]\w+)*@\w+([-.]\w+)*.\w+([-.]\w+)*$/;
         	if(!eeRep.test($("#ipt-ee").val())){
         		$("#ipt-ee").addClass("default-input");
           		$("#ipt-ee").val("");
         		$("#ipt-ee").attr("placeholder","请检查邮箱格式");
         		return;
         	}
         	flag2=true;
         })
          $("#ipt-mypass").on("change",function(){
          	$("#ipt-mypass").removeClass("default-input");
          	flag3=false;
         	var eeRep=/^[\w-]{6,16}$/;
         	if(!eeRep.test($("#ipt-mypass").val())){
         		$("#ipt-mypass").addClass("default-input");
           		$("#ipt-mypass").val("");
         		$("#ipt-mypass").attr("placeholder","请检查密码格式");
         		return;
         	}
         	flag3=true;
         })
           $("#ipt-repass").on("change",function(){
           	$("#ipt-repass").removeClass("default-input");
           	flag4=false;
         	if(!($("#ipt-mypass").val()== $("#ipt-repass").val())){
         		$("#ipt-repass").addClass("default-input");
           		$("#ipt-repass").val("");
         		$("#ipt-repass").attr("placeholder","两次输入密码不一致");
         		return;
         	}
         	flag4=true;
         })
    })