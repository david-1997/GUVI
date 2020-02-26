var div = document.createElement("div");
document.body.appendChild(div);
div.id='div1' 
var imgs = ["D:/JS/Images/img1.png","D:/JS/Images/img2.png","D:/JS/Images/img3.jpg","D:/JS/Images/img4.jpg","D:/JS/Images/img5.png","D:/JS/Images/img6.jpg"]; 
var img = document.createElement('img');
div.appendChild(img);
var i=0
img.src =imgs[0];
img.id='img1'
document.getElementById("img1").onmouseover = function(){mouseOver()};
function mouseOver() {
i=i+1;
i=i%imgs.length;
document.getElementById("img1").src =imgs[i];
}

