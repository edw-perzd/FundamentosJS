// Condiciona If
// if(expresión){}
let age = 18;
if(age >= 18){
    console.log('Es mayor de edad');
}

// if(expresión){} else {}
if(age >= 18){
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

// if ternario (expresión)? true: flase;
(age >= 18)? console.log('Es mayor'): console.log('Es menor');

// if(expresión) else if(expresión) else {}
let ppt = Math.random();
if(ppt < 0.33){
    console.log('Cayó Piedra');
} else if(ppt < 0.66){
    console.log('Cayó Papel');
} else{
    console.log('Cayó Tijera');
}

// switch case
let day = Math.floor(Math.random() * 7);
switch(day){
    case 0:
        console.log('Es Domingo');
        break;
    case 1:
        console.log('Es Lunes');
        break;
    case 2:
        console.log('Es Martes');
        break;
    case 3:
        console.log('Es Miércoles');
        break;
    case 4:
        console.log('Es Jueves');
        break;
    case 5:
        console.log('Es Viernes');
        break;
    default:
        console.log('Es Sábado');
        break;
}

// Truty and Falsy
// '' == False
console.log('' == false);
// 'a' == True
console.log('a' === true);
// 0 == False
console.log(0 == false);
// 1 == True
console.log(1 == true);

let username = '';
let defaultName;

if(username){
    defaultName = username;
} else {
    defaultName = 'Extraño';
}
console.log(defaultName);

username = 'Peter'
defaultName = username || 'Extraño';
console.log(defaultName);