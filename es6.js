const num = [1, 2, 10, 16];

const double = [];
const newArray = num.forEach((value) => {
    double.push(value * 2);
})

console.log(double);

//The map function

const mapArray = num.map(value => value * 2);
console.log(mapArray);

//The filter method in es6

const filterArray = num.filter(value => value > 5);
console.log(filterArray);

//The reduce function in es6

const reduceArray = num.reduce((accumulator, value) => {
    return accumulator + value;
}, 2);

console.log(reduceArray);