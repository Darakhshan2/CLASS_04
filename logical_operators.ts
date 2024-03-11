// LOGICAL OPERATORS : three types 1) &&  2)||  3)!(any condition)
// why logical operators : To check multiple condition 
// && =>  andand (all true)
// condition for true : 2no condition ka true hona complusory otherwise false

let num1 = 10
let num2 = 7
 console.log(num1 == 10 && num2 == 7) // true (2no condition ka true hona zaroori hai true lany ky liye)

 // || => or
 // TRUE : aik bh condition true hony pr true ayega

 let num3 = 18
 let num4 = 7
 console.log(num3 == 18 || num4 == num3) // true ( koi aik bh condition true hogi to true ayega)


// not operator : condition ka answer opposite dy gi if true they give false 
// 
let a = 7
let b = 9
console.log(!(a == 9))

// CONDITION OPERATORS 
// IF _ ELSE
//IF  is a block of code to be executed : if the condition is true
// ELSE is a block of code to be execute : is the condition is false
// 

let num = 8 // num ko value assign ki hai 8
if(num == 9){ // num mn jo value store hai wo 9 ki equal hai
    console.log("hello")
}else{
    console.log("bye")
}

// ex no 2

let age = 18
if (age == 18){
    console.log("you are adult")
}else {
    console.log("you are a child")
}

// ELSE IF 
// MULTICHAN OF IF_ELSE

// code 1
let number = 9
if(number == 8){
    console.log("number is 8")
}else if(number == 9){
  console.log("number is 9 ")
}else {
    console.log("number is 7")
}

//code 2

let str :string = " hello"
if (str == "bye"){
  console.log("if is true")
}else if(str == "good"){
    console.log("else_if is right")
}else if (str == "nice"){
    console.log("2nd else_if is right")
}else {
    console.log("no condition is true so we give else")
}
