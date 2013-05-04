(function(){
	$.fn.Mahi_shape = function(options, selector, center, radius, angle, x, y){
		var settings = {
			selector : '.ok',
			id : 'image_',
			center : 0,
			radius:180 ,
			angle:250 ,
			x:50,
			y: 50
		}
		var defaults = $.extend(settings, options);
		
		var selector = defaults.selector;
		var radius = defaults.radius;
		var center  = defaults.center;
		var angle  = defaults.angle;
		var x  = defaults.x;
		var y  = defaults.y;
		var center = defaults.center;
		function myfun(){
				
					
		}
		$(".flow_ul li:has(ul)").each(function(){
			$(this).addClass("ok")	
			$(this).children("ul").hide()
		})
			
				$(".flow_ul li:has(ul)").live("click", function(e){
					$(this).children("ul").show()
					var center = -40;
					$(this).removeClass("ok").addClass("cancel")
					var total =  $(this).children("ul").children("li").length;
					var g_id = $(this).attr("id")
					
					$(this).children("ul").children("li").each(function(index){
						$(this).parent("ul").parent("ul").hide()
							$(this).attr("id",g_id+"_"+index);
							var get_ID = $(this).attr("id");
							var pi =  Math.PI*2
							var c = pi*index/total;
							var mar_left = Math.floor(Math.sin(c)*radius+center);
							var mar_top= Math.floor(Math.cos(c)*radius+center);
							$("#"+get_ID).animate({"left":mar_left+x+"px", "top":mar_top+y+"px"}).show();
					});
				});	
				
				
		} //shape function end here
})(jQuery);