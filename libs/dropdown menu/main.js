//функция
//отслеживает событие "наведения мыши на элемент" и если класс этого 
// элемента 'menu-item' то показывает его подэлемент с классом 'submenu'
// и также запускает функцию  closemenu()
document.getElementById('nav').onmouseover = function(event){
	//получаем элемент на котором находится курсор мыши
	var target = event.target;
	//если у него класс 'menu-item'
	if (target.className == 'menu-item') {
		//получаем дочерний элемент с классом 'submenu'
		var s = target.getElementsByClassName('submenu');
		//скрываем все остальные элементы
		closemenu();
		//показываем его
		s[0].style.display = 'block';
	}
}
document.onmouseover = function(event){
	var target = event.target;
	if(target.className != 'menu-item' && target.className != 'submenu'){
		closemenu();
	}
}
function closemenu(){
	var smenu = document.getElementsByClassName('submenu');
	for (var i = 0; i < smenu.length; i++) {
		smenu[i].style.display = 'none';
	}
}