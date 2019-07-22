//функция для проверки нажата ли чексбокс или нет
function funcOne(){
	var chbox;
	chbox = document.getElementById('on');
	if (chbox.checked) 
	{
		alert('Selected');
	}
	else
	{
		alert('Not selected');
	}
}
//функция для проверки какая из кнопок нажата
function checkRadio(){
	//получаю все радиокнопки по имени
	var radio = document.getElementsByName('r1');
	// пребираю массив с получеными элементами
	for (var i = 0; i < radio.length; i++) {
		if(radio[i].checked){
			//вывожу диалоговое окно с отмеченой радио-кнопкой
			alert('Выбрана ' + i + ' кнопка');
		}
	}
}