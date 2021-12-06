hideElement()
function generatePin() {
    var randomPin = Math.round(Math.random() * (9999 - 1000) + 1000)
    document.getElementById("pinView").value = randomPin
    document.getElementById("tryRemain").innerText="3 try left"
   
    hideElement()
}
function updateInput(num) { 
    var inputPin = document.getElementById("inputPInText").value
    if (num == "//") { inputPin = inputPin.slice(0, -1) }
    else if (num == "clr") { inputPin = "" }
    else { inputPin += num }
    document.getElementById("inputPInText").value= inputPin
}
function btn0() { updateInput(0) }
function btn1() { updateInput(1) }
function btn2() { updateInput(2) }
function btn3() { updateInput(3) }
function btn4() { updateInput(4) }
function btn5() { updateInput(5) }
function btn6() { updateInput(6) }
function btn7() { updateInput(7) }
function btn7() { updateInput(7) }
function btn8() { updateInput(8) }
function btn9() { updateInput(9) }
function btnClear() { updateInput("clr") }
function btnBackSpace() { updateInput("//") }
function pinMatch() {
    var randomPin = document.getElementById("pinView").value
    var inputPin = document.getElementById("inputPInText").value
    checkTry()
    if (parseInt(randomPin) == parseInt(inputPin)) { 
        document.getElementById("successToast").style.display = "block";
        document.getElementById("warningToast").style.display = "none";
        return
    }
    document.getElementById("successToast").style.display = "none";
    document.getElementById("warningToast").style.display = "block"; 
    
}
function hideElement() {
    document.getElementById("warningToast").style.display = "none";
    document.getElementById("successToast").style.display = "none";
}
function checkTry(){
    
    var tryRemain = parseInt(document.getElementById("tryRemain").innerText)
    console.log(tryRemain);
    if(tryRemain<=0){alert("0 try remain! Generate New Pin :)");return}
    tryRemain--
    document.getElementById("tryRemain").innerText=tryRemain+" try left"
    
}