const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

const fromEurotoUs = (eu) => {
    total = eu*1.2
    return total
}
console.log(fromEurotoUs(5))
//Eu 1 = 1.2Usd


const fromUstoYen = (usd) => {
    total = usd*127.9
    return total
}
console.log(fromUstoYen(10))
// usd 1.2 = 127.9yens


const fromYentoPound = (yens) => {
    total = yens*0.8
    return total
}
console.log(fromYentoPound(2))

// 127.9yens = 0.8 pounds/Great
module.exports = { sum, fromEurotoUs, fromUstoYen, fromYentoPound };