var img = document.getElementsByTagName('img');
var figcap = document.getElementsByTagName('figcaption');
var wrap = document.getElementsByClassName('modalImg')[0];
var modalImg = document.getElementById('img-content');
var close = document.getElementsByTagName('span')[0];

for (var i = 0; i < img.length; i++) {
	figcap[i].innerHTML = img[i].alt;	
}
modalImg.onclick = function(){
	wrap.style.display = "block";
}
close.onclick = function(){
	wrap.style.display = "none";
}





