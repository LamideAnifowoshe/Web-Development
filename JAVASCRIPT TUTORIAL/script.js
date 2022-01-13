var firstName = "Lammy";
var gender;
console.log(gender);
console.log(firstName);

var lastName = "Anifowoshe";
var age = 24;
var fullAge = true;
console.log(fullAge);

/**********
 * Variable Mutation and Type Coerction
 */
var firstName = "Lammy";
var age = 24;
//Type coertion
console.log(firstName + " " + age);

var job, isMarried;
job = "Developer";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is she married? " +
    isMarried
);

//Variable Mutation
age = "twenty four";
job = "FrontEnd Web Developer";
alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is she married? " +
    isMarried
);

var lastName = prompt("what is her lastName?");
console.log(firstName + " " + lastName);

/*********************
 * Basic operators
 */
var year = 2021;
var ageLammy = 24;
var ageBlessing = 25;

var yearBlessing = year - ageBlessing;
console.log(yearBlessing);

var yearLammy = year - ageLammy;
console.log(yearLammy);

//Logical Operators
var lammyOlder = ageLammy > ageBlessing;
console.log(lammyOlder);

//*typeof operator
console.log(typeof lammyOlder);
console.log(typeof ageLammy);
var x;
console.log(typeof x);
console.log(typeof y);

/**************
 * Coding Challenge
 */
var lammyMass = 60;
var lammyHeight = 1.65;
var blessingMass = 65;
var blessingHeight = 1.7;

lammyBMI = lammyMass / (lammyHeight * lammyHeight);
console.log(lammyBMI);

blessingBMI = blessingMass / (blessingHeight * blessingHeight);
console.log(blessingBMI);

var lammyHigherBMI = lammyBMI > blessingBMI;
console.log("is lammy's BMI higher than blessings'?" + lammyHigherBMI);

/********************************************
 * If / else statement
 */
if (lammyBMI > blessingBMI) {
  console.log("Lammy's BMI is greater than Blessing's BMI");
} else {
  console.log("Blessing's BMI is greater than Lammy's BMI");
}

/*****************
 * Boolean logic
 */
var firstName = "Lammy";
var age = 24;

if (age < 13) {
  console.log(firstName + "is a girl.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + "is a teenager.");
} else {
  console.log(firstName + "is a lady.");
}

let x, y, z; // Statement 1
x = 5; // Statement 2
y = 6; // Statement 3
z = x + y; // Statement 4

document.getElementById("demo").innerHTML = "The value of z is " + z + ".";
