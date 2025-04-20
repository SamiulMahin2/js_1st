// java script

// example 1
function seeDate(){
	document.getElementById('sd').innerHTML = Date();
}

// example 2
function seeText(){
	document.getElementById('st').innerHTML = "Minhaz vaiya is a great mentor";
}

// example 3
function changeDate(){
	document.getElementById('ct').innerHTML = "He is not only a great mentor but also very friendly with the students";
}

// example 4
function changeColour(){
	document.getElementById('cc').style.color = "red";
}

// example 5
function changeBgc(){
	document.getElementById('cbg').style.backgroundColor = "orange";
}

// example 6
function seePiBmw(){
	document.getElementById('image').src = "images/bmw.webp";
}
function seePicRangeRover(){
	document.getElementById('image').src = "images/range_rover.avif";
}

// example 7
function seePara(){
	document.getElementById('sht').style.display = "block";
}
function hidePara(){
	document.getElementById('sht').style.display = "none";
}

// example 8
function countHr(){
	var nhr=document.getElementsByTagName('hr');
	alert(nhr.length);
}

// example 9
function genH40(){
	document.getElementsByClassName('h4')[0].innerHTML = "One";
}
function genH41(){
	document.getElementsByClassName('h4')[1].innerHTML = "Two";
}
function genH42(){
	document.getElementsByClassName('h4')[2].innerHTML = "Three";
}
function genH43(){
	document.getElementsByClassName('h4')[3].innerHTML = "Four";
}

// example 10
function knowEmprs(){
	document.getElementById('ke').innerText = "😡";
}

// example 11
function knowMyEmprs(){
	document.getElementsByClassName('kme')[0].innerText = "ওপস! ধরা খেয়ে গেলাম🤐";
}

// example 12
function bigText(){
	document.getElementById('bt').style.fontSize = "40px";
}

// example 13
function countH2(){
	var ch2 = document.getElementsByTagName('h2');
	alert (ch2.length);
}

// example 14
function smallText(){
	document.getElementById('smt').style.fontSize = "20px";
}

// example 15

// example 16
function windowA(){
	alert(5+7);
}

// example 17 

// example 18
function greatA(){
	let x = "A" , y = "B" , result = x > y;
	document.getElementById('great').innerHTML = "The answer is " + result;
}