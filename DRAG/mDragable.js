(function(){
		  
/*
widget method is used for dragging, resizing, minimizing, Maximizing and Closing.
.........................................
variables
-----------------------------------------
settings => for setting the varible like dragClassName and title, Resizable, Minimize, Maximize, closebuttons are set to true here .....
var documentTop,  documentLeft, documentWidth ,documentHeight   ==> finding the document scroll Top, left position and document width, height and assigned to this vaible
var selectorWidth, selectorHeight, selectorLeft , selectorTop   ==> Finding the document Selector width and height and position of selector(Left, Top);
isDragableTrue ==> is used for Draggable state,
isResizableTrue => is used for Resizable state,

pressedMouseDown pressedMouseUp moveMouse   ==> this methods are used for drag the widget...
resizeMouseDown resizeMouseUp resizeMouseMove ==> this methods are used for resiz the widget.......

isMinimizeBtn || isMaximizeBtn || isCloseBtn = Minimize and Maximize, closebuttonsfor showing the buttons on widget


*/
  $.fn.widget = function(options){
	  	
		  var settings = {
					isTitleEnabled : true,
					title : "MyHeader",
					isDragable : true,
					isResizable : true,
					isMinimizeBtn : true,
					isMaximizeBtn : true,
					isCloseBtn : true
				     }

			var defaults = $.fn.extend(settings, options);
			
			//Variable Declaration for  settings......
			var $this = $(this);
			var isDragableTrue = defaults.isDragable, isResizable = defaults.isResizable,  isTitleEnabled = defaults.isTitleEnabled;
			 var title = defaults.title, isMinimizeBtn = defaults.isMinimizeBtn, isMaximizeBtn = defaults.isMaximizeBtn, isCloseBtn = defaults.isCloseBtn;
			
			var documentTop = $(document).scrollTop();
			var documentLeft = $(document).scrollLeft();
			var documentWidth = $(document).width();
			var documentHeight = $(document).height();
			var selectorWidth = $this.width();
			var selectorHeight = $this.height();
			var selectorLeft = $this.position().left;
			var selectorTop = $this.position().top;
			var zindex = 1;
			$(".container").css({"width":documentWidth+"px", "height":"100%"});
			$(window).resize(function(){
				documentWidth = $(window).width();
				documentHeight = $(window).height();
			})
			
			$this.attr("dragDiv" ,"true");		
			if(isDragableTrue)
			{
				if(isTitleEnabled){
					$this.append("<div class='widgetHeader'><h1 class='dragTitle'>"+title+"</h1></div>");
				}
				else
				{
					$this.append("<div class='widgetHeader'><h1 class='dragTitle'></h1></div>");
				}
				//MousePressed Method function started here...
				var pressedMouseDown = function(e){	
					
					//Flag Set to True on MousePressed.....
					isDragableTrue = true;
					
					// Finding  Mouse Left and Top Points and Positions on MousePressed.....
					mouseLeftPoint = e.pageX;
					mouseTopPoint = e.pageY;
					getLeftPos = $this.position().left;
					getTopPos = $this.position().top;
					//Calling the MouseMove Function on MousePressed.....
					$(document).mousemove(moveMouse);
				};
				
				//MousePressed Release Method function started here...           
				var pressedMouseUp = function (e){
					isDragableTrue = false;
					
				};
				
				//MouseMove Method function started here...
				var moveMouse = function(e){
					if(isDragableTrue)
					{
						selectorLeft = mouseleftPos =getLeftPos+(e.pageX-mouseLeftPoint);
						selectorTop = mouseTopPos = getTopPos+(e.pageY-mouseTopPoint);
						//console.log(mouseTopPos +" == "+documentTop);
						if(mouseleftPos <= documentLeft)
						{ mouseleftPos = documentLeft }
						else if(mouseTopPos <= documentTop )
						{ 	mouseTopPos = documentTop;
							
						}
						else if(mouseleftPos >= documentWidth-50)
						{ mouseleftPos =  documentWidth-50;  }
						//alert($this.data("title"))
						$("[dragDiv = true]").css({"z-index":0});
						$this.css({"position":"absolute","left":mouseleftPos+"px", "top":mouseTopPos+"px", "z-index":555});
						$("body").css({ "overflow-x":"hidden"})
					}
				};
				$this.find(".widgetHeader").mousedown(pressedMouseDown);
				$(document).mouseup(pressedMouseUp);
			} //If Draggable set to True only......
			
			
			if(isResizable){
				$this.append("<span class='resize'></span>");
						
				//MousePressed Method function started here...
				var resizeMouseDown = function(e){	
					
					//Flag Set to True on MousePressed.....
					isResizableTrue = true;
					resize = $("."+$this.attr("class"));
					// Finding  Mouse Left and Top Points and Positions on MousePressed.....
					mouseLeftPoint = e.pageX;
					mouseTopPoint = e.pageY;
					getWidth = $this.width();
					getHeight = $this.height();
					//Calling the MouseMove Function on MousePressed.....
					$(document).mousemove(resizeMoveMouse);
				};
				
				//MousePressed Release Method function started here...
				var resizeMouseUp = function (e){
					isResizableTrue = false;
				};
				
				//MouseMove Method function started here...
				var resizeMoveMouse = function(e){
					if(isResizableTrue)
					{
						resize.css({"width":(getWidth+(e.pageX-mouseLeftPoint))+"px", "height":getHeight+(e.pageY-mouseTopPoint)+"px"});
						selectorWidth = getWidth+(e.pageX-mouseLeftPoint);
						selectorHeight = getHeight+(e.pageY-mouseTopPoint);
					}
				};
				$this.find(".resize").mousedown(resizeMouseDown);
				$(document).mouseup(resizeMouseUp);
				//$this.css({"width":"px", "height":"px"})		
			} //If Selector Resize set to True only.........
			if(isMinimizeBtn || isMaximizeBtn || isCloseBtn)
			{
				$this.find(".widgetHeader").append("<div class='topBtnArea'></div>");	
			}
			if(isMinimizeBtn)
			{
				$this.find(".topBtnArea").append("<span class='minimize'></span>");
				$this.find(".minimize").click(function(){
					$this.css({"position":"relative", "bottom":"10px", "float":"left", "left": ""});
					$this.css({"top":(documentHeight-50)+"px"});
					$this.width("200px").height("40px")
					if(isResizable)
					{
						$this.find(".resize").hide();	
					}	
					$this.find(".widgetHeader").unbind("mousedown", pressedMouseDown);
				
				});
			} // isMinimize button isSet to TRUE
			if(isMaximizeBtn)
			{
				$this.find(".topBtnArea").prepend("<span class='maximize'></span>");
				$this.find(".maximize").click(function(){
					$("[dragDiv = true]").css({"z-index":0});
					$this.find(".widgetHeader").bind("mousedown", pressedMouseDown);
					
					if(parseInt($this.css("width")) < selectorWidth)
					{
						$this.css({"width":selectorWidth+"px", "height":selectorHeight+"px", "left":selectorLeft+"px", "top":selectorTop+"px", "position":"absolute", "z-index":555})
					}
					else if(parseInt($this.css("width")) == selectorWidth)
					{
						$this.css({"width":documentWidth+"px", "height":documentHeight+"px","left":"0px", "top":"0px", "position":"absolute" , "z-index":555});	
						$this.find(".widgetHeader").unbind("mousedown", pressedMouseDown);
					}
					else if(parseInt($this.css("width")) > selectorWidth)
					{
						$this.css({"width":selectorWidth+"px", "height":selectorHeight+"px", "left":selectorLeft+"px", "top":selectorTop+"px", "position":"absolute", "z-index":555})	
					}
					$this.find(".resize").show();
					
				})
					
			}
			if(isCloseBtn)
			{
					$this.find(".topBtnArea").prepend("<span class='close'></span>");
					$this.find(".close").click(function(){
						$this.hide()	
					})
			}
			
			
   } // widget function end here ................
		 
		 
		 
		 
		  
})(jQuery)