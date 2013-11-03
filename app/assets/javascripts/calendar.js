<!--  script for calendar

var dDate = new Date();
var dCurMonth = dDate.getMonth();
var dCurDayOfMonth = dDate.getDate();
var dCurYear = dDate.getFullYear();
var objPrevElement = new Object();

function fToggleColor(myElement) {
	var toggleColor = "#ff0000";
        var togglebgcolor = "#feb8c6";
	if (myElement.id == "calDateText") {
		if (myElement.color == toggleColor) {
			myElement.color = "";
                        myElement.bgColor = "";
		} else {
			myElement.color = toggleColor;
                        myElement.bgColor = togglebgcolor;
   		}
	} else if (myElement.id == "calCell") {
		for (var i in myElement.children) {
		  if (myElement.children[i].id == "calDateText") {
			if (myElement.children[i].color == toggleColor) {
			    myElement.children[i].color = "";
                            myElement.children[i].bgColor = "";
			} else {
				myElement.children[i].color = toggleColor;
                                myElement.children[i].bgColor = togglebgcolor;
            		}
         	  }
                }
        }
}
function fSetSelectedDay(myElement){

     if (myElement.id == "calCell") {

          
	     var tempd = document.getElementById('tblSeltime');
             var selvalue = tempd.options[tempd.selectedIndex].value;                   
           if(document.getElementById('apptdesc').value != "") {
              if(!isNaN(parseInt(myElement.innerText.substr(0,1)))) {  
		   myElement.innerText += " " + selvalue + " " + document.getElementById('apptdesc').value  ;
            
                 myElement.bgColor = "#c0c0c0";
                 objPrevElement.bgColor = "";
                 objPrevElement = myElement;
              }
          }
    
   }
}

function fGetDaysInMonth(iMonth, iYear) {
    var dPrevDate = new Date(iYear, iMonth, 0);
    return dPrevDate.getDate();
}

function fBuildCal(iYear, iMonth, iDayStyle) {
     var aMonth = new Array();
     for (var i=0;i<7;i++)
     	aMonth[i] = new Array(7);
    var dCalDate = new Date(iYear, iMonth-1, 1);
    var iDayOfFirst = dCalDate.getDay();
    var iDaysInMonth = fGetDaysInMonth(iMonth, iYear);
    var iVarDate = 1;
    var i, d, w;
    if (iDayStyle == 2) {
    aMonth[0][0] = "Sunday";
    aMonth[0][1] = "Monday";
    aMonth[0][2] = "Tuesday";
    aMonth[0][3] = "Wednesday";
    aMonth[0][4] = "Thursday";
    aMonth[0][5] = "Friday";
    aMonth[0][6] = "Saturday";
   } else if (iDayStyle == 1) {
    aMonth[0][0] = "Sun";
    aMonth[0][1] = "Mon";
    aMonth[0][2] = "Tue";
    aMonth[0][3] = "Wed";
    aMonth[0][4] = "Thu";
    aMonth[0][5] = "Fri";
    aMonth[0][6] = "Sat";
  } else {
    aMonth[0][0] = "Su";
    aMonth[0][1] = "Mo";
    aMonth[0][2] = "Tu";
    aMonth[0][3] = "We";
    aMonth[0][4] = "Th";
    aMonth[0][5] = "Fr";
    aMonth[0][6] = "Sa";
  } 

for (d = iDayOfFirst; d < 7; d++) {
     aMonth[1][d] = iVarDate;
     iVarDate++;
  }
  for (w = 2; w < 7; w++) {
     for (d = 0; d < 7; d++) {
       if (iVarDate <= iDaysInMonth) {
         aMonth[w][d] = iVarDate;
         iVarDate++;
       }
     }
  } 
  return aMonth;
}

function fDrawCal(iYear, iMonth, iCellWidth, iCellHeight, sDateTextSize, sDateTextWeight, iDayStyle) {
var myMonth;

   
myMonth = fBuildCal(iYear, iMonth, iDayStyle);

document.write("<table class='calendar' id='caltbl'  border='1'>")
document.write("<br><br><thead><tr>");

document.write("<td>" +  myMonth[0][0] + "</td>");
document.write("<td>" +  myMonth[0][1] + "</td>");
document.write("<td>" +  myMonth[0][2] + "</td>");
document.write("<td>" +  myMonth[0][3] + "</td>");
document.write("<td>" +  myMonth[0][4] + "</td>");
document.write("<td>" + myMonth[0][5] + "</td>");
document.write("<td>" + myMonth[0][6] + "</td>");
document.write("</thead></tr>");
for (w = 1; w < 6; w++) {
    document.write("<tr>")
    for (d = 0; d < 7; d++) {
        document.write("<td align='left' valign='top' width='" + iCellWidth + "' height='" + iCellHeight + "' id=calCell style='CURSOR:Hand' onMouseOver='fToggleColor(this)' onMouseOut='fToggleColor(this)' onclick=fSetSelectedDay(this)>");
        if (!isNaN(myMonth[w][d])) {
            document.write("<font id=calDateText onMouseOver='fToggleColor(this)' style='CURSOR:Hand;FONT-FAMILY:Arial;FONT-SIZE:" + sDateTextSize + ";FONT-WEIGHT:" + sDateTextWeight + "' onMouseOut='fToggleColor(this)' onclick=fSetSelectedDay(this)>" + myMonth[w][d] + "</font>");
      
        } else {
          document.write("<font id=calDateText onMouseOver='fToggleColor(this)' style='CURSOR:Hand;FONT-FAMILY:Arial;FONT-SIZE:" + sDateTextSize + ";FONT-WEIGHT:" + sDateTextWeight + "' onMouseOut='fToggleColor(this)' onclick=fSetSelectedDay(this)>  </font>");
        }      
        document.write("</td>")
    }

    document.write("</tr>");
}
   document.write("</table>")
}

function fUpdateCal(iYear, iMonth) {
    document.getElementById('calDateval').value = getMName(iMonth, iYear); 
 dDate = new Date(iYear,iMonth,1);
 dCurMonth = dDate.getMonth();
 dCurDayOfMonth = dDate.getDate();
 dCurYear = dDate.getFullYear();
    
myMonth = fBuildCal(iYear, iMonth + 1);
   
    objPrevElement.bgColor = "";
  
var tblcell=document.getElementById("caltbl");
var nrow = tblcell.rows.length;
   for (w=1; w < 6; w++){      
      for (d = 0; d < 7; d++) {
               
         if (!isNaN(myMonth[w][d])) {
	    
         
	    tblcell.rows[w].cells[d].innerText =  myMonth[w][d];
          
     
 
         } else {
            
             tblcell.rows[w].cells[d].innerText=  " ";
            
             
         }
       }  
    } 
}

function getMName(iMonth, iYear){
    mname = new Array();
    mname[0] = "January";
    mname[1] = "February";
    mname[2] = "March";
    mname[3] = "April";
    mname[4] = "May";
    mname[5] = "June";
    mname[6] = "July";
    mname[7] = "August";
    mname[8] = "September";
    mname[9] = "October";
    mname[10] = "November";
    mname[11] = "December";
   if(iMonth<0){
      return mname[11] + " " + (iYear-1);
   } else {
        if (iMonth>11){
           return mname[0] + " " + (iYear+1);
        } else {
           return mname[iMonth] + " " + iYear;
        }
    } 
}
// end script for calendar -->
