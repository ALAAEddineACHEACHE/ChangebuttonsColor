var all_buttons=document.getElementsByTagName('button');
console.log(all_buttons);
var copyAllButtons = [];
for(let i=0;i<all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);
function buttonColorChange(buttonThingy){
    if(buttonThingy.value=== " red"){
        buttonsRed();
    }else if(buttonThingy.value==="green"){
        buttons.Green();
    }else if(buttonThingy.value==="reset"){
        buttonColor.reset();
    }else if(buttonThingy.value === "random"){
        randomColors();
    }
}
function buttonsRed(){
    for(let i=0;i<=all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i];
    }
}

