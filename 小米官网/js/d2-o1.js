$(document).ready(function(){
	    		$(".box-02-01-text").mouseenter(function(){
	    			$("#box-02-01-bottom").slideDown(100);/*slideDown:弹出*/
	    			this.style.color = "#ff6600";
	    			$("#box-02-01-bottom-01").css("display","none");
	    			$("#box-02-01-bottom-02").css("display","none");
	    			$("#box-02-01-bottom-03").css("display","none");
	    			$("#box-02-01-bottom-04").css("display","none");
	    			$("#box-02-01-bottom-05").css("display","none");
	    			$("#box-02-01-bottom-06").css("display","none");
	    			$("#box-02-01-bottom-07").css("display","none");
	    			$("#box-02-01-bottom-08").css("display","none");
	    			console.log("212:"+this.innerText);
	    			switch(this.innerText){
	    				case "大米手机":
	    				$("#box-02-01-bottom-01").css("display","block");
	    				break;
	    				case "黑米":
	    				$("#box-02-01-bottom-02").css("display","block");
	    				break;
	    				case "电视":
	    				$("#box-02-01-bottom-03").css("display","block");
	    				break;
	    				case "笔记本":
	    				$("#box-02-01-bottom-04").css("display","block");
	    				break;
	    				case "家电":
	    				$("#box-02-01-bottom-05").css("display","block");
	    				break;
	    				case "新品":
	    				$("#box-02-01-bottom-06").css("display","block");
	    				break;
	    				case "路由器":
	    				$("#box-02-01-bottom-07").css("display","block");
	    				break;
	    				case "智能硬件":
	    				$("#box-02-01-bottom-08").css("display","block");
	    				break;
	    			}
	    		});
	    		$(".box-02-01-text").mouseleave(function(){
	    			this.style.color = "black";
	    		});
	    		$("#box-02-01").mouseleave(function(){
	    			$("#box-02-01-bottom-01").css("display","none");
	    			$("#box-02-01-bottom-02").css("display","none");
	    			$("#box-02-01-bottom-03").css("display","none");
	    			$("#box-02-01-bottom-04").css("display","none");
	    			$("#box-02-01-bottom-05").css("display","none");
	    			$("#box-02-01-bottom-06").css("display","none");
	    			$("#box-02-01-bottom-07").css("display","none");
	    			$("#box-02-01-bottom-08").css("display","none");
	    			$("#box-02-01-bottom").slideUp(100);
	    		});
	    		/*
	    		 * focusin：组建获取焦点时
	    		 */
	    		$("#box-02-01-input").focusin(function(){
	    			$("#box-02-01-search").css("border-color","#ff6600");
	    			$("#box-02-01-input").css("border-color","#ff6600");
	    		});
	    		
	    	
	    	});