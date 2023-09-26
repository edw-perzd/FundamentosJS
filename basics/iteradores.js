// Iteradores de Arrays
const fruits = ['apple', 'melon', 'orange', 'cherry'];

fruits.forEach(
    function(fruit){
        console.log(`Fruta ${ fruit }`)
    }
);
console.log('Arrow Function');
fruits.forEach(
    (fruit) => {
        console.log(`Fruta ${ fruit }`)
    }
);
console.log('Arrow Function Simplified');
fruits.forEach(fruit => console.log(`Fruta ${ fruit }`));

// map()
// regresa un array nuevo a partir del original
const fruitsMayus = fruits.map(
    fruit => {
        return fruit.toUpperCase();
    }
);
console.log('* '.repeat(20));
console.log(fruits);
console.log(fruitsMayus);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(numbers);
console.log(squares);

// filter()
// crea un array nuevo a partir de una condición
console.log('* '.repeat(15) + 'Filter');
const startstWhitA = fruits.filter(fruit => fruit.endsWith('e'));
console.log(fruits);
console.log(startstWhitA);

const pares = numbers.filter(num => num % 2 !== 0);
console.log(numbers);
console.log(pares);

// reduce()
// Retorna un único valor a partir del array original
const sumatoria = numbers.reduce((a, b) => a + b);
console.log(numbers);
console.log(sumatoria);

const factorial = numbers.reduce((a, b) => a * b);
console.log(numbers);
console.log(factorial);

// some()
// evalua cada elemento retorna true si al menos uno cumple una condición
console.log(numbers.some(num => num >= 5));
console.log(numbers.some(num => num > 6));

// every()
// regresa true si todos cumplen
console.log(numbers.every(num => num > 0));
console.log(numbers.every(num => num > 4));

console.log(fruits);
console.log(fruits.join(' - '));