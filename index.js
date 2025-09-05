const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const symbolsAlphabets = [ "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbersAlphabets = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let firstValue = document.querySelector("#password-1")
let secondValue = document.querySelector("#password-2")
let btn = document.querySelector("#main-button")
let symbolCheckbox = document.querySelector("#toggle-symbol")
let numberCheckbox = document.querySelector("#toggle-number")
let output = document.querySelector("#output")
let passwordLength = 15


let passwordSlider = document.querySelector("#password-range")
passwordSlider.addEventListener("input",() =>{
    passwordLength = passwordSlider.value;
    output.textContent = passwordLength;
});


function getrandomPassword(arr){
    let initialString = ""
    for(let i = 0; i < passwordLength;i++){
        let randomIndex = Math.floor(Math.random()*arr.length)
        initialString += arr[randomIndex]
    }
    return initialString
}

function setValue(password1,password2){
    firstValue.value = password1
    secondValue.value = password2
}

function handleToggle(){
    let a = symbolCheckbox.checked
    let b = numberCheckbox.checked
    let password1 =""
    let password2 =""
    if(a && b){
        password1 = getrandomPassword(characters)
        password2 = getrandomPassword(characters)
        setValue(password1,password2)
        
    }
    else if(a && !b){
        password1 = getrandomPassword(symbolsAlphabets)
        password2 = getrandomPassword(symbolsAlphabets)
        setValue(password1,password2)
    }
    else if(b && !a){
        password1 = getrandomPassword(numbersAlphabets)
        password2 = getrandomPassword(numbersAlphabets)
        setValue(password1,password2)
    }
    else{
        password1 = getrandomPassword(alphabets)
        password2 = getrandomPassword(alphabets)
        setValue(password1,password2)
    }
}

function copyToClipboard(element){
    navigator.clipboard.writeText(element.value).then (() => {
    const originalText = element.value;
    element.value = "Copied";
    setTimeout(() => {
        element.value = originalText;
    },1000);
    }).catch(() => {
    alert("Failed to copy");
})
}

btn.addEventListener("click",() =>{
    handleToggle();
});

firstValue.addEventListener("click",() =>{
    copyToClipboard(firstValue);
});

secondValue.addEventListener("click",() =>{
    copyToClipboard(secondValue);
});