(function(){
	$.fn.Mahi_shape = function(options, selector, center, radius, angle, x, y){
		var settings = {
			selector : '#container',
			id : 'image_',
			center : 150,
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
		
		
				$(".sub_container span").each(function(index){
					$(this).attr("id",defaults.id+index);
					var get_ID = $(this).attr("id");
					
					// Circle shape functonality	
							var total = $("span").length;
							var pi =  Math.PI*2
							var c = pi*index/total;
							var mar_left = Math.floor(Math.sin(c)*radius+center);
							var mar_top= Math.floor(Math.cos(c)*radius+center);
							$("#"+get_ID).animate({"margin-left":mar_left+x+"px", "margin-top":mar_top+y+"px"});
							
				});
				
			
				//Rotate functionality 
					function anim(){
							if(ang >=360) 
								ang;
								$(".sub_container").rotate(ang); //use this for cross browser compatibility instead of above statement
								$(".sub_container span").rotate(-ang); //use this for cross browser compatibility instead of above statement
							}
				var ang = 0;
				var ang_si = setInterval(function(){ang++;}, 50);
				var si = setInterval(anim, 50);
						
						$(".sub_container span").mouseover(function(){
							//$(this).css({"-moz-transform":"rotate(0deg)"}); //works only in FF
							$(this).rotate(); //use this for cross browser compatibility instead of above statement
							clearInterval(si);
							clearInterval(ang_si);
						});
						
						$(".sub_container span").mouseout(function(){
							si = setInterval(anim, 50);
							ang_si = setInterval(function(){ang++},50)
						});
				// Bubbles Functionalaity
				$(".sub_container span").click(function(){
								get =  $(this).attr("id")
								alert(get);
				});	
				
		} //shape function end here
})(jQuery);