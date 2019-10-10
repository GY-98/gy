/*ready表示当前文档加载完成后再调用该方法*/
			$(document).ready(function(){
				/*
				 * 鼠标悬浮时间
				 * mouseenter：鼠标移入时
				 */
				$("#box01-car").mouseenter(function(){
					$("#car-img").attr("src","img/d1/car_no.png");/*改购物车颜色*/
					$("#car-text").css("color","orangered");
					$("#car-info").slideDown(200);
					$("#box01-car").css("background","#FFFFFF");
				});
			    $("#box-01-info-right").mouseleave(function(){
				    $("#car-img").attr("src","img/d1/car_yes.png");/*改购物车颜色*/
					$("#car-text").css("color","gainsboro");
					$("#car-info").slideUp(200);
					$("#box01-car").css("background","rgba(255,255,255,0.2)");
			    });
			    /*跳转页面*/
			    $("#loginbtn").click(function(){
			    	tologin();
			    });
			    function tologin(){
			    	window.location.href="登录.html";
			    }
			    
			});
			