/* function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('ever')); */

//Arrow Function
/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement =  65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1993));

const yearsUntilCar = birthYear =>{
    const age = 2020 - birthYear;
    const car = 35 - age;
    return car;
}

console.log(yearsUntilCar(1993));

const monthsUntilDeveloperFullStack = birthYear =>{
    const age = 2020 - birthYear;
    const month = age*12;
    const developerFullStack = month + 11;
    return developerFullStack; 
}

console.log(monthsUntilDeveloperFullStack(1993)); */

/* function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
} */




/* function cutMeat (sandwichType){
    return sandwichType * 2;
}



function sandwichOfEgg (bread, egg){

    const pieceBread = cutMeat (bread);
    const pieceEgg = cutMeat (egg);

    const sandwich = `The sandwichs of egg the I eat wear ${pieceBread} pieces of bread and ${pieceEgg} pieces of egg`;
    return sandwich;
}

console.log(sandwichOfEgg(4,4))  */

//Conding Challenge #1

/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1993);
console.log(age3); */

/* Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins */



/* const calcAverage = (a, b, c) => (a, b, c)/3;


const avgDolphins = calcAverage(85,54,41);
const avgKoalas = calcAverage(23,34,27);


function checkWinner (avgDolhins, avgKoalas){
    if (avgDolhins>=avgKoalas*2){
        const winner = `The Dolhins win ( ${avgDolhins} vs. ${avgKoalas})`; 
        return winner;
    } else if (avgKoalas>=avgDolhins*2){
        const winner = `The Koalas win ( ${avgKoalas} vs. ${avgDolhins})`; 
        return winner;
    } else {
        const winner = `Any team win` ;
        return winner;
    }
}

console.log(checkWinner(avgDolphins,avgKoalas)); */


/* const cuerdaNumber = [1,2,3,4,5,5];
console.log(cuerdaNumber[cuerdaNumber.length-1]);
console.log(cuerdaNumber[cuerdaNumber.length-3]);
console.log(cuerdaNumber.length)
 */

/* const fruits = ['Apple', 'Orange', 'Banana'];
fruits.push('Strawberry')

console.log(fruits);

fruits.unshift('Ever')
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits.indexOf('Apple'));
console.log(fruits.indexOf('rever'));

const prueba1= fruits.includes('Appleeve')
console.log(fruits.includes('Apple'));
console.log(prueba1); */
/* const tips = [];


function caclTip (bill) {
        
    
    if(bill>=50 && 300>=bill){
        let tip= bill*0.15; 
        console.log(`Tu propina es de ${tip}`);
        tips.push(tip);
        return tip;
    }else{
        let tip=bill*0.2;
        console.log(`Tu propina es de ${tip}`);
        tips.push(tip);
        return tip;
    }
    
    
}
 */

/* 
 const calcTip = function(bill) {
     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2;
 }

 const bills = [123,235,456];
 const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
 const total = [bills[0] + tips[0], bills[1] + tips[1],bills[2] + tips[2] ];

 console.log(bills, tips, total) */

 /* let birthDay = 0;
 const ages = function(age){
     return age>=18 && age<=65? birthDay= 2020-age : `I dont show you birthday` ;
 }

 const totalAges = [84, 23, 23];
 const tips = [ages(totalAges[0]),ages(totalAges[1]),ages(totalAges[2])];
 
 console.log(totalAges, tips);  */

/* const ever = {
    name: 'Ever',
    age: 27,
    job: 'developer',
    dream:  'Full Stack',
    family: ['Ever', 'Lea', 'Chrirs', 'Jean']
}
 */
/* console.log(ever);

console.log(ever.family);

console.log(ever['family']);

const namekey = 'e';
console.log(ever['nam' + namekey ]);
console.log(ever['ag' + namekey ]);




const solicitud = prompt('What do you want to know about Ever? Choose betwen name, age, job, dream and family ');

console.log(ever[solicitud]);

ever.size = 1.65; */

const ever = {
    name: 'Ever',
    age: 27,
    job: 'developer',
    dream:  'Full Stack',
    family: ['Ever', 'Lea', 'Chris', 'Jean'],
    hasLicense: true,
    calcExperience: function (){
        this.experience =`Ever has ${this.age- 25} years old experience and he has la driver's license ${this.hasLicense}`; 
        return this.experience;
    }
};
console.log(ever.calcExperience());
console.log(ever.experience);
console.log(ever);

