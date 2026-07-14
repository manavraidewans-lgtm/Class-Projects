//// NIVEN ////

// function niven(num) {
//     let original = num;
//     let sum = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         sum = sum + digit;
//         num = (num - digit) / 10;
//     }

//     if (original % sum === 0) {
//         console.log("Niven Number");
//     } else {
//         console.log("Not Niven Number");
//     }
// }

// niven(18);









// // ARMSTROG // // 

// function armstrong(num) {
//     let original = num;
//     let sum = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         sum = sum + ( digit * digit * digit; )
//         num = (num - digit) / 10;
//     }

//     if (sum === original) {
//         console.log("Armstrong Number");
//     } else {
//         console.log("Not Armstrong Number");
//     }
// }

// armstrong(153);









// // // NEON //

// function neon(num) {
//     let square = num * num;
//     let sum = 0;

//     while (square > 0) {
//         let digit = square % 10;
//         sum = sum + digit;
//         square = (square - digit) / 10;
//     }

//     if (sum === num) {
//         console.log("Neon Number");
//     } else {
//         console.log("Not Neon Number");
//     }
// }

// neon(9);






// // Palindrome // //
// function palindrome(num) {
//     let original = num;
//     let reverse = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         reverse = reverse * 10 + digit;
//         num = (num - digit) / 10;
//     }

//     if (original === reverse) {
//         console.log("Palindrome");
//     } else {
//         console.log("Not Palindrome");
//     }
// }

// palindrome(121);






// EVIL NUMBER 