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
		//var evt_dates = ["1-11-2011", "2-11-2011",  "30-11-2011","1-12-2011", "2-12-2011", "28-12-2011"];	
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
		
			
}

// Defining the function here 
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
		
}// NEXT FUNCTION END HERE	

$(".last").click(function(){	 last();	});
$(".next").click(function(){  fast();	});
function last(){		prev();		}
function fast(){		Next();		}

$(".calendar_icon").click(function(){
	var get_left = $(this).offset().left;
	var get_top = $(this).offset().top
	//alert(get_left)
		$(".eve_cal").css({"left":(get_left-10)+"px", "top":(get_top+15)+"px"}).show();
		$(".eve_cal").hover(
			function(){ 
				$(this).show(); 
				
				}, 
			function(){ 
				$(this).hide(); 
		});
});
$(".num_names").live("click", function(){
		var get_date = $(this).attr("id")	
		var get_month = $(this).parent().attr("id")
		
		input_date = get_date.split("_")[2];
		input_month = parseInt(get_month.split("_")[2])+1;
			 input_year = get_date.split("_")[0];
			 //evt_month = month[evt_month_num-1];
		$(".date_val").val(input_date+" / "+ input_month +" / "+ input_year)
})


} // Calendar function ends here 
	

})(jQuery);





