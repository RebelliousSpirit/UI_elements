function fun1(){
	var trr = document.getElementById('trr').value;
	var tlr = document.getElementById('tlr').value;
	var brr = document.getElementById('brr').value;
	var blr = document.getElementById('blr').value;
	var trv = document.getElementById('trv').value;
	var tlv = document.getElementById('tlv').value;
	var brv = document.getElementById('brv').value;
	var blv = document.getElementById('blv').value;
	var block = document.getElementById('block');
	block.style.borderRadius = trr+'px '+tlr+'px '+blr+'px '+brr+'px'; 
	trv.value = trr;
	tlv.value = tlr;
	brv.value = brr;
	blv.value = blr;

	
}