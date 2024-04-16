// Data Types
/* 
This is a multi line comment
String 
*/
"This is a sample string"

// Boolean
true 
false

// console.log("ada" === "ada")

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i)
        console.log("FIZZBUZZ")
    }
    else if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i)
        console.log("FIZZ")
    }
    else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i)
        console.log("BUZZ")
    }
}
var string = 'Dejo'
console.log(String.toUpperCase)