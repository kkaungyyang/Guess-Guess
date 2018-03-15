let color_R = 0; 
let color_G = 0; 
let color_B = 0; 
let correctPos = 0; 
$( document ).ready(function() { 
	fillRGB(); // fills RGB
	presentNumber(); // writes to the screen
	fillButtons(); // 


}); 

function generateColorNumber() { // generates a number from 0 - 255, a total of 256 colors
    var ret = Math.floor((Math.random() * 256)); 
    return ret;
}
function generateButtonNumber() { 
	correctPos = Math.floor((Math.random() * 8)); 
    return correctPos;
}
function fillButtons() {
  var pos = generateButtonNumber(); 
  console.log("this is the position of correct button"); 
  console.log(pos); 
}
function fillRGB() {
	color_R = generateColorNumber(); 
	color_B = generateColorNumber(); 
	color_G = generateColorNumber(); 
	console.log(color_R); 
	console.log(color_G); 
	console.log(color_B); 
}

function presentNumber() { 
	document.getElementById("color_R").innerHTML = color_R.toString(); 
	document.getElementById("color_G").innerHTML = color_G.toString(); 
	document.getElementById("color_B").innerHTML = color_B.toString(); 
}

fillButtons