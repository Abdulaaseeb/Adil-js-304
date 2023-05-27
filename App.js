// // ------ (CHAP # 1) ------- //

// var first = "First Name"
// var last = "Last Name"
// var mail = "Email"
// var phone = "Phone Number"
// var password = "Password"
// alert(first + ",  " +  last + ",  " + mail + ",  " + phone + ",  " + password + "!" )
// alert("You're learning Javascript")
// alert("NO SMOKING")

// // ----- (CHAP # 2) ------- //

// var myTeamName = "My Team Name is "
// var teamName = "Pakistan"
// alert( myTeamName + teamName)

// // ---- (CHAP # 3) -------- //

// var num1 = 55
// var num2 = "44"
// var sum = num1 + num2
// alert(sum)
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// alert(orderTotal)
// var one = 7
// var two = 8
// var add = one + two
// alert(add)

// // ----- (CHAP # 4) ------ //

// var productcost = 3.45;
// var nameOfBand;
// var nameOfBand = 45
// var firstLastName;
// // list of legal variable //
// var adil
// var Adil1
// var _age
// var $name
// // list of illegal variable //
// // var 1adil
// // var %_age
// // var 123

// // ------ (CHAP # 5) ------ //

// var symbolOfArithmaticoperator = "%"
// var _num = 20 % 6 
// alert(_num)
// var largeNum = 1000 * 2000
// alert(largeNum)
// var sub = 40 - 20
// alert(sub)
// var dividend = 10;
// var divisor = 3;
// var remainder = dividend % divisor;
// alert(remainder)
// var mul1 = 20
// var mul2 = 50
// var result = 20 * 50
// alert("The result of the multiplication is " + "" + result )

// // ------ (CHAP # 6) ------ //

// x = x + 1
// "short form"
// x++
// x = x - 1
// "short form"
// x--
// var x = 50;
// var y = x++;
// alert(y)
// var y = 50;
// var z = --y;
// alert(z)
// var newNum = num--;
// alert(newNum)
// var originalVariable = 40
// var newVariable = originalVariable++;
// alert(newVariable)
// var num = 10;
// num++;
// alert("The new value is: " + num);

// //-------------------------- Chap:7 -------------------------------//
// var calculatedNum = 2 + (2 * 6);
// var calculatedNum = (2 + 2) * 6;
// var calculatedNum = (2 + 2) * (4 + 2);
// var calculatedNum = ((2 + 2) * 4) + 2;
// alert(calculatedNum)
// var cost = (2 + 2) * (4 + 10);
// alert(cost)
// var units = 2 + (2 * (4 + 10));
// alert(units)
// var pressure = (4 / 2) * 4;
// alert(pressure)

// //------------------------ Chap:8 -----------------------------------//

// var num = "2" + "2"
// alert(num)
// var message = ("Hello," + "Dolly")
// alert(message)
// var integer = ("33" + 3)
// alert(integer)
// var part1 = "Pakistan";
// var part2 = "Zindabad";
// var message = part1 + " " + part2;
// alert(message);
// var concatenated = "The number is: " + 42;
// alert(concatenated)
// var string1 = "Hello";
// var string2 = "world";
// var concatenated = string1 + " " + string2;
// alert(concatenated)

// //------------------------- Chap:9 -------------------------//

// var firstName = prompt("Enter First Name")
// alert(firstName)
// var country = prompt("Country?", "Pakistan");
// alert(country)
// var yourName = prompt("Enter Your Name");
// alert(yourName)
// var userInput = prompt("Please enter your name", "John Doe");
// alert(userInput)

// //------------------------ Chap:10 -------------------------//

// var city = "Karachi";
// if (city === "Karachi") {
//   alert("The City of Lights");
// }
// else{
//     alert("This is not city of light")
// }

// var x = prompt("Enter the value") 
// var y = "Adil"
// if (x === y) {
//     var z = prompt("Enter the value of z:");
//     alert(z)
//   }
//   else{
//     alert("invalid input")
//   }

//   var zipCode = "10010";

//   if (zipCode === "10010") {
//     alert("Karachi");
//   } else {
//     alert("Please write correct city");
//   }
// //------------------------- Chap:11 --------------------------//

// var  variable1 = prompt("Enter the variable")
// var variable2 = "abc"
// if (variable1 !== variable2) {
//     alert("Please Write Correct variable")
//   }
// else{
//     alert("abc")
// }

// var variable3 = prompt("Enter the value")
// var variable4 = 30
// if (variable3 >= variable4) {
//        alert("Correct the value")
//   }
// else{
//     alert("Incorrect the value")
// }
// var myVariable = 5;

// if (myVariable !== 10) {
//   myVariable = 10;
//   alert(myVariable)
// }

// var names1 = prompt("Enter the first name")
// var names2 = "Haseeb"
// if(names1 !== names2){
//     alert("NO match")
// }
// else{
//     alert("Correct")
// }

// // ----------------- Chap # 12 ----------- //

// var represented1 =  prompt("Enter the Value")
// var represented2 = 25
// if(represented1 >= represented2){
//     alert("Your Number is Greater")
// }
// else{
//     alert("Your Number is Less")
// }

// var per = prompt("Enter the marks")
// if(per <= 100 && per >= 80){
//     alert("Your Grade is A+")
// }
// else if(per <= 80 && per >= 70){
//   alert("Your Grade is A")
// }
// else if(per <= 70 && per >= 60){
//     alert("Your Grade is B")
// }
// else if(per <= 60 && per >= 50){
//     alert("Your Grade is C")
// }
// else if (per <= 50 && per >= 40){
//     alert("Your Grade is D")
// }
// else if(per > 100){
//     alert("Invalid Input")
// }
// else if(per < 0){
//     alert("Invalid Input")
// }
// else{
//     alert("Fail")
// }

// a = prompt("Enter The number")
// b = 10
// if(a === b){
//     alert("This result is" + b)
// }

//-------------------------- Chap:13 -----------------------------//
// var e = prompt("Enter the Value1")
// var f = 20 
// var c = prompt("Enter the value2")
// var d = 45
// if (e === f && c === d) {
//     alert("True")
//   }
//     else{
//       alert("False")
//   }

// if (a === b || c !== d) {
//   }

// if ((names === "Hamza" || names === "Arsalan") && age < 60) {
//   }

// var num1 = 5;
// var num2 = 10;

// if (num1 < num2 || num1 > num2) {
//   alert("The first variable is either less than or greater than the second variable.");
// }

//     var firstName = "John";
//     var lastName = "Doe";

//     var enteredFirstName = prompt("Please enter your first name:");
//     var enteredLastName = prompt("Please enter your last name:");

//     if (enteredFirstName === firstName && enteredLastName === lastName) {
//       alert("Name entered correctly!");
//     }

//     //----------------------------- Chap:14-------------------------------------------------//

// var a = prompt("Enter a number")   
// var c = prompt("Enter the value")
// if (a === 1) {
// if (c === "Max") {
// alert("OK");
// }
// }
// var variable1 = 5;
// var variable2 = 5;

// if (variable1 === variable2) {
//   if (variable1 <= variable2) {
//     alert("The conditions pass!");
//   }
// }

// //------------------------- Chap 15 -------------------------------------------------

// var arr = []
// arr = ["cat"]
// var arr1 = ["h","i","j","k","l","m","n","o"]
// alert(arr1[2])
// alert(arr1.length)
// var arr2 = ["Adil","Haseeb"]
// arr2[2] = "Raheem"
// alert(arr2[2])

// // -------------------------- Chap 16 -------------------------------------

// var arr3 = ["h","i","j"]
// arr3.push("k")
// console.log(arr3)
// arr3.pop()
// console.log(arr3)
// arr3.push("k")
// console.log(arr3)
// arr3.shift()
// console.log(arr3)
// arr3.unshift("f","h","i")
// console.log(arr3)
// var arr4 = [ "Raheem"]
// arr4.unshift("Shakoor")
// alert(arr4[0])
// var alpha = arr3.splice()
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L");
// console.log(sizes);
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1 , 3 , "cow" , "camel" )
// console.log(pets)
// var pets = ["dog", "cat", "ox", "duck", "frog" ,"zebra"];
// pets.splice(1,2)
// console.log(pets)
// var pets = ["dog", "cat", "ox", "duck", "frog" ,"zebra"];
// reducedpets = pets.slice(3,5)
// console.log(reducedpets)

// //----------------------------- Chap:17-20 -----------------------------//

// for (i = 0; i <= 10; i++) {
//     console.log(i)
// }
// for (i = 0; i <= 12; i++) {
//     console.log(i)
// }
// for (i = 0; i <= 4; i++) {

// }
// for (j = 0; j < 101; j++) {
//     console.log(j)
// }
// for (var k = 3; k > 0; k--) {
//     console.log(k)
// }
// var flag = ["cow", "camel", "goat", "zebra", "fox"]
// for (i = 0; i < flag.length; i++) {
//     console.log(flag[i])
// }
// // for ( var counter = 0; counter <= 10; counter++){
// //   if(counter === 2){
// //     alert(counter)
// //     break
// //   }
// // }
// var myName = ["adil", "haseeb", "raheem", "mannan", "shakoor", "ali", "hassan", "ahad", "basit"]
// var firstname = prompt("Enter the Name")
// firstname = firstname.toLowerCase()
// for (i = 0; i <= myName.length; i++) {
//     if (firstname === myName[i]) {
//         alert("Your Name is Presence")
//         break
//     }
//     else {
//         alert("Your Name is not Presence, Please Try Again")
//         break
//     }
// }

// var userInput = prompt("Enter The Name")
// userInput = userInput.toLowerCase
// var list = ["adil", "haseeb", "raheem", "mannan", "shakoor", "ali", "hassan", "ahad", "basit"]
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//     if (userInput === list[i]) {
//         matchFound = true;
//         alert("Match found");
//         break;
//     }   
// }
// if (!matchFound) {
//     alert("Match not Found")
// }

var firstArr = ["a","b","c","d","e","f"]
var secondArr = [1,2,3,4,5,6]
for(i = 0; i <= firstArr.length; i++){
    for(j = 0; j <= secondArr.length; i++){
        console.log(firstArr[i] + secondArr[j])
    }
}

