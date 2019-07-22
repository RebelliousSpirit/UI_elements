var img = document.getElementsByTagName("img");
var figcap = document.getElementsByTagName("figcaption");
var openModal = document.getElementsByClassName("openModal");
var i;
for (var i = 0; i < openModal.length; i++) {
	openModal[i].onclick = function(){
		this.classList.toggle('modalImg');
	} 
}