// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log (`sum of four numbers is 50: ${isSum50}.`)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log (`At least two of the numbers are odd: ${isTwoOdd}.`)

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25; 
console.log (`No number is over 25: ${isOver25}.`)

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;


// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`)

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

console.log('=========Part 1=========')

console.log(n1 % 5===0)
console.log(n2 % 5===0)
console.log(n3 % 5===0)
console.log(n4 % 5===0)

//==========================

console.log(n1 > n2)
console.log(n2 > n3)
console.log(n3 > n4)

//==========================

console.log(((n2 - n1)*n3)%n4)
 
//==========================

const isUnder25 = n1 <= 25 || n2 <= 25 || n3 < 25 || n4 < 25;
console.log(isUnder25)

console.log('=========Part 2=========')

const totalDistance = 1500;
const budget = 175
const fuelCost = 3

const mph1 = 55
const mph2 = 60
const mph3 = 75

const mph1Fuel = 30
const mph2Fuel = 28
const mph3Fuel =23

//How many gallons of fuel will you need for the entire trip?

console.log('How many gallons of fuel')
console.log(totalDistance/mph1Fuel)
console.log(totalDistance/mph2Fuel)
console.log(totalDistance/mph3Fuel)

//Will your budget be enough to cover the fuel expense?

console.log('Will budget cover the cost of fuel')
console.log(((totalDistance/mph1Fuel)*fuelCost)<budget)
console.log(((totalDistance/mph2Fuel)*fuelCost)<budget)
console.log(((totalDistance/mph3Fuel)*fuelCost)<budget)


//How long will the trip take, in hours?

console.log('Trip duration in hours')
console.log(totalDistance/mph1)
console.log(totalDistance/mph2)
console.log(totalDistance/mph3)




