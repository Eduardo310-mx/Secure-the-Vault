var code1
var code1 = 10
console.log(code1 + 3);

var code2
var code2 = 100 / 2 - 10

var code3
var code3 = 40 - (1 % 2)
console.log("The vault has been secured. The combination is: " + code3)

var message = "The vault has been secured. The combination is: "

var codeA = code1 + code2 + code3
console.log(codeA)
var codeB = (`${code1} ${code2} ${code3}`)
console.log( message + codeB + " = " + codeA)
