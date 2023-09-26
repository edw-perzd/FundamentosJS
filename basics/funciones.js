// Funciones en Javascript
/*
funtion nombre(params){
    body function
}
const nombre = function(params){
    body function
}
*/
// Funciones sin parámetros, y sin retorno
function saludo(){
    console.log('Helloooo!');
}
saludo();

// Funciones con parámetros sin retorno
const saludaA = function(name){
    console.log('Hola, ' + name);
}
saludaA('Benito Juárez');

// Funciones con parámetros y con retorno
const fact = function(num){
    if(num === 0){
        return 1;
    } 
    return fact(num - 1) * num;
}
const result = fact(5);
console.log(result);

// Arrow Functions o Funciones de flecha
// Sin parámetros y sin retorno
const saludaEnChino = () => { 
    console.log('Ni Hao');
}
saludaEnChino();

// con 1 parámetro sin retorno
const mayuscula = (word) => {
    console.log(word.toUpperCase());
}
mayuscula('hola');

const minuscula = word => {
    console.log(word.toLowerCase());
}
minuscula('HOLA');

// Dos o más parámetros y con retorno
const fullName = (firstName, lastName) => {
    return firstName + ' ' + lastName;
}
const nombreCompleto = fullName('Juan', 'De la barrera');
console.log(nombreCompleto);

// Si el return es la unica línea se puede simplificar
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble);

/*function duplica(num){
    return num * 2;
}*/

// Funciones con parámetros opcionales
const welcomeToMexico = (user = 'Invitado') => {
    console.log(`Bienvenido a México ${ user }`);
}

welcomeToMexico();
welcomeToMexico("Batman");

// Parámetros con nombre
const welcomeToUtt = (user = 'Invitado', city = 'México') => {
    console.log(`Bienvenido ${ user } de ${ city }.`)
}

welcomeToUtt();
welcomeToUtt('Bruce Wayne', 'Gotham');
welcomeToUtt(city = 'Metropolis', user = 'Superman');