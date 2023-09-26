// Funciones de Orden Superior
// High Order Functions
// Funciones que reciben como parámetros más funciones

const myFunctionWithBigName = () => {
    console.log('Función Inicial');
}

console.log(myFunctionWithBigName);
myFunctionWithBigName();

const myFun = myFunctionWithBigName;
myFun();

const funOne = () => {
    console.log('Ejecuta Función Uno');
}

const funTwo = (nombre) => {
    console.log("Hello! " + nombre);
    console.log('Ejecuta Función Dos');
}
funOne();
funTwo('Edd');

const funThree = (otherFunction) => {
    console.log('Inicia Función tres');
    otherFunction();
    console.log('Termina Función tres');
}
funThree(funOne);
funThree(() => console.log('Función de Flecha'));