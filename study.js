// const accountId = 24319
// let accountEmail ="amananchal@gmail.in"
// var accountPassword = "704"
// accountCity = "varanasi"
// let accountState

// // accountId = 704 //not allowed

// accountEmail ="aman.com"
// accountPassword ="21"
// accountCity ="chakiya"

// // console.log(accountId);

// // console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])
//  let age = 21

// console .log(typeof age)

// let score = "aman"

// console. log(typeof (score));

// let aman = Number(score);
// console. log(typeof (aman))
// console. log(aman);

// let isLoggedIn = ""

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let someNumber = 1222

// let stringOutput = String(someNumber)
// console.log(stringOutput);
// console.log(typeof stringOutput);

// let x = 3
// let y =x ++
// console.table([x, y]);

// let a = 3
// let b = ++a
// console.table([a, b]);


// const name = "aman "
// const repoCount = 2
// let value = 50
// console.log(name + repoCount + value); // outdated type

// console.log(`my name is ${name} and my repoCount is ${repoCount} and my value is ${value}`) //modern way to type string.
 
// const gameName = new String("Aman-anchal");

// console.log (gameName[4]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName. toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('a'));

// const newString = gameName.substring(0,4)
// console.log(newString);


// const anotherString = gameName.slice(-6,10)
// console.log(anotherString);

// const newStringOne = "   anchalaman   "
// console.log(newStringOne);
// console.log(newStringOne.trim());
// console.log(newStringOne.trimStart());
// console.log(newStringOne.trimEnd());


// const url = "http://aman$704anchal"
// console.log(url.replace('aman', 'love'));

// console.log(url.includes('maurya'))


// console.log(gameName.split('-'));


const score = 400
// console .log(score);

const balance = new Number(100)
// console .log(balance);

// console .log(balance.toString().length);
// console .log(balance.toFixed(2));

const othernumber = 156.45666
// console .log(othernumber.toPrecision(3));

const thirdNumber =10000000
// console .log(thirdNumber.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++maths+++++++++++++++++++++


// console.log(Math);
// console. log(Math.abs(4));
// console. log(Math.abs(-5));
// console.log(Math.round(4.4));
// console.log(Math.round(4.8));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console. log(Math.min(2,3,7,9,10));
// console. log(Math.max(2,3,7,9,10));


// console. log(Math.random());
// console. log((Math.random()*10) + 1);
// console. log(Math.floor(Math.random()*10) + 1);

// const min =10
// const max = 30

// console. log(Math.floor(Math.random() * (max-min + 1) + min));


// const mySymbol = Symbol("key1")

// const jsUser = {
//     name : "Aman maurya",
//     "full name" : "Aman maurya",
//     mySymbol: "mykey2",
//      age: 18,
//     Email :"am9198566563@gmail.com",
//     City : "varanasi",
//     lastLoggedIn : ["monday","tuesday"],
//     userLoggedIn : false
// }

// console.log(jsUser.City);
// console.log(jsUser["City"]);
// console.log(jsUser["full name"]);
// console.log(jsUser.mySymbol);
// console.log(typeof(mySymbol));

// jsUser.Email = "amananchal.com"
// Object.freeze(jsUser)
// jsUser.Email = "anchalaman.com"

// console.log(jsUser);
// console.log(typeof(mySymbol));


// const tinderUser = new Object()
const tinderUser = {}
// console.log(tinderUser);


tinderUser.id = "123abc"
tinderUser.name ="aman maurya"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const userName ={
    fullName : {
    firstName :"aman",
    lastName : "maurya",
    }
}

// console.log(userName.fullName.firstName);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
const obj3 ={5:"a", 6:"b"}

// const obj4 ={obj1,obj2,obj3}

// const obj4 =Object.assign({},obj1,obj2,obj3)

// const obj4 ={...obj1,...obj2,...obj3}
// console.log(obj4);


 const course = {
    courseName :"jsInhindi",
    coursePrice : "999",
    courseInstructor : "hitesh"

 }

//  console. log(course.courseInstructor);

const{courseInstructor:aman} = course

// console.log(courseInstructor);

// console.log(aman);
function addTwoNumber(number1,number2,) {
    // console.log(number1 + number2);
    
}

addTwoNumber(23,23)


function addThreeNumber(number3,number4,number5){
    // return number3 + number4 +number5
}

// const result = addThreeNumber(2,3,4)

// console.log("result:",result);

function loginUsermessage(username){
    if(!username){
        // console.log("please enter the user name");
        return
    }
return `${username} is just logged in `
}

// console.log(loginUsermessage("aman"));
// console.log(loginUsermessage());


function calculateCartPrice(...num1){
return num1
}

// console.log(calculateCartPrice(200,400,500,600,700))

// const user ={
//     username:"aman",
//     price :299
// }

function handleObject (anyobject){
   console.log( `user name is ${anyobject.username} and price is ${anyobject.price}`);
   
}

// handleObject(user)
// handleObject({
//     username : "aman",
//     price : 280
// })

const MyNewArray = [200,400,100]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(MyNewArray));