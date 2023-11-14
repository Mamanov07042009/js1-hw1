


let value = +prompt('твой год рождение')
let valuee = +prompt('Какой год сейчас')
let years = valuee - value
 

if (years < 30) {
    alert ('вы молодой')  ;
} else if (years < 60){
    alert ('кризис среднего возраста')
} else if (years > 60){
    alert ('вам посоветутся посетит доктора!')
}

//git init
//git add .