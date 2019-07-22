function myToogle(){
	var block = document.getElementById('myToggle');
	if(block.style.display === 'none'){
		block.style.display = 'block';
	}else{
		block.style.display = 'none';
	}
}
var closeAlert = document.getElementsByClassName('closeAlert');
for (var i = 0; i < closeAlert.length; i++) {
	closeAlert[i].onclick = function(){
		var div = this.parentElement;
		div.style.opacity = "0";
		setTimeout(function(){
			div.style.display = "none";
		},600);
	}
}



