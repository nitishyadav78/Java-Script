"use strict"

//alert(3+3)// this is not allowed here beacuse we use Node js not the browser

// console.log(3+5)
// console.log("Data Types")

let name = "Java script"
let age = 19
let isFormFill = true
//data types
//number 2 to power 53
//bigint
//String = ""
//boolean 
//null // is a object object type
//undefined // is undefined type
// console.table([typeof undefined, typeof null]);
//***********Primitive Data Types and Non Primitives Data Types*******


//Bigint, Number, float, long, double, String, Boolean

//Non Primitive data Types
//Object , Array , Function etc....
const arr = [1,2,3,4,5,6,6]
// console.log(arr)

const id = Symbol("123")
const id2 = Symbol("123")
console.log(id === id2);

// const Object = {eamilId, password}
let MyObj = {
    name : "Nitish",
    email : "Ramesh@gmail.com",
    age : 25

}

//************Memory **************************/
//Stack(Primitive[Clone not exact value]) and Heap(Non Primitive [ Passing reference means excat value])
let myName = "Nitish"
let nameis = myName;
nameis = "Yadav"
// console.log(nameis);
// console.log(myName);
let userOne = {
    email : "yadavnitihs@gmail.com",
    mode : "upi"
}
let userTwo = userOne
userTwo.email = "akash@gmail.com"
userTwo.mode = "Cash"
console.table([userTwo]);






