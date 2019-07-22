var modal = document.getElementsByClassName("modal-window")[0];
var modalBtn = document.getElementsByClassName("modalBtn")[0];
var modalClose = document.getElementsByClassName("modal-close")[0];
modal.style.display = "none";
modalBtn.onclick = function(){
	modal.style.display = "block";
}
modalClose.onclick = function(){
	modal.style.display = "none";
}
window.onclick = function(event){
	if (event.target.className == "modal-content") {
		modal.style.display = "none";
	}
}