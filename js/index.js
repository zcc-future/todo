$(document).ready(function(){
     $(".header").css("display","none")
	$(".main .yuan").on("touchend",function(){
		$(".main").css("display","none")
		$(".header").css("display","block")
		$(".footer").css("display","block")
		$("body").css("background","#eee")
	})
	
	var add=$(".header .add");
	var add1=$(".header .add1");
	var input=$(".header input")
	$(".zhezhao").css("display","none")
	add.css("display","none")
	input.css("display","none")
	add1.on("touchend",function(){
		$(".zhezhao").css("display","block")
		add.css("display","block");
	   input.css("display","block")
	})
	add.on("touchend",function(){
		$(".zhezhao").css("display","none")
		$(this).css("display","none")
		input.css("display","none")
	})
	
	var pos;
	var nodes=[];
	$("#ul").on("touchstart","li",function(e){
    	 pos=e.originalEvent.changedTouches[0].clientX
    })
    
    $("#ul").on("touchend","li",function(e){
    	 var y=e.originalEvent.changedTouches[0].clientX
    	 if(y-pos>=30){
    	 	$(this).addClass("done")
    	 	nodes[$(this).index()].state=1;
    	 	localStorage.nodes=JSON.stringify(nodes)
    	 }
    	 if(y-pos<=30){
    	 	$(this).removeClass("done")
    	 	nodes[$(this).index()].state=0;
    	 	localStorage.nodes=JSON.stringify(nodes)
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
		$('<li><div class="content">'+node.name+'</div><div class="delete">×</div></li>').appendTo($("#ul"))
	})
	function move(){
		for(i=0;i<nodes.length;i++){
			var done=(nodes[i].state===1)?"done":"";
			$('<li class="'+done+'"><div class="content">'+nodes[i].name+'</div><div class="delete">×</div></li>').appendTo($("#ul"))
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
  })
   $(".footer").on("touchend",".yiwc",function(){
  	$("li").hide()
  	$(".done").show()
  })
   $(".footer").on("touchend",".weiwc",function(){
  	$("li").show()
  	$(".done").hide()
  })
	
})
