(function() { 
b=[];
c=[];

for(i=0;i<a.length;i++){
	if(i%2==0){
	b.push(i);
	}
	else{
	c.push(i);
	}
}
console.log(c);
})(a=[1,2,3,4,5,6,7,8,9,10,11,12,13]);