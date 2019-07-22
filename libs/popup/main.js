var popup = document.getElementsByClassName('popup')[0];
var popupText = document.getElementsByClassName('popupText')[0];
popup.onclick = function(){
	popupText.classList.toggle('show');
}