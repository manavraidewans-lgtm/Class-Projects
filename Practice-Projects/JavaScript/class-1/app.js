

// // Even OR Odd Number //

// let number1 = Number(prompt("Enter Your Number"));

// let result = number1 % 2 === 0 ? "Your Number is Even" : "Your Number is Odd";

// console.log(result);




// // Buzz Number //

// // 1 //

// let buzNum = Number(prompt("Enter Number you wanna check")) ;

// if ((buzNum % 10 == 7) || (buzNum %7 == 0) ) {
//     console.log("Your Number is buzz") ;
// } else {
//     console.log("Your Number is not buzz") ;
// }


// //  2 //
// let buzNum1 =  buzNum %10 == 7 || buzNum %7 == 0 ? "Your Number is buzz" : "Your number is not buzz" ;
// console.log(buzNum1);





// // Electricity Bill //

// let units = parseInt(prompt("Enter electricity Units"));
// let bill = 0 ;

// if (units <= 0) {
//     bill = units * 10 ;
// } else if (units <= 200 ) {
//     bill = (100 * 10 ) + ((units - 100) * 15) ;
// } else if (units <= 300 ) {
//     bill = (100 * 10 ) + ( 100 * 15 ) + ((units - 200) * 20) ;
// } else {
//     bill = (100 * 10 ) + (100 * 15 ) + (100 * 20 ) + ((units - 300) * 25) ;
// }

// console.log ( bill ) ;