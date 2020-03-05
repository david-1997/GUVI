var runs1=localStorage.getItem("runs1");
var wickets1=localStorage.getItem("wickets1");
var scores1=localStorage.getItem("scores1");

var runs2=localStorage.getItem("runs2");
var wickets2=localStorage.getItem("wickets2");
var scores2=localStorage.getItem("scores2");

var str_r1="Runs "+runs1;
var str_r2="Runs "+runs2;
var str_w1="Wickets "+wickets1;
var str_w2="Wickets "+wickets2;
str_res="";

var div_a=document.createElement("div");
document.body.appendChild(div_a);
div_a.id='div_a'

var tab_a=document.createElement("table");
div_a.appendChild(tab_a);
tab_a.id='tab_a'

var tra1=document.createElement("tr");
tab_a.appendChild(tra1);
tra1.id='tra1'

var td_a1=document.createElement("td");
tra1.appendChild(td_a1);
td_a1.id='td_a1'
td_a1.innerHTML="Player 1"

var td_a2=document.createElement("td");
tra1.appendChild(td_a2);
td_a2.id='td_a2'
td_a2.innerHTML=scores1[0];

var tra2=document.createElement("tr");
tab_a.appendChild(tra2);
tra2.id='tra2'

var td_a3=document.createElement("td");
tra2.appendChild(td_a3);
td_a3.id='td_a3'
td_a3.innerHTML="Player 2"

var td_a4=document.createElement("td");
tra2.appendChild(td_a4);
td_a4.id='td_a4'
td_a4.innerHTML=scores1[1];

var tra3=document.createElement("tr");
tab_a.appendChild(tra3);
tra3.id='tra3'

var td_a5=document.createElement("td");
tra3.appendChild(td_a5);
td_a5.id='td_a5'
td_a5.innerHTML="Player 3"

var td_a6=document.createElement("td");
tra3.appendChild(td_a6);
td_a6.id='td_a6'
td_a6.innerHTML=scores1[2];

var tra4=document.createElement("tr");
tab_a.appendChild(tra4);
tra4.id='tra4'

var td_a7=document.createElement("td");
tra4.appendChild(td_a7);
td_a7.id='td_a7'
td_a7.innerHTML="Player 4"

var td_a8=document.createElement("td");
tra4.appendChild(td_a8);
td_a8.id='td_a8'
td_a8.innerHTML=scores1[3];

var tra5=document.createElement("tr");
tab_a.appendChild(tra5);
tra5.id='tra5'

var td_a9=document.createElement("td");
tra5.appendChild(td_a9);
td_a9.id='td_a9'
td_a9.innerHTML="Player 5"

var td_a10=document.createElement("td");
tra5.appendChild(td_a10);
td_a10.id='td_a10'
td_a10.innerHTML=scores1[4];

var tra6=document.createElement("tr");
tab_a.appendChild(tra6);
tra6.id='tra6'

var td_a11=document.createElement("td");
tra6.appendChild(td_a11);
td_a11.id='td_a11'
td_a11.innerHTML="Player 6"

var td_a12=document.createElement("td");
tra6.appendChild(td_a12);
td_a12.id='td_a12'
td_a12.innerHTML=scores1[5];

var tra7=document.createElement("tr");
tab_a.appendChild(tra7);
tra7.id='tra7'

var td_a13=document.createElement("td");
tra7.appendChild(td_a13);
td_a13.id='td_a13'
td_a13.innerHTML="Player 7"

var td_a14=document.createElement("td");
tra7.appendChild(td_a14);
td_a14.id='td_a14'
td_a14.innerHTML=scores1[6];

var tra8=document.createElement("tr");
tab_a.appendChild(tra8);
tra8.id='tra8'

var td_a15=document.createElement("td");
tra8.appendChild(td_a15);
td_a15.id='td_a15'
td_a15.innerHTML="Player 8"

var td_a16=document.createElement("td");
tra8.appendChild(td_a16);
td_a16.id='td_a16'
td_a16.innerHTML=scores1[7];

var tra9=document.createElement("tr");
tab_a.appendChild(tra9);
tra9.id='tra9'

var td_a17=document.createElement("td");
tra9.appendChild(td_a17);
td_a17.id='td_a17'
td_a17.innerHTML="Player 9"

var td_a18=document.createElement("td");
tra9.appendChild(td_a18);
td_a18.id='td_a18'
td_a18.innerHTML=scores1[8];

var tra10=document.createElement("tr");
tab_a.appendChild(tra10);
tra10.id='tra10'

var td_a19=document.createElement("td");
tra10.appendChild(td_a19);
td_a19.id='td_a19'
td_a19.innerHTML="Player 10"

var td_a20=document.createElement("td");
tra10.appendChild(td_a20);
td_a20.id='td_a20'
td_a20.innerHTML=scores1[9];

var tra11=document.createElement("tr");
tab_a.appendChild(tra11);
tra11.id='tra11'

var td_a21=document.createElement("td");
tra11.appendChild(td_a21);
td_a21.id='td_a21'
td_a21.innerHTML="Player 11"

var td_a22=document.createElement("td");
tra11.appendChild(td_a22);
td_a22.id='td_a22'
td_a22.innerHTML=scores1[10];

var div_b=document.createElement("div");
document.body.appendChild(div_b);
div_b.id='div_b'

var tab_b=document.createElement("table");
div_b.appendChild(tab_b);
tab_b.id='tab_b'

var trb1=document.createElement("tr");
tab_b.appendChild(trb1);
trb1.id='trb1'

var td_b1=document.createElement("td");
trb1.appendChild(td_b1);
td_b1.id='td_b1'
td_b1.innerHTML="Player 1"

var td_b2=document.createElement("td");
trb1.appendChild(td_b2);
td_b2.id='td_b2'
td_b2.innerHTML=scores2[0];

var trb2=document.createElement("tr");
tab_b.appendChild(trb2);
trb2.id='trb2'

var td_b3=document.createElement("td");
trb2.appendChild(td_b3);
td_b3.id='td_b3'
td_b3.innerHTML="Player 2"

var td_b4=document.createElement("td");
trb2.appendChild(td_b4);
td_b4.id='td_b4'
td_b4.innerHTML=scores2[1];

var trb3=document.createElement("tr");
tab_b.appendChild(trb3);
trb3.id='trb3'

var td_b5=document.createElement("td");
trb3.appendChild(td_b5);
td_b5.id='td_b5'
td_b5.innerHTML="Player 3"

var td_b6=document.createElement("td");
trb3.appendChild(td_b6);
td_b6.id='td_b6'
td_b6.innerHTML=scores2[2];

var trb4=document.createElement("tr");
tab_b.appendChild(trb4);
trb4.id='trb4'

var td_b7=document.createElement("td");
trb4.appendChild(td_b7);
td_b7.id='td_b7'
td_b7.innerHTML="Player 4"

var td_b8=document.createElement("td");
trb4.appendChild(td_b8);
td_b8.id='td_b8'
td_b8.innerHTML=scores2[3];

var trb5=document.createElement("tr");
tab_b.appendChild(trb5);
trb5.id='trb5'

var td_b9=document.createElement("td");
trb5.appendChild(td_b9);
td_b9.id='td_b9'
td_b9.innerHTML="Player 5"

var td_b10=document.createElement("td");
trb5.appendChild(td_b10);
td_b10.id='td_b10'
td_b10.innerHTML=scores2[4];

var trb6=document.createElement("tr");
tab_b.appendChild(trb6);
trb6.id='trb6'

var td_b11=document.createElement("td");
trb6.appendChild(td_b11);
td_b11.id='td_b11'
td_b11.innerHTML="Player 6"

var td_b12=document.createElement("td");
trb6.appendChild(td_b12);
td_b12.id='td_b12'
td_b12.innerHTML=scores2[5];

var trb7=document.createElement("tr");
tab_b.appendChild(trb7);
trb7.id='trb7'

var td_b13=document.createElement("td");
trb7.appendChild(td_b13);
td_b13.id='td_b13'
td_b13.innerHTML="Player 7"

var td_b14=document.createElement("td");
trb7.appendChild(td_b14);
td_b14.id='td_b14'
td_b14.innerHTML=scores2[6];

var trb8=document.createElement("tr");
tab_b.appendChild(trb8);
trb8.id='trb8'

var td_b15=document.createElement("td");
trb8.appendChild(td_b15);
td_b15.id='td_b15'
td_b15.innerHTML="Player 8"

var td_b16=document.createElement("td");
trb8.appendChild(td_b16);
td_b16.id='td_b16'
td_b16.innerHTML=scores2[7];

var trb9=document.createElement("tr");
tab_b.appendChild(trb9);
trb9.id='trb9'

var td_b17=document.createElement("td");
trb9.appendChild(td_b17);
td_b17.id='td_b17'
td_b17.innerHTML="Player 9"

var td_b18=document.createElement("td");
trb9.appendChild(td_b18);
td_b18.id='td_b18'
td_b18.innerHTML=scores2[8];

var trb10=document.createElement("tr");
tab_b.appendChild(trb10);
trb10.id='trb10'

var td_b19=document.createElement("td");
trb10.appendChild(td_b19);
td_b19.id='td_b19'
td_b19.innerHTML="Player 10"

var td_b20=document.createElement("td");
trb10.appendChild(td_b20);
td_b20.id='td_b20'
td_b20.innerHTML=scores2[9];

var trb11=document.createElement("tr");
tab_b.appendChild(trb11);
trb11.id='trb11'

var td_b21=document.createElement("td");
trb11.appendChild(td_b21);
td_b21.id='td_b21'
td_b21.innerHTML="Player 11"

var td_b22=document.createElement("td");
trb11.appendChild(td_b22);
td_b22.id='td_b22'
td_b22.innerHTML=scores2[10];

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