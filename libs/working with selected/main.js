// document.addEventListener('readystatechange',function(){
function func1(){
	// получаю индекс(номер) выбраной опции селекта
	var sel = document.getElementById('select').selectedIndex;	
	//получаем объект(колекцию) содержащий данные селекта 
	var options = document.getElementById('select').options;
	//вывожу в виде текста выбраную опцию селекта
	alert('Выбран элемент ' + options[sel].text);	
}
function getValueRange(){
	//получаю элемент Range
	var range = document.getElementById('r1');
	//получаю текстовое поле
	var p = document.getElementById('one');
	//получаю блок div
	var div = document.getElementById('block');
	//получаю элемент input
	var input = document.getElementById('text');
	//вывожу значение элемента Range в текстовое поле
	p.innerHTML = range.value;
	//изменяю длину блока div
	div.style.width = range.value + 'px';
	//изменяю значение элемента input
	input.value = range.value;
}