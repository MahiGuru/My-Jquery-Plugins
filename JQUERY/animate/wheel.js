(function(){
	$.fn.rotate = function(degrees){
		if ($.browser.msie) {
			// This fix unearthed from:
			// http://msdn.microsoft.com/en-us/library/ms533014%28v=vs.85%29.aspx
			// A simple explanation that [MXX] uses the sine and cosine of radians
			// instead of degrees would have sped up the search quite a bit... 
			// But why would we want adequate and verbose documentation??
			// Who enjoys actually getting work done anyway?? Srsly...
			deg2radians = Math.PI * 2 / 360;
			rad = degrees * deg2radians ;
			costheta = Math.cos(rad);
			sintheta = Math.sin(rad);
			M11 =costheta;
			M12 = -sintheta;
			M21 = sintheta;
			M22 = costheta;
			msUglyStepdaughterCode = "progid:DXImageTransform.Microsoft.Matrix(";
			msUglyStepdaughterCode += "M11=" + M11 + ", M12=" + M12 + ", M21=" + M21 + ", M22=" + M22;
			msUglyStepdaughterCode += ", sizingMethod='auto expand')"
			
			//this.css("-ms-filter","rotate(" + degrees + "deg)");
			this.css("filter",msUglyStepdaughterCode);
			this.css("zoom","1");
		} else if ($.browser.webkit) {
			this.css("-webkit-transform","rotate(" + degrees + "deg)");
		} else if ($.browser.opera) {
			this.css("-o-transform","rotate(" + degrees + "deg)");
		} else if ($.browser.mozilla) {
			this.css("-moz-transform","rotate(" + degrees + "deg)");
		} else {
			this.css("transform","rotate(" + degrees + "deg)");
		}
		return this;
	};// rotate Cross broeser function end here 
	$.fn.mahi_shape = function(options, selector, center, radius, angle, x, y){
		var settings = {
			selector : '#wheel2, #Wheel',
			id : 'iam_',
			center : 120,
			radius:160 ,
			angle:280 ,
			x:45,
			y:55
		}
		var defaults = $.extend(settings, options);
		
		var selector = defaults.selector;
		var radius = defaults.radius;
		var center  = defaults.center;
		var angle  = defaults.angle;
		var x  = defaults.x;
		var y  = defaults.y;
		var center = defaults.center;
			$(".sub_container span, .sub_wheel a").each(function(index){
					$(this).attr("id",defaults.id+index);
					var get_ID = $(this).attr("id");
					
					// Circle shape functonality	 the formula is C = 2PIR+center
							var total = $(".sub_container span").length;
							var pi =  Math.PI*2 // Normally PI value is 3.1652 that is multiplyed with two 
							//Pi value Devided  by Total count of images 
							var c = pi*index/total; 
							var mar_left = Math.floor(Math.sin(c)*radius+center);// radius multiply with PI Value
							var mar_top= Math.floor(Math.cos(c)*radius+center); // center using for the midpoint of the radius images
							$("#"+get_ID).animate({"margin-left":mar_left+x+"px", "margin-top":mar_top+y+"px"});// distance betweeen images usign X axis and Y axis
				});
				//Rotate functionality 
				function anim(){
					// ang value increse automatically outside using setInterval functionality
					if(ang >=360)  // this condition shows how we controling when the angle count 360 
						ang; // we can ang =0 or ang = 25 you can choose with this condition
						$(".sub_container").rotate(ang); //use this for cross browser compatibility instead of above statement
						$(".sub_container span").rotate(-ang); //use this for cross browser compatibility instead of above statement
						$(".sub_wheel").rotate(-ang); //use this for cross browser compatibility instead of above statement
						$(".sub_wheel a").rotate(ang); //use this for cross browser compatibility instead of above statement
					}
				var ang = 0;// ang intialitnzing here
				var ang_si = setInterval(function(){ang+=0.4;}, 50); // ang increment goes here	
				var si = setInterval(anim, 50); //using angle increment this functionality will work
						$(".sub_container span, .sub_wheel a").mouseover(function(){
							//$(this).css({"-moz-transform":"rotate(0deg)"}); //works only in FF
							$(this).rotate(); //use this for cross browser compatibility instead of above statement
							clearInterval(si); // we are clearing the set Interval functionality of anim function
							clearInterval(ang_si);// we are clearing the set Interval functionality of angle increment
							var k = $(this).attr("id");
							var spl = k.split("_")[1];
							//alert(spl);
							
							
							
						});
						
						$(".sub_container span, .sub_wheel a").mouseout(function(){
							si = setInterval(anim, 50); // here we are re setting the Anim functionality
							ang_si = setInterval(function(){ang+= 0.5},50)// here we are re setting the Ang Increment
							var k = $(this).attr("id");
							var spl = k.split("_")[1];
							
							
						});
				
			
				
				
} //WHEEL ROTATE FUNCTION END HERE

})(jQuery);
