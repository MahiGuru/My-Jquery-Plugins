(function(){
		$.fn.editor = function(options){
			var defaults = {
				isLeft : true,
				isRight : true,
				isTop : true,
				isBottom : true,
				isContent : true,
				isLeftWidth : 300,
				isRightWidth : 300,
				isTopHeight : 20, // calculate in percentage
				isBottomHeight : 20, // calculate in percentage
				isTopArrowClass : "tbcurve",
				isBottomArrowClass : "bbcurve",
				isLeftArrowClass : "lbcurve",
				isRightArrowClass : "rbcurve",
				containerClassArray : ["leftContainer", "rightContainer", "topContainer", "bottomContainer", "contentArea"] //update your classnames using this property
			}
			var settings = $.extend(defaults, options);
			var  mthis = $(this);
			//alert(mthis.find("."+settings.containerClassArray[0]).html());
			thisWidth = mthis.width();
		
			bottomContent = "position:absolute; margin:auto;";
			var leftState, rightState, topState, bottomState,contentState;
			
			lrCSS =  "height:"+(100-(settings.isTopHeight+settings.isBottomHeight))+"%; top:"+settings.isTopHeight+"%; position:relative; bottom:"+settings.isBottomHeight+"%";
			contentCSS = "height:100%; position:relative; width : "+(thisWidth-(settings.isLeftWidth+settings.isRightWidth))+"px; left: "+ settings.isLeftWidth+"px ";
			mthis.css({"min-width":(settings.isLeftWidth+settings.isRightWidth+100)+"px"});
			 leftState= {"width" : settings.isLeftWidth+"px", "left":"0"};
			 leftStateCurve = "<span class='"+settings.isLeftArrowClass+"' style='"+bottomContent+"bottom:50%; right:0'>Close</span>";
			 rightState = {"width" : settings.isRightWidth+"px", "right":"0"}
			 rightStateCurve = "<span class='"+settings.isRightArrowClass+"' style='"+bottomContent+"bottom:50%; left:0'>Close</span>"
			 topState = {"width":"100%","height" : settings.isTopHeight+"%", "top":"0"};
			 topStateCurve = "<span class='"+settings.isTopArrowClass+"' style='"+bottomContent+"left:50%; bottom:0'>Close</span>";
			 bottomState = {"width":"100%","height" : settings.isBottomHeight+"%", "bottom":"0"}
			 bottomStateCurve = "<span class='"+settings.isBottomArrowClass+"' style='"+bottomContent+"left:50%; top:0'>Close</span>";
			
			if(!settings.isLeft && !settings.isRight)  contentCSS = "height:100%; position:relative; width : "+(thisWidth)+"px";
			if(!settings.isLeft && settings.isRight)  contentCSS = "height:100%; position:relative; width : "+(thisWidth-(settings.isRightWidth))+"px; left: 0px ";
			if(settings.isLeft && !settings.isRight)  contentCSS = "height:100%; position:relative; width : "+(thisWidth-(settings.isLeftWidth))+"px; left: "+ settings.isLeftWidth+"px ";
			if(!settings.isTop && !settings.isBottom)  { lrCSS =  "height:100%; position:relative"; }
			if(!settings.isTop && settings.isBottom)  { lrCSS =  "height:"+(100-(settings.isBottomHeight))+"%; position:relative"; tbHeight = settings.isBottomHeight}
			if(settings.isTop && !settings.isBottom) {  lrCSS =  "height:"+(100-(settings.isTopHeight))+"%; position:relative; top:"+settings.isTopHeight+"%"; 
														tbHeight = settings.isTopHeight }
			if(settings.isTop && settings.isBottom)  { tbHeight = settings.isTopHeight+settings.isBottomHeight; }
			
			mthis.append("<div class='leftRightwrapper' style='"+lrCSS+"'></div>");
			if(settings.isLeft) { mthis.find("."+settings.containerClassArray[0]).css(leftState).append(leftStateCurve).appendTo(".leftRightwrapper"); }
			if(settings.isRight) { mthis.find("."+settings.containerClassArray[1]).css(rightState).append(rightStateCurve).appendTo(".leftRightwrapper"); }
			if(settings.isTop) { mthis.find("."+settings.containerClassArray[2]).css(topState).append(topStateCurve); }
			if(settings.isBottom) { mthis.find("."+settings.containerClassArray[3]).css(bottomState).append(bottomStateCurve); }
			if(settings.isContent) { mthis.find("."+settings.containerClassArray[4]).attr("style", contentCSS).appendTo(".leftRightwrapper"); }
			if(!settings.isTop) { $("."+settings.containerClassArray[2]).hide(); }
			if(!settings.isBottom) { $("."+settings.containerClassArray[3]).hide(); }
			if(settings.isLeft || settings.isTop || settings.isRight || settings.isBottom || settings.isContent)
			{
				if(!mthis.find("div").hasClass(settings.containerClassArray[0]) || !mthis.find("div").hasClass(settings.containerClassArray[1]) || !mthis.find("div").hasClass(settings.containerClassArray[2]) || !mthis.find("div").hasClass(settings.containerClassArray[3])|| !mthis.find("div").hasClass(settings.containerClassArray[4]))
					alert("Please add required Div(Left, Right, Content, Top, Bottom) Container in your Dom area...");	
			}
			if(!settings.isContent)
						alert("please Intialize the isContent to true");	
			
			
			
			$.fn.clickEvent = function(lbCurve, rbCurve, tbCurve, bbCurve){
				$(document).on("click", "."+lbCurve+", ."+rbCurve+", ."+tbCurve+", ."+bbCurve, function(){
						_this = $(this);																				
						
						containerHeight = $(this).parent().height();
						containerWidth = $(this).parent().width();
						contentAreaWidth = mthis.find("."+settings.containerClassArray[4]).width();
						lrwrapperHeight = mthis.find(".leftRightwrapper").outerHeight();
						lrwrapperWidth = mthis.find(".leftRightwrapper").width();
						
						if(_this.hasClass(lbCurve))
						{
							$(this).parent().addClass("actionContainer");
							if(mthis.find($("."+settings.containerClassArray[0])).hasClass("actionContainer"))
							 {	
							 	mthis.find("."+settings.containerClassArray[4]).animate({"left":"0px", "width":(containerWidth+contentAreaWidth)+"px"});
								_this.css({"left":"0"}).appendTo("."+settings.containerClassArray[4]);
								mthis.find($("."+settings.containerClassArray[0])).removeClass("actionContainer");
							 }
							 else
							 {
								mthis.find("."+settings.containerClassArray[4]).animate({"left":(settings.isLeftWidth)+"px", "width":(contentAreaWidth-settings.isLeftWidth)+"px"});								
								_this.css({"left":"auto","right":"0"}).appendTo("."+settings.containerClassArray[0]);
								mthis.find($("."+settings.containerClassArray[0])).addClass("actionContainer");
							 }
						}
						else if(_this.hasClass(rbCurve))
						{
							$(this).parent().addClass("actionContainer");
							if(mthis.find($("."+settings.containerClassArray[1])).hasClass("actionContainer"))
							{
								mthis.find("."+settings.containerClassArray[4]).animate({"right":"0px", "width":(containerWidth+contentAreaWidth)+"px"});
								_this.css({"left":"auto", "right":"0"}).appendTo("."+settings.containerClassArray[4]);
								mthis.find($("."+settings.containerClassArray[1])).removeClass("actionContainer");
							}
							else
							{
							   mthis.find("."+settings.containerClassArray[4]).animate({"right":(settings.isLeftWidth)+"px","width":(contentAreaWidth-settings.isRightWidth)+"px"});								
							   _this.css({"left":"0"}).appendTo("."+settings.containerClassArray[1]);
							   mthis.find($("."+settings.containerClassArray[1])).addClass("actionContainer");
							}
						}
						else if($(this).hasClass(tbCurve))
						{
								if(settings.isBottom)
								{	
									if(mthis.find($("."+settings.containerClassArray[2])).hasClass("actionContainer"))
									{
										
										if($("."+settings.containerClassArray[3]).hasClass("actionContainer"))
										{	mthis.find(".leftRightwrapper").animate({"top":settings.isTopHeight+"%", "height":(100-settings.isTopHeight)+"%"}); }
										else
										{	mthis.find(".leftRightwrapper").animate({"top":settings.isTopHeight+"%", "height":(100-tbHeight)+"%"}); }
										_this.css({"top":"auto", "bottom":"0"}).appendTo("."+settings.containerClassArray[2]);	
										mthis.find($("."+settings.containerClassArray[2])).removeClass("actionContainer");
										
									}
									else
									{
										
										if($("."+settings.containerClassArray[3]).hasClass("actionContainer"))
										{	mthis.find(".leftRightwrapper").animate({"top":"0px", "height":"100%"}); }
										else
										{	mthis.find(".leftRightwrapper").animate({"top":"0px", "height":(100-settings.isTopHeight)+"%"}); }
										
										_this.css({"top":"0"}).appendTo("."+settings.containerClassArray[4]);
										mthis.find($("."+settings.containerClassArray[2])).addClass("actionContainer");
									}
									
									
								}
								else
								{
									
										if(mthis.find($("."+settings.containerClassArray[2])).hasClass("actionContainer"))
										{
											mthis.find(".leftRightwrapper").animate({"top":settings.isTopHeight+"%", "height":(100-settings.isTopHeight)+"%"}); 
											_this.css({"top":"auto", "bottom":"0"}).appendTo("."+settings.containerClassArray[2]);	
											mthis.find($("."+settings.containerClassArray[2])).removeClass("actionContainer");
										}
										else
										{
											mthis.find(".leftRightwrapper").animate({"top":"0px", "height":"100%"}); 
											_this.css({"top":"0"}).appendTo("."+settings.containerClassArray[4]);
											mthis.find($("."+settings.containerClassArray[2])).addClass("actionContainer");
										}
								}
						}
						else if($(this).hasClass(bbCurve))
						{
								if(settings.isTop)
								{	
									if(mthis.find($("."+settings.containerClassArray[3])).hasClass("actionContainer"))
									{
										if($("."+settings.containerClassArray[2]).hasClass("actionContainer"))
										{	mthis.find(".leftRightwrapper").animate({"bottom":settings.isBottomHeight+"%","height":(100-settings.isBottomHeight)+"%"}); }
										else
										{	mthis.find(".leftRightwrapper").animate({"bottom":settings.isBottomHeight+"%", "height":(100-tbHeight)+"%"}); }
										_this.css({"top":"0"}).appendTo("."+settings.containerClassArray[3]);	
										mthis.find($("."+settings.containerClassArray[3])).removeClass("actionContainer");
										
									}
									else
									{
										if($("."+settings.containerClassArray[2]).hasClass("actionContainer"))
										{	mthis.find(".leftRightwrapper").animate({"bottom":"0px", "height":"100%"}); }
										else
										{	mthis.find(".leftRightwrapper").animate({"bottom":"0px", "height":(100-settings.isTopHeight)+"%"}); }
										
										_this.css({"top":"auto", "bottom":"0"}).appendTo("."+settings.containerClassArray[4]);
										mthis.find($("."+settings.containerClassArray[3])).addClass("actionContainer");
									}
									
								}
								else
								{
									if(mthis.find($("."+settings.containerClassArray[3])).hasClass("actionContainer"))
									{
										mthis.find(".leftRightwrapper").animate({"bottom":"0px", "height":(100-settings.isBottomHeight)+"%"}); 
										_this.css({"top":"0"}).appendTo("."+settings.containerClassArray[3]);	
										mthis.find($("."+settings.containerClassArray[3])).removeClass("actionContainer");
										
									}
									else
									{
										mthis.find(".leftRightwrapper").animate({"bottom":"0px", "height":"100%"});
										_this.css({"top":"auto", "bottom":"0"}).appendTo("."+settings.containerClassArray[4]);
										mthis.find($("."+settings.containerClassArray[3])).addClass("actionContainer");
									}
									
								}
						}
						//mthis.find(".leftRightwrapper").css({"top":"0px"})
				});
			}
			mthis.clickEvent(settings.isLeftArrowClass,settings.isRightArrowClass, settings.isTopArrowClass, settings.isBottomArrowClass);
			
		} // Editor Function End here ---------
		
})(jQuery);