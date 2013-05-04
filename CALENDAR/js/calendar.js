/*********************************  INDEX  *********************** 

 - evt_dates ==> event dates what you are going to define,
 - month ==> Definfing Months in the Year
 - Weeks ==> Defininf Weeks in The Month
 - month_dates ==> Defining Dates in the month(month_End_numbers)
 - dates ==> Definfin Dates In month (All month dates )
 - dat ==> instance of date object
 - month_name ==> Getting the current month
 - week_name ==> Getting Current Weekname
 - date_num ==> getting the Current Date
 - full_year ==> Getting the Current Year (Full year)   
 - g_month ==>month name based on Array 

 "calendar_month" class is created for month_div is inside
 "month_div" class is created for including left right and month dates 
 "month_active" class is created for current month Heiglighted
"m_names" class is created for month names span
"d_names" class is created for day names in span
"num_names" class is created for date in span

"events_list" class is created for Storing the evt_dates 
"e_active" class for events dates
"events" class is created for event_list subelements have it for each div
"active" class is created for Heighlighting event_list

 



****************************************************************************************************/


(function(){
	
/*  GLOBAL VARIABLES */	
		var evt_dates = ["1-11-2011", "2-11-2011",  "30-11-2011","1-12-2011", "2-12-2011", "6-12-2011","8-12-2011", "9-12-2011", "12-12-2011", "14-12-2011", "16-12-2011","18-12-2011", "21-12-2011", "25-12-2011", "26-12-2011", "27-12-2011","28-12-2011"];	
		/* Date object */
		var month = ["january", "February", "March", "April", "May", "june", "july", "August", "Septempber", "October", "November", "December"];
		var weeks = ["M", "T", "W", "T", "F", "S", "S"];
		var month_dates = ["31", "28", "31", "30", "31", "30", "31", "31", "30","31", "30","31"];	
		var dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
		var dat = new Date();
		var month_name = dat.getMonth();
		var week_name = dat.getDay();
		var date_num = dat.getDate();
		var full_year = dat.getFullYear();
		var g_month = month[month_name];
		
$.fn.eve_calendar = function(){
		

function my_fun(){
		$(".eve_cal").append("<div class='last'></div><div class='next'></div>")	
		for(i=0; i<12; i++)
		{
			$(".eve_cal").append("<div class='calendar_month' id='cMonth_"+full_year+"_"+i+"' rel='"+i+"'>"+" "+"</div>");	
		}
	 
		 for(i=0; i<12; i++)
		 {  
			year_now = new Date(full_year, i, 1);
			start_date = year_now.getDay();
			
				$("#cMonth_"+full_year+"_"+i).append("<div class='month_div' id='Month_"+full_year+"_"+i+"' rel='"+full_year+"'><div class='left'></div><div class='m_names' id='myMonth_"+i+"'>"+full_year+" - "+month[i]+"</div><div class='right'></div></div>");
				for(d=0; d<weeks.length; d++)
				{
					$("#Month_"+full_year+"_"+i).append("<span class='d_names'>"+weeks[d]+"</span>");
				}
				for(j=1; j<start_date; j++)
				{
					$("#Month_"+full_year+"_"+i).append("<span class='num_names empty' id='emp_"+month[i]+j+"'>&nbsp;</span>");
				}
				for(n=0; n<month_dates[i]; n++)
				{
					$("#Month_"+full_year+"_"+i).append("<span class='num_names' rel='"+full_year+"_"+month[i]+"_"+(n+1)+"' id='"+full_year+"_"+month[i]+"_"+(n+1)+"'>"+(n+1)+"</span>");
				
				}
				
		 }// Create months using this DIV


		
		 $(".left").click(function(){
			var k = $(this).parent().attr("id");
			var s_id = k.split("_")[2]-1;
			//alert(s_id);
			$(".calendar_month").removeClass("month_active").hide();
			$(".calendar_month[rel='"+s_id+"']").addClass("month_active").show();
			if(s_id == -1)
			{
				prev();
				
			}
			
			
		 });
		$(".right").click(function(){
			var k = $(this).parent().attr("id");
			var s_id = k.split("_")[2];
			var s = (s_id++);
			$(".calendar_month").removeClass("month_active").hide();
			$(".calendar_month[rel='"+(s_id)+"']").addClass("month_active").show();
			if(s_id == 12)
			{
				Next();
			}
		});
		
		
		 $("#Month_"+full_year+"_"+month_name).parent().addClass("month_active");
		 $(".calendar_month").hide();
		 $("#cMonth_"+full_year+"_"+month_name).show();
		 var cur_month = month[month_name];
		 $("#"+cur_month+"_"+date_num).addClass("active");
		
		/* Events adding to calendar  */
		 for(evt=0; evt<evt_dates.length; evt++)
		 {
				 var e_date = evt_dates[evt];
				 evt_date = e_date.split("-")[0];
				 evt_month_num = e_date.split("-")[1];
				 evt_year = e_date.split("-")[2];
				 evt_month = month[evt_month_num-1];
				 $("#"+evt_year+"_"+evt_month+"_"+evt_date).addClass("e_active");
		 }
		
		
}
my_fun();

function prev(){
		full_year = full_year-1;
		nxt_year = full_year+1;
		for(i=0; i<12; i++)
		{
			$("#cMonth_"+nxt_year+"_"+i).remove();		
		}
		for(i=0; i<12; i++)
		{
			$(".eve_cal").append("<div class='calendar_month' id='cMonth_"+full_year+"_"+i+"' rel='"+i+"'>"+" "+"</div>");	
		}
		 	 
		 for(i=0; i<12; i++)
		 {  
			year_now = new Date(full_year, i, 1);
			start_date = year_now.getDay();
			
				$("#cMonth_"+full_year+"_"+i).append("<div class='month_div' id='Month_"+full_year+"_"+i+"' rel='"+full_year+"'><div class='left'></div><div class='m_names' id='myMonth_"+i+"'>"+full_year+" - "+month[i]+"</div><div class='right'></div></div>");
				for(d=0; d<weeks.length; d++)
				{
					$("#Month_"+full_year+"_"+i).append("<span class='d_names'>"+weeks[d]+"</span>");
				}
				for(j=1; j<start_date; j++)
				{
					$("#Month_"+full_year+"_"+i).append("<span class='num_names empty' id='emp_"+month[i]+j+"'>&nbsp;</span>");
				}
				for(n=0; n<month_dates[i]; n++)
				{
					$("#Month_"+full_year+"_"+i).append("<span class='num_names' rel='"+full_year+"_"+month[i]+"_"+(n+1)+"' id='"+full_year+"_"+month[i]+"_"+(n+1)+"'>"+(n+1)+"</span>");
				
				}
				
		 }// Create months using this DIV

		$(".left").click(function(){
			var k = $(this).parent().attr("id");
			var s_id = k.split("_")[2]-1;
			//alert(s_id);
			$(".calendar_month").removeClass("month_active").hide();
			$(".calendar_month[rel='"+(s_id)+"']").addClass("month_active").show();
			if(s_id == -1)
			{
				prev();
			}
			
		 });
		$(".right").click(function(){
			var k = $(this).parent().attr("id");
			var s_id = k.split("_")[2];
			var s = (s_id++);
			$(".calendar_month").removeClass("month_active").hide();
			$(".calendar_month[rel='"+(s_id)+"']").addClass("month_active").show();
			if(s_id == 12)
			{
				Next();
			}
		});
		$(".month_div").hide();
		$(".month_div[rel='"+full_year+"']").show();
		$(".calendar_month").hide();
		 $(".calendar_month:last").addClass("month_active").show(); 
		 
		 /* Events adding to calendar  */
		 for(evt=0; evt<evt_dates.length; evt++)
		 {
				 var e_date = evt_dates[evt];
				 evt_date = e_date.split("-")[0];
				 evt_month_num = e_date.split("-")[1];
				 evt_year = e_date.split("-")[2];
				 evt_month = month[evt_month_num-1];
				  $("#"+evt_year+"_"+evt_month+"_"+evt_date).addClass("e_active");
		 }
		 
		 $(".e_active").click(function(){
			 $(".n_events.active").removeClass("active").hide();
			var get_id = $(this).attr("id");	
			var split_id = get_id.split("_")[2];
			$(".events").removeClass("active").hide();
			$(".events[rel='"+get_id+"']").addClass("active").show();
			$(".n_events[rel='"+get_id+"']").addClass("active").show();
			
		})
}   // PREV Function End here 
	
function Next(){
		
	 	full_year = full_year+1;
		prev_year = full_year-1;
		for(i=0; i<12; i++)
		{
			$("#cMonth_"+prev_year+"_"+i).remove();		
		}
		for(i=0; i<12; i++)
		{
			$(".eve_cal").append("<div class='calendar_month' id='cMonth_"+full_year+"_"+i+"' rel='"+i+"'>"+" "+"</div>");	
		}
		 	 
		 for(i=0; i<12; i++)
		 {  
			year_now = new Date(full_year, i, 1);
			start_date = year_now.getDay();
			
				$("#cMonth_"+full_year+"_"+i).append("<div class='month_div' id='Month_"+full_year+"_"+i+"' rel='"+full_year+"'><div class='left'></div><div class='m_names' id='myMonth_"+i+"'>"+full_year+" - "+month[i]+"</div><div class='right'></div></div>");
				for(d=0; d<weeks.length; d++)
				{
					$("#Month_"+full_year+"_"+i).append("<span class='d_names'>"+weeks[d]+"</span>");
				}
				for(j=1; j<start_date; j++)
				{
					$("#Month_"+full_year+"_"+i).append("<span class='num_names empty' id='emp_"+month[i]+j+"'>&nbsp;</span>");
				}
				for(n=0; n<month_dates[i]; n++)
				{
					$("#Month_"+full_year+"_"+i).append("<span class='num_names' rel='"+full_year+"_"+month[i]+"_"+(n+1)+"' id='"+full_year+"_"+month[i]+"_"+(n+1)+"'>"+(n+1)+"</span>");
				
				}
				
		 }// Create months using this DIV


		
		 $(".left").click(function(){
			var k = $(this).parent().attr("id");
			var s_id = k.split("_")[2]-1;
			//alert(s_id);
			$(".calendar_month").removeClass("month_active").hide();
			$(".calendar_month[rel='"+(s_id)+"']").addClass("month_active").show();
			if(s_id == -1)
			{
				prev();
			}
			
		 });
		$(".right").click(function(){
			var k = $(this).parent().attr("id");
			var s_id = k.split("_")[2];
			var s = (s_id++);
			$(".calendar_month").removeClass("month_active").hide();
			$(".calendar_month[rel='"+(s_id)+"']").addClass("month_active").show();
			if(s_id == 12)
			{
				Next();
			}
		});
		
		$(".month_div").hide();
		$(".month_div[rel='"+full_year+"']").show();
		$(".calendar_month").hide();
		 $(".calendar_month:first").addClass("month_active").show(); 
		 
		/* Events adding to calendar  */
		 for(evt=0; evt<evt_dates.length; evt++)
		 {
				 var e_date = evt_dates[evt];
				 evt_date = e_date.split("-")[0];
				 evt_month_num = e_date.split("-")[1];
				 evt_year = e_date.split("-")[2];
				 evt_month = month[evt_month_num-1];
				  $("#"+evt_year+"_"+evt_month+"_"+evt_date).addClass("e_active");
		 } 
		 $(".e_active").click(function(){
			 $(".n_events.active").removeClass("active").hide();
			var get_id = $(this).attr("id");	
			var split_id = get_id.split("_")[2];
			$(".events").removeClass("active").hide();
			$(".events[rel='"+get_id+"']").addClass("active").show();
			$(".n_events[rel='"+get_id+"']").addClass("active").show();
			
		})
}// NEXT FUNCTION END HERE	

$(".last").click(function(){	 last();	});
$(".next").click(function(){  fast();	});
function last(){		prev();		}
function fast(){		Next();		}

} // Calendar function ends here 
	

/***************************************** Events list Function START from Here *******************************************************/

$.fn.events_list = function(){
		jQuery.fn.exists = function(){return this.length>0;}
		$(".events_list").after("<div class='next_events'></div>");
		for(i=0; i<evt_dates.length; i++)
		{
				 var e_date = evt_dates[i];
				 evt_date = e_date.split("-")[0];
				 evt_month_num = e_date.split("-")[1];
				 evt_year = e_date.split("-")[2];
				 evt_month = month[evt_month_num-1];
				
				//if(month_name)
				
				if(month_name == (evt_month_num-1))
				{
					$(".evt_dates").append("<span class='e_dates' id='"+full_year+"_"+evt_month+"_"+evt_date+"' rel='eve_"+full_year+"_"+evt_month+"_"+evt_date+"'>"+evt_date+"</span>");
				
					var have_id = "#eve_"+full_year+"_"+evt_month+"_"+evt_date;
					if ($(have_id).exists()) {
						$(".events_list").append("<div class='events' id='eve_"+full_year+"_"+evt_month+"_"+evt_date+"' rel='eve_"+full_year+"_"+evt_month+"_"+evt_date+"'><h1> ("+evt_dates[i]+")</h1></div>");
					}
					else
					{
					$(".events_list").append("<div class='events' id='eve_"+full_year+"_"+evt_month+"_"+evt_date+"' rel='"+full_year+"_"+evt_month+"_"+evt_date+"'><h1>("+evt_dates[i]+")</h1></div>");
					}
				}
				else
				{
					var have_id = "#eve_"+full_year+"_"+evt_month+"_"+evt_date;
					if ($(have_id).exists()) {
						$(have_id).append("<p>"+evt_heading[i]+evt_dates[i]+"</p></div>");
					}
					else
					{
					$(".next_events").append("<div class='n_events' id='eve_"+full_year+"_"+evt_month+"_"+evt_date+"' rel='"+full_year+"_"+evt_month+"_"+evt_date+"'><h1>"+evt_dates[i]+"</h1></div>");	
					}
					
				}
				
		}
		
		var my_len = $(".e_dates").length;
		if(my_len >=4)
		{
			$(".event_dates").append("<span class='e_right'><img src='images/right_evt.png' alt='right_img' /></span>")
			$(".event_dates").prepend("<span class='e_left'><img src='images/left_evt.png' alt='left_img' /></span>")
		}
		else
		{
		 	alert("nothing")	
		}
		
		
		$(".events:first, .e_dates:first").addClass("active").show();
		var g= $(".active").attr("rel");
		$(".e_active[rel='"+g+"']").addClass("active_color");
		$(".e_dates[rel='"+g+"']").addClass("active_color");
		
		var s=setTimeout(myfun, 5000);
		function myfun(){
			$(".e_active").removeClass("active_color");
			$(".n_events.active").removeClass("active").hide();
			var my_active = $(".events.active, .e_dates.active");
			var my_count = $(".events").length;
			$(".events").hide();
			var my_next = my_active?my_active.next().addClass("active").show():$(".event:last").show();
			var g= $(".active").attr("rel");
			$(".e_active[rel='"+g+"']").addClass("active_color");
			my_active.removeClass("active");
			if($(".e_dates:last").hasClass("active") == true)
			{
				$(".evt_dates").animate({"margin-top":"0px"}, 5000).animate({"margin-left":"0px"}, 1000)
			}
			if($(".e_dates:eq(4)").hasClass("active") == true || $(".e_dates:eq(8)").hasClass("active") == true  || $(".e_dates:eq(12)").hasClass("active") == true)
			{
				$(".evt_dates").animate({"margin-left":"-=180px"})
			}
			if(my_next.length == 0)
			{
				var  my_next = $(".events:first, .e_dates:first").addClass("active").show();
				$(".evt_dates").animate({"margin-left":"0px"})
			}
			
			setTimeout(myfun, 5000);
		}
		
			
		$(".e_active").live("click", function(){
			$(".n_events.active").removeClass("active").hide();
			var get_id = $(this).attr("id");	
			var split_id = get_id.split("_")[2];
			$(".events").removeClass("active").hide();
			$(".e_dates").removeClass("active")
			$(".events[rel='"+get_id+"']").addClass("active").show();
			
			$(".e_dates[rel='eve_"+get_id+"']").addClass("active").show()
			$(".n_events[rel='"+get_id+"']").addClass("active").show();
			
		
			
		})
		
		$(".e_dates").live("click", function(){
			$(".e_dates").removeClass("active");
			var get_id = $(this).attr("id")
			$(".events").removeClass("active").hide();
			$(".events[rel='"+get_id+"']").addClass("active").show();
			$(this).addClass("active");
		});
		
		$(".calendar_icon img").click(function(){
			var get_left = $(this).offset().left;
				$(".eve_cal").css({"left":(get_left)+"px"}).show();
				$(".eve_cal").hover(
					function(){ 
						$(this).show(); 
						
						}, 
					function(){ 
						$(this).hide(); 
				});
		});
		
		var evt_width = ($(".e_dates").width())
		var evt_length = $(".e_dates").length;
		//alert(evt_width*evt_length*2)
		$(".evt_dates").css({'width':evt_width*evt_length*2+"%"})
		
		$(".e_right, .e_left").click(function(){
			$(".evt_dates").animate({"margin-left":"-=100%"})
			var get_m_left = $(".evt_dates").css("margin-left");
			var split_date = (-(get_m_left.split("p")[0]))
			var get_length = evt_width*evt_length*2;
			if(split_date >= get_length)
			{
				$(".evt_dates").animate({"margin-left":"0%"})
			}
			
		})
				
		
		
		
		
		
		
		
		
		
		
	}
})(jQuery);





