(function () {
b=[];
 for (i=2;i<=20;i++){
	 var a = true;
	 for(j=2;j<i;j++){
		 if(i%j==0 && i!=j){
			 var a = false;
		 }
	 }
	 if(a == true){
		 b.push(i);
	 }
	 
 }
 console.log(b);
})()