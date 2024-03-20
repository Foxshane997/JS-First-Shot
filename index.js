// //  Day One --

// // let playerId = [1, 2, 3, 4, 5, 6,]
// // let x = 0 
// // // // // not a string so no quotes.

// // for (let x=0; x<playerId.length; x++){
// //     console.log('you are ${playerId[x]}.')
// // }

// // console.log("You are Player " + playerId[0] + ".") 
// // //  this one isnt used anymore.

// // console.log(`You are Player ${playerId[0]}.`)
// // // this is the primary used version.

// // playerId.push(`2`)
// // console.log(playerId)

// // consol.log(num + string)
// // console.log(string + num)

// // Day Two  --

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }
// /*----------------------------------------------------------------------------------------------------------------------------- */

// /*References */


// let user = {
//     firstName: 'Eli',
//     lastName: 'Hale'
// }

// // ?
// function fullName(){
//  	console.log (`${user.firstName} ${user.lastName}`)
  
// }


// let a = 10
// let b = 5
// let c = 6
// let d = 4

// // ?

// let numbers = [a, b, c, d]
// let result = 0

// for (let i=0; i < numbers.length; i++) {
//   result += numbers[i];
// }
// console.log(result) /*keep outside the loop so its a single number displayed*/



// function sum(){

// }

// // It should be called like this and should return 20:
// let output = sum(4, 6, 10)
// console.log('Returned', output)


// let secretMessage= document.querySelector('.secret-message')

// function toggleVisibility(){
//     if(secretMessage.style.display === 'block'){
//         secretMessage.style.display = 'none'
//     }   else {
//         secretMessage.style.display = 'block'
//     }
// }

// document.body.addEventListener('mouseover', toggleVisibility)
// document.body.addEventListener('mouseout', toggleVisibility)

// /*End of reference */

// module 4 //

// best forEach example
let monthlyProfitLabels = [ 'January: 5', 'February: -1', 'March: 12' ]
let monthList = document.querySelector('.month-list')

    monthlyProfitLabels.forEach(function(label){
    let monthLi = document.createElement('li')
    monthLi.textContent = label
    monthList.append(monthLi)
})

// -----------------------------

// filter example
let allMonths = [ 
    { name: 'January', revenue: 10, expenses: 5, quarter: 1 }, 
    { name: 'February', revenue: 7, expenses: 8, quarter: 1 }, 
    { name: 'March', revenue: 15, expenses: 3, quarter: 1 } ,
    { name: 'April', revenue: 20, expenses: 18, quarter: 2 } ,
    { name: 'May', revenue: 25, expenses: 17, quarter: 2 } ,
    { name: 'June', revenue: 19, expenses: 18, quarter: 2 },
    { name: 'July', revenue: 20, expenses: 20, quarter: 3 } ,
    { name: 'August', revenue: 19, expenses: 20, quarter: 3 },
    { name: 'September', revenue: 21, expenses: 23, quarter: 3 },
    { name: 'October', revenue: 21, expenses: 20, quarter: 4 },
    { name: 'November', revenue: 21, expenses: 20, quarter: 4 },
    { name: 'December', revenue: 18, expenses: 20, quarter: 4 } 
]

let selectedQuarter = 1
let selectedMonths = allMonths.filter(function(month){
    return month.quarter === selectedQuarter
  
})

console.log(selectedMonths)

// -----------------------
