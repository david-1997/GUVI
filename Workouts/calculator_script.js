class Calc
{
constructor(a,b)
{
this.a=a;
this.b=b;
this.res='';
}
setres(char)
{
this.char=char;
this.res=this.res+this.char;
div1.textContent=this.res;
}
empty()
{
div1.textContent='0';
}
result()
{
this.a=parseInt(this.res.charAt(0));
this.op=this.res.charAt(1);
this.b=parseInt(this.res.charAt(2));
if(this.op=='+')
{
	this.ans=this.a+this.b
}
else if(this.op=='-')
{
	this.ans=this.a-this.b
}
else if(this.op=='*')
{
	this.ans=this.a*this.b
}
else if(this.op=='/')
{
	this.ans=this.a/this.b
}
div1.textContent=this.ans.toString();
}
empty()
{
div1.textContent=0;
this.res="";
}
}
var cal=new Calc()
var div1=document.createElement("div");
document.body.appendChild(div1);
div1.id='div1'
div1.textContent='0';
var div2=document.createElement("div");
document.body.appendChild(div2);
div2.id='div2'
var tab=document.createElement("table");
div2.appendChild(tab);
tab.id='tab'
var tr1=document.createElement("tr");
tab.appendChild(tr1);
tr1.id='tr1'
var td1_1=document.createElement("td");
tr1.appendChild(td1_1);
td1_1.id='td1_1'
var b1 = document.createElement('button');
td1_1.appendChild(b1);
b1.innerHTML = '1';
b1.onclick = function(){cal.setres('1')};
var td1_2=document.createElement("td");
tr1.appendChild(td1_2);
td1_2.id='td1_2'
var b2 = document.createElement('button');
td1_2.appendChild(b2);
b2.innerHTML = '2';
b2.onclick = function(){cal.setres('2')};
var td1_3=document.createElement("td");
tr1.appendChild(td1_3);
td1_3.id='td1_3'
var b3 = document.createElement('button');
td1_3.appendChild(b3);
b3.innerHTML = '3';
b3.onclick = function(){cal.setres('3')};
var td1_add=document.createElement("td");
tr1.appendChild(td1_add);
td1_add.id='td1_add'
var b_add = document.createElement('button');
td1_add.appendChild(b_add);
b_add.innerHTML = '+';
b_add.onclick = function(){cal.setres('+')};
var tr2=document.createElement("tr");
tab.appendChild(tr2);
tr2.id='tr2'
var td2_4=document.createElement("td");
tr2.appendChild(td2_4);
td2_4.id='td2_4'
var b4 = document.createElement('button');
td2_4.appendChild(b4);
b4.innerHTML = '4';
b4.onclick = function(){cal.setres('4')};
var td2_5=document.createElement("td");
tr2.appendChild(td2_5);
td2_5.id='td2_5'
var b5=document.createElement('button');
td2_5.appendChild(b5);
b5.innerHTML = '5';
b5.onclick = function(){cal.setres('5')};
var td2_6=document.createElement("td");
tr2.appendChild(td2_6);
td2_6.id='td2_6'
var b6=document.createElement('button');
td2_6.appendChild(b6);
b6.innerHTML='6';
b6.onclick = function(){cal.setres('6')};
var td2_sub=document.createElement("td");
tr2.appendChild(td2_sub);
td2_sub.id='td2_sub'
var b_sub = document.createElement('button');
td2_sub.appendChild(b_sub);
b_sub.innerHTML = '-';
b_sub.onclick = function(){cal.setres('-')};
var tr3=document.createElement("tr");
tab.appendChild(tr3);
tr3.id='tr3'
var td3_7=document.createElement("td");
tr3.appendChild(td3_7);
td3_7.id='td3_7'
var b7=document.createElement('button');
td3_7.appendChild(b7);
b7.innerHTML='7';
b7.onclick = function(){cal.setres('7')};
var td3_8=document.createElement("td");
tr3.appendChild(td3_8);
td3_8.id='td3_8'
var b8=document.createElement('button');
td3_8.appendChild(b8);
b8.innerHTML = '8';
b8.onclick = function(){cal.setres('8')};
var td3_9=document.createElement("td");
tr3.appendChild(td3_9);
td3_9.id='td3_9'
var b9=document.createElement('button');
td3_9.appendChild(b9);
b9.innerHTML='9';
b9.onclick = function(){cal.setres('9')};
var td3_mul=document.createElement("td");
tr3.appendChild(td3_mul);
td3_mul.id='td3_mul'
var b_mul = document.createElement('button');
td3_mul.appendChild(b_mul);
b_mul.innerHTML = '*';
b_mul.onclick = function(){cal.setres('*')};
var tr4=document.createElement("tr");
tab.appendChild(tr4);
tr4.id='tr4'
var td4_c=document.createElement("td");
tr4.appendChild(td4_c);
td4_c.id='td4_c'
var bc=document.createElement('button');
td4_c.appendChild(bc);
bc.innerHTML='C';
bc.onclick = function(){cal.empty()};
var td4_0=document.createElement("td");
tr4.appendChild(td4_0);
td4_0.id='td4_0'
var b0=document.createElement('button');
td4_0.appendChild(b0);
b0.innerHTML = '0';
b0.onclick = function(){cal.setres('0')};
var td4_eq=document.createElement("td");
tr4.appendChild(td4_eq);
td4_eq.id='td4_eq'
var b_eq=document.createElement('button');
td4_eq.appendChild(b_eq);
b_eq.innerHTML='=';
b_eq.onclick = function(){cal.result()};
var td4_div=document.createElement("td");
tr4.appendChild(td4_div);
td4_div.id='td_div'
var b_div=document.createElement('button');
td4_div.appendChild(b_div);
b_div.innerHTML = '/';
b_div.onclick = function(){cal.setres('/')};