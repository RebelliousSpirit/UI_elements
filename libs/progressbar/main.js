var myProgress = document.getElementById('myProgress');
myProgress.onclick = function(){		
	var elem = document.getElementById('bar');
	var width = 10;
	var id = setInterval(frame, 100);
	function frame(){
		if (width>=100) {
			clearInterval(id);
		} else {
			width++;
			elem.style.width = width + '%';
			document.getElementById('label').innerHTML = width*1 +'%';
		}
	}
}

