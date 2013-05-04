(function(){
	
/*  GLOBAL VARIABLES */	
		var evt_dates = ["1", "2", "12", "13", "24", "28"];	
		/* Date object */
		var dat = new Date();
		var month_name = dat.getMonth();
		var week_name = dat.getDay();
		var date_num = dat.getDate();
		var full_year = dat.getFullYear();
$.fn.eve_calendar = function(){
		var month = ["january", "February", "March", "April", "May", "june", "july", "August", "Septempber", "October", "November", "December"];
		var weeks = ["M", "T", "W", "T", "F", "S", "S"];
		var month_dates = ["31", "28", "31", "30", "31", "30", "31", "31", "30","31", "30","31"];	
		var dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

		
		for(i=0; i<12; i++)
		{
			$(".eve_cal").append("<div class='calendar_month' id='cMonth_"+i+"' rel='"+i+"'>"+" "+"</div>");	
		}
	 
		 for(i=0; i<12; i++)
		 {  
			year_now = new Date(full_year, i, 1);
			start_date = year_now.getDay();
			
				$("#cMonth_"+i).append("<div class='month_div' id='Month_"+full_year+"_"+i+"' rel='"+full_year+"'><div class='left'></div><div class='m_names' id='myMonth_"+i+"'>"+full_year+" - "+month[i]+"</div><div class='right'></div></div>");
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
					$("#Month_"+full_year+"_"+i).append("<span class='num_names' rel='"+month[i]+"_"+(n+1)+"' id='"+month[i]+"_"+(n+1)+"'>"+(n+1)+"</span>");
				
				}
				
		 }// Create months using this DIV

		 
		 function prev_year(){
			 full_year = full_year-1;
			  for(i=0; i<12; i++)
				 {  
					year_now = new Date(full_year, i, 1);
					start_date = year_now.getDay();
					
						$("#cMonth_"+i).append("<div class='month_div' id='Month_"+full_year+"_"+i+"' rel='"+full_year+"'><div class='left'></div><div class='m_names' id='myMonth_"+i+"'>"+full_year+" - "+month[i]+"</div><div class='right'></div></div>");
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
							$("#Month_"+full_year+"_"+i).append("<span class='num_names' rel='"+month[i]+"_"+(n+1)+"' id='"+month[i]+"_"+(n+1)+"'>"+(n+1)+"</span>");
						
						}
						
				 }// Create months using this DIV
				 $(".month_div[rel='"+(full_year+1)+"']").hide();
				 $(".calendar_month:last").show();
				 
				$(".left").click(function(){
						$(".calendar_month").hide();
						var p = $(this).parent().parent(".calendar_month").attr("id");
						$("#"+p).prev().show();
						var relP = $(this).parent().parent(".calendar_month").attr("rel");
						var current_month =$(".calendar_month[rel="+relP+"]").attr("rel")-1;
						if(current_month == -1)
						{
							prev_year();
						}
				});
		}// Prev_Year Function End here
		 
		  function next_year(){
			 full_year = full_year+1;
			  for(i=0; i<12; i++)
				 {  
					year_now = new Date(full_year, i, 1);
					start_date = year_now.getDay();
					
						$("#cMonth_"+i).append("<div class='month_div' id='Month_"+full_year+"_"+i+"' rel='"+full_year+"'><div class='left'></div><div class='m_names' id='myMonth_"+i+"'>"+full_year+" - "+month[i]+"</div><div class='right'></div></div>");
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
							$("#Month_"+full_year+"_"+i).append("<span class='num_names' rel='"+month[i]+"_"+(n+1)+"' id='"+month[i]+"_"+(n+1)+"'>"+(n+1)+"</span>");
						
						}
						
				 }// Create months using this DIV
				 $(".month_div").hide();
				 $(".month_div[rel='"+(full_year+1)+"']").hide();
				 $(".calendar_month:last").show();
				 
				
		}// Next_Year Function End here
		 
		 
		 $(".left").click(function(){
				
				$(".calendar_month").hide();
				var p = $(this).parent().parent(".calendar_month").attr("id");
				$("#"+p).prev().show();
				var relP = $(this).parent().parent(".calendar_month").attr("rel");
				var current_month =$(".calendar_month[rel="+relP+"]").attr("rel")-1;
				if(current_month == -1)
				{
					//$(".calendar_month:last").show();
					prev_year();
				}
		});
		$(".right").click(function(){
				$(".calendar_month").hide();
				var p = $(this).parent().parent(".calendar_month").attr("id");
				$("#"+p).next().show();
				var relP = $(this).parent().parent(".calendar_month").attr("rel");
				var current_month =$(".calendar_month[rel="+relP+"]").attr("rel");
				 if(current_month == 11)
				{
					$(".calendar_month:first").show();
				}
		});
		
		 $("#Month_"+month_name).parent().addClass("month_active");
		 $(".calendar_month").hide();
		 $("#cMonth_"+month_name).show();
		 var cur_month = month[month_name];
		 $("#"+cur_month+"_"+date_num).addClass("active");
		 for(evt=0; evt<evt_dates.length; evt++)
		 {
				 var e_date = evt_dates[evt];
				 $("#"+cur_month+"_"+e_date).addClass("e_active");
		 }
		
		

	} // Calendar function ends here 
	
	/* Events list start from Here */
	$.fn.events_list = function(){
		var evt_heading = ["Birthdays", "Special Events", "Special Programes", "Recently Happenings", "Holidays", "Events"];
		var evt_content = ["<ul class='evt_ul'><li>This is First Content</li> <li>This is Second Content</li> <li>This is Third Content</li> </ul>", "Nov 18th Alliance Expression <br> Alliance Sports <br>Alliance Expression ", "Alliance Expressions<br>Alliance Expressions<br>Alliance Expressions", "Alliance New Logo Launched<br>Alliance New website Created<br> CEO Awards","Nov 7 Bakrid <br> Nov 24th Optional Holiday<br>Nov 7 Bakrid",	"Alliacne Expressions <br> Alliance Sports <br> Alliance Cultural Events"]
		for(i=0; i<evt_dates.length; i++)
		{
			$(".events_list").append("<div class='events' rel='rel_"+evt_dates[i]+"'><h1>"+evt_heading[i]+evt_dates[i]+"</h1><p class='evt_text'>"+evt_content[i]+"</p></div>");
		}
	
		$(".events:first").addClass("active").show();
		
		var s=setTimeout(myfun, 10000);
		function myfun(){
			var my_active = $(".events.active");
			var my_count = $(".events").length;
			$(".events").hide();
			var my_next = my_active?my_active.next().addClass("active").slideDown().show():$("event:last").show();
			my_active.removeClass("active");
			if(my_next.length == 0)
			{
				var  my_next = $(".events:first").addClass("active").show();
			}
			setTimeout(myfun, 10000);
		}
		$(".e_active").click(function(){
			var get_id = $(this).attr("id");	
			var split_id = get_id.split("_")[1];
			$(".events").removeClass("active").hide();
			$(".events[rel='rel_"+ split_id+"']").addClass("active").show();
			
			
		})
	}
})(jQuery);





