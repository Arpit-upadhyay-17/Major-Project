let price = [
    { name : "e" , age: 18 },
    { name : "c" , age: 15 },
    { name : "a" , age: 25 },
    { name : "d" , age: 35 },
    { name : "b" , age: 20 },

]


// console.log(price.sort())t;
let a = price.sort((a,b) => {
    return a.age - b.age;
})

let b = price.sort((a,b) => {
     if ( a.name.toLowerCase() > b.name.toLowerCase() ) return 1 ;
     if ( a.name.toLowerCase() < b.name.toLowerCase() ) return -1 ;
    return 0;
})

console.log(b);