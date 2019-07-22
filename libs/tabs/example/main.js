//объявляем глобальные переменные
var tab;
var tabContent;
//полсе загрузки окна 
window.onload=function(){
	//присваеваем им элементы
	tabContent = document.getElementsByClassName('tabContent');
	tab=document.getElementsByClassName('tab');
	//запускаем функция скрывающую контент табов 
	hideTabContent(1);
}

function hideTabContent(a){
	//перебираем все вкладки(контент табов)
	for (var i = a; i < tabContent.length; i++) {
		//удаляем класс который их показывает
		tabContent[i].classList.remove('show');
		//добавляем класс скрывающий их кроме первой вкладки
		tabContent[i].classList.add('hide');
		//удаляем границы у табов кроме первого
		tab[i].classList.remove('writetab');
	}
}

document.getElementById('tabs').onclick = function(event){
	var target = event.target;
	if(target.className == 'tab'){
		for (var i = 0; i < tab.length; i++) {
			if ( target == tab[i]) {
				showTabContent(i);
				break;
			}
		}
	}
}
function showTabContent(b){
	if (tabContent[b].classList.contains('hide')) {
		hideTabContent(0);
		tab[b].classList.add('writetab');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}


