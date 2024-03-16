//  Day One --

// let playerId = [1, 2, 3, 4, 5, 6,]
// let x = 0 
// // // // not a string so no quotes.

// for (let x=0; x<playerId.length; x++){
//     console.log('you are ${playerId[x]}.')
// }

// console.log("You are Player " + playerId[0] + ".") 
// //  this one isnt used anymore.

// console.log(`You are Player ${playerId[0]}.`)
// // this is the primary used version.

// playerId.push(`2`)
// console.log(playerId)

// consol.log(num + string)
// console.log(string + num)

// Day Two  --

for (let i = 1; i <= 10; i++){
    console.log(i);
}
/*----------------------------------------------------------------------------------------------------------------------------- */

/*References */


let user = {
    firstName: 'Eli',
    lastName: 'Hale'
}

// ?
function fullName(){
 	console.log (`${user.firstName} ${user.lastName}`)
  
}


let a = 10
let b = 5
let c = 6
let d = 4

// ?

let numbers = [a, b, c, d]
let result = 0

for (let i=0; i < numbers.length; i++) {
  result += numbers[i];
}
console.log(result) /*keep outside the loop so its a single number displayed*/



function sum(){

}

// It should be called like this and should return 20:
let output = sum(4, 6, 10)
console.log('Returned', output)

/*End of reference */