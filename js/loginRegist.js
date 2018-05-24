$(function(){
        $("#login").on("click",function(){
            var username = $("#ipt-email").val();
            var pwd = $("#ipt-password").val();
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
    })