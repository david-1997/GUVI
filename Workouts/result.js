var r uns1=localStorage.getItem("runs1");
var wickets1=localStorage.getItem("wickets1");

var runs2=localStorage.getItem("runs2");
var wickets2=localStorage.getItem("wickets2");

var str_r1="Runs "+runs1;
var str_r2="Runs "+runs2;
var str_w1="Wickets "+wickets1;
var str_w2="Wickets "+wickets2;
str_res="";

var div=document.createElement("div");
document.body.appendChild(div);
div.id='div'

var tab=document.createElement("table");
div.appendChild(tab);
tab.id='tab'

var tr1=document.createElement("tr");
tab.appendChild(tr1);
tr1.id='tr1'
var td_t1=document.createElement("td");
tr1.appendChild(td_t1);
td_t1.id='td_t1'
td_t1.innerHTML="Team 1"

var td1_t2=document.createElement("td");
tr1.appendChild(td1_t2);
td1_t2.id='td1_t2'
td1_t2.innerHTML="Team 2"

var tr2=document.createElement("tr");
tab.appendChild(tr2);
tr2.id='tr2'

var td2_r1=document.createElement("td");
tr2.appendChild(td2_r1);
td2_r1.id='td2_r1'
td2_r1.innerHTML=str_r1

var td2_r2=document.createElement("td");
tr2.appendChild(td2_r2);
td2_r2.innerHTML=str_r2

var tr3=document.createElement("tr");
tab.appendChild(tr3);
tr3.id='tr3'

var td3_w1=document.createElement("td");
tr3.appendChild(td3_w1);
td3_w1.id='td3_w1'
td3_w1.innerHTML=str_w1

var td3_w2=document.createElement("td");
tr3.appendChild(td3_w2);
td3_w2.id='td3_w2'
td3_w2.innerHTML=str_w2

var tr4=document.createElement("tr");
tab.appendChild(tr4);
tr4.id='tr4'

if(runs1>runs2)
{
	str_res="Team 1 won";
}
else if(runs1<runs2)
{
	str_res="Team 2 won";
}
else
{
	str_res="Match tied";
}
var td4=document.createElement("td");
tr4.appendChild(td4);
td4.id='td4'
td4.id='td4'
td4.innerHTML=str_res;