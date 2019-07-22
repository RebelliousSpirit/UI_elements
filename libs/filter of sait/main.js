//функция производит фильтрацию и выдает совпадения с указыными 
//в списке именами
function myFunc(){
	//создаем переменные
	var input, filter, ul , li ,a ,i;
	//получаем инпут
	input = document.getElementsByClassName('my-name')[0];
	//получаем вводимое значение в инпут
	filter = input.value.toUpperCase();
	//получаем список имен
	ul = document.getElementsByClassName('my-filter')[0];
	//получаем каждый пункт списка в виде массива
	li = ul.getElementsByTagName('li');
	//проводим фильтрацию
	for (var i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName('a')[0];
		//сначало убираем весь список
		//если есть совпадение
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			//это имя оставляем видимым
			li[i].style.display = "block";
			ul.style.display = "block";
		}else{
			//если не совпадает со списком убираем имена
			li[i].style.display = "none";
		}
	}
}