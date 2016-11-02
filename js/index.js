$(document).ready(function(){
     $(".header").css("display","none")
	list=$(".list")
	var add=$(".header .add");
	var add1=$(".header .icon.add1");
	var input=$(".header input")
	$(".zhezhao").css("display","none")
	add.css("display","none")
	input.css("display","none")
	var all=$(".footer .all")
	var del=$(".delete")
	all.css({"background":"#D40203","color":"white"})
	ul=$("#ul")
	ul.css("display","none")
	$(".gd").css("display","none")
	list.css("display","none")
	//初始化
	$(".main .yuan").on("touchend",function(){
		$(".main").css("display","none")
		$(".header").css("display","block")
		$(".footer").css("display","block")
		$("body").css("background","#eee")
		ul.css("display","block")
		$(".gd").css("display","block")
		list.css("display","block")
	})
	$(".return").on("touchend",function(){
		$(".main").css("display","block")
		$(".header").css("display","none")
		$(".footer").css("display","none")
		$("body").css("background","none")
		ul.css("display","none")
		$(".gd").css("display","none")
		list.css("display","none")
	})
	//进入页面
	
	add1.on("touchend",function(){
		$(".zhezhao").css("display","block")
		add.css("display","block");
	   input.css("display","block")
	})
	add.on("touchend",function(){
		$(".zhezhao").css("display","none")
		$(this).css("display","none")
		input.css("display","none")
		if($("#ul li").length>0){
			$(".gd").css("display","none")
		}
		
	})
	
	var pos;
	var nodes=[];
	$("#ul").on("touchstart","li",function(e){
    	 pos=e.originalEvent.changedTouches[0].clientX
    })
    
    $("#ul").on("touchend","li",function(e){
    	 var y=e.originalEvent.changedTouches[0].clientX
    	 if(y-pos<=-30){
    	 	$(this).addClass("done")
    	 	nodes[$(this).index()].state=1;
    	 	localStorage.nodes=JSON.stringify(nodes);
    	 	$(".delete").addClass("move")
    	 }
    	 if(y-pos>=30){
    	 	$(this).removeClass("done")
    	 	nodes[$(this).index()].state=0;
    	 	localStorage.nodes=JSON.stringify(nodes)
    	 	$(".delete").removeClass("move")
    	 }
    })
	
	if(localStorage.nodes){
		nodes=[]
		nodes=JSON.parse(localStorage.nodes);
		move();
	}
	
	add.on("touchend",function(){
		
		var v=input.val()
		if(!v){
			return
		}
		var node={
			name:v,
			state:0
		}
		
		nodes.push(node)
		localStorage.nodes=JSON.stringify(nodes);
		$('<li><div class="content"><span></span>'+node.name+'</div><div class="delete">删除</div></li>').appendTo($("#ul"))
	})
	function move(){
		for(i=0;i<nodes.length;i++){
			var done=(nodes[i].state===1)?"done":"";
			$('<li class="'+done+'"><div class="content"><span></span>'+nodes[i].name+'</div><div class="delete">删除</div></li>').appendTo($("#ul"))
		}
	}
//	$(".yiwc").on("touchend",function(){
//		var newarr1=[];
//		for(var i=0;i<nodes.length;i++){
//			if(nodes[i].state != 0){
//				newarr1.push(nodes[i])
//			}
//			nodes=newarr1;
//		}
//	})
  $(".footer").on("touchend",".all",function(){
  	$("li").show()
  	$(".footer div").css({"background":"white","color":"#D40203"})
  	$(this).css({"background":"#D40203","color":"white"})
  	
  })
   $(".footer").on("touchend",".yiwc",function(){
  	$("li").hide()
  	$(".done").show()
  	$(".footer div").css({"background":"white","color":"#D40203"})
  	$(this).css({"background":"#D40203","color":"white"})
  })
   $(".footer").on("touchend",".weiwc",function(){
  	$("li").show()
  	$(".done").hide()
  	$(".footer div").css({"background":"white","color":"#D40203"})
  	$(this).css({"background":"#D40203","color":"white"})
  })
   del.on("touchend",function(){
   	
   	alert(1)
   })
	
})
