window.addEventListener("load",init);

function init(){
	if(typeof(Storage)!=="undefined"){

	display();

	var btn = document.getElementById("btn");
	btn.addEventListener("click", save);
  var btnTwo = document.getElementById("btn2");
  btnTwo.addEventListener("click", clear);
	}

	else{

	}
}

function clear(){
  let clearOne = document.getElementById("input1").value = 255;
  let clearTwo = document.getElementById("input2").value = 255;
  let clearThree = document.getElementById("input3").value = 255;
  document.getElementById("output").style.backgroundColor = "rgb(" + clearOne + "," + clearTwo + "," + clearThree + ")";

  document.getElementById("output").innerHTML="OUTPUT  <hr /><br /><br />Red: "
    +clearOne+"<br /><br />  Green: "
    +clearTwo+"<br /><br />  Blue: "
    +clearThree;
}

function save(){

  let inputOne = document.getElementById("input1").value;
  let inputTwo = document.getElementById("input2").value;
  let inputThree = document.getElementById("input3").value;

  if( (inputOne > 255 || inputOne < 0) || (inputTwo > 255 || inputTwo < 0) || (inputThree > 255 || inputThree < 0)){
    alert("Please enter a number between 0 and 255");
  }
  else {
  	localStorage.setItem("one",inputOne);
  	localStorage.setItem("two",inputTwo);
    localStorage.setItem("three",inputThree);

  	display();
  }
}

function display(){
	var dataOne = localStorage.getItem("one");
  var dataTwo = localStorage.getItem("two");
  var dataThree = localStorage.getItem("three");

	if(dataOne==undefined){
		document.getElementById("output").innerHTML="";
	}
	else{
    document.getElementById("output").innerHTML="OUTPUT  <hr /><br /><br />Red: "
      +dataOne+"<br /><br />  Green: "
      +dataTwo+"<br /><br />  Blue: "
      +dataThree;
    document.getElementById("output").style.backgroundColor = "rgb(" + dataOne + "," + dataTwo + "," + dataThree + ")";
	}
}
