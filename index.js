const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstValue = document.querySelector("#password-1")
let secondValue = document.querySelector("#password-2")
let passwordLength = 15

function getrandomPassword(){
    let initialString = ""
    for(let i = 0; i < passwordLength;i++){
        let randomIndex = Math.floor(Math.random()*characters.length)
        initialString += characters[randomIndex]
    }
    return initialString
}

firstValue.value = getrandomPassword()
secondValue.value = getrandomPassword() 