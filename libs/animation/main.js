//получаем область для вызова анимации
var myAnim = document.getElementById("myAnimation");
//при клике запустить анимацию
myAnim.onclick = function(){
	//получам двигаемый элемент
	var elem = document.getElementById("block");
	//задаем начальное значение координат
	var pos = 0;
	//запускаем повтор анимации каждые 10 мкс
	var id = setInterval(frame, 10)
	//функция выполняющая изменение координат анимируемого элемента
	function frame(){
		//если область для передвижения закончилась 
		//остановить анимацию
		if( pos == 350){
			clearInterval(id);
		}else{
			pos++;
			elem.style.top = pos +"px";
			elem.style.left = pos +"px";
		}

	}
}