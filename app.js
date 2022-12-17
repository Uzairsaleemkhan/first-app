// No 1


// function spinWords(string){
// let myArray=string.split(" ");
// let anotherArray=[]
// for (let i = 0; i < myArray.length; i++) {

// if (myArray[i].length>=5) {
//  let newArray=   myArray[i].split("")
// let myValue= newArray.reverse().join("")
// anotherArray.push(myValue)
// } else{
// anotherArray.push(myArray[i])
// }

// }

// return anotherArray.join(" ")

// }
// let final= spinWords("hello this is uzair saleem khan")
// console.log(final);

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// No 2


// function getCount(str) {
    
// let myArray=str.split("")
// let myAnotherArray=[]
// for (let i = 0; i < myArray.length; i++) {
//     if(myArray[i]==="a"|myArray[i]==="e"|myArray[i]==="i"|myArray[i]==="o"|myArray[i]==="u"){
//         myAnotherArray.push(myArray[i])
//     }
// }
// return myAnotherArray.length
// }
//  let myValue= getCount("hello this is my string")
//  console.log(myValue)



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


// No 3

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative
// persistence, which is the number of times you must multiply
// the digits in num until you reach a single digit.
// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    //code me
  const newNum=num+""
//   console.log(newNum.split(""))
let myArray= newNum.split("")
let count =0;
let myString;
if (myArray.length>1){
  while (myArray.length>1) { 
    let myNum=1;
    for (let i = 0; i < myArray.length; i++) {
     
myNum*=parseInt(myArray[i])
}
count++
 myString= myNum+""
myArray= myString.split("")

}

return count
}
else{
   return 0
}
 }

const myFunc=persistence(4)
 console.log(myFunc)

// console.log(parseInt("2"))