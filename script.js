//your JS code here. If required.
let one= document.getElementById("code-1");
let two= document.getElementById("code-2");
let three=document.getElementById("code-3");
let four=document.getElementById("code-4");
let five=document.getElementById("code-5");
let six=document.getElementById("code-6");

one.addEventListener("keyup",(event)=>{
	//after entering the first foucs should be 
	
		two.focus();
	
});


two.addEventListener("keyup", (event) => {
  // if backspace is pressed in the second, focus on the first
  if (event.key === "Backspace") {
    one.focus();
  } else {
    // after entering a value in the second, focus on the third
    three.focus();
  }
});


three.addEventListener("keyup", (event) => {
  // if backspace is pressed in the second, focus on the first
  if (event.key === "Backspace") {
    two.focus();
  } else {
    // after entering a value in the second, focus on the third
    four.focus();
  }
});

four.addEventListener("keyup", (event) => {
  // if backspace is pressed in the second, focus on the first
  if (event.key === "Backspace") {
    three.focus();
  } else {
    // after entering a value in the second, focus on the third
    five.focus();
  }
});

five.addEventListener("keyup", (event) => {
  // if backspace is pressed in the second, focus on the first
  if (event.key === "Backspace") {
    four.focus();
  } else {
    // after entering a value in the second, focus on the third
    six.focus();
  }
});

six.addEventListener("keyup", (event) => {
  // if backspace is pressed in the second, focus on the first
  if (event.key === "Backspace") {
    five.focus();
  } 
});