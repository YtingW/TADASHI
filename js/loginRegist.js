$(function(){
        $("#login").on("click",function(){
            var username = $("#ipt-email").val();
            var pwd = $("#ipt-password").val();
            if(username==""){
         		$("#ipt-email").addClass("default-input");
         		$("#ipt-email").val("");
         		$("#ipt-email").attr("placeholder","用户名不能为空");
         		return;
         	}
           	var pwdRep=/^\d{6,}$/;
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
         	var numRep=/^\d{11}$/;
         	if(!numRep.test($("#ipt-mynum").val())){
         		$("#ipt-mynum").addClass("default-input");
           		$("#ipt-mynum").val("");
         		$("#ipt-mynum").attr("placeholder","请检查手机号格式");
         	}
         })
         $("#ipt-ee").on("change",function(){
         	var eeRep=/^\w+([-+.]\w+)*@\w+([-.]\w+)*.\w+([-.]\w+)*$/;
         	if(!eeRep.test($("#ipt-ee").val())){
         		$("#ipt-ee").addClass("default-input");
           		$("#ipt-ee").val("");
         		$("#ipt-ee").attr("placeholder","请检查邮箱格式");
         	}
         })
          $("#ipt-mypass").on("change",function(){
         	var eeRep=/^[\w-]{6,16}$/;
         	if(!eeRep.test($("#ipt-mypass").val())){
         		$("#ipt-mypass").addClass("default-input");
           		$("#ipt-mypass").val("");
         		$("#ipt-mypass").attr("placeholder","请检查密码格式");
         	}
         })
           $("#ipt-repass").on("change",function(){
         	if(!($("#ipt-mypass").val()== $("#ipt-repass").val())){
         		$("#ipt-repass").addClass("default-input");
           		$("#ipt-repass").val("");
         		$("#ipt-repass").attr("placeholder","两次输入密码不一致");
         	}
         })
    })