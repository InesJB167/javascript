//condiçoes 

let age = 18

if(age <= 12){
    console.log("kid!")
}else if(age > 12 && age <=17){
    console.log("Teen")
}else{
    console.log("Adult")
}

//operadores ternários
let comida = "pera"
let frase = (comida == "pera") ? "Eu gosto de pera":"Eu odeio isso"
console.log(frase)

//switch

let text = 1
switch(text){
    case 1:
        text = "Hoje é domingo"
        break
    case 2:
        text = "Hoje é segunda"
        break
    default:
        text = "dia nao encontrado"
        break
}
console.log(text)

//for loop
const frutas = ["pera","goiaba","maçã"]
for (let i = 0 ;i <=7;i ++){
    console.log(i)
}