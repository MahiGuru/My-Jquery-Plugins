
(function(){
	
/*  GLOBAL VARIABLES */	
		var evt_dates = ["1-11-2011", "2-11-2011",  "30-11-2011","1-12-2011", "2-12-2011", "28-12-2011"];	
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
	
/* Events list start from Here */
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
				
				if(month_name == (evt_month_num-1))
				{
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
		$(".events:first").addClass("active").show();
		var g= $(".active").attr("rel");
		$(".e_active[rel='"+g+"']").addClass("active_color");
		var s=setTimeout(myfun, 10000);
		function myfun(){
			$(".e_active").removeClass("active_color");
			$(".n_events.active").removeClass("active").hide();
			var my_active = $(".events.active");
			var my_count = $(".events").length;
			$(".events").hide();
			var my_next = my_active?my_active.next().addClass("active").slideDown().show():$("event:last").show();
			var g= $(".active").attr("rel");
			$(".e_active[rel='"+g+"']").addClass("active_color");
			my_active.removeClass("active");
			
			if(my_next.length == 0)
			{
				var  my_next = $(".events:first").addClass("active").show();
			}
			setTimeout(myfun, 10000);
		}
		
			
		$(".e_active").click(function(){
			$(".n_events.active").removeClass("active").hide();
			var get_id = $(this).attr("id");	
			var split_id = get_id.split("_")[2];
			$(".events").removeClass("active").hide();
			$(".events[rel='"+get_id+"']").addClass("active").show();
			$(".n_events[rel='"+get_id+"']").addClass("active").show();
			
		})
		
		
	}
})(jQuery);





