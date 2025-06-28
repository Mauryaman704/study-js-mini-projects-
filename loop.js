//for

for (let index = 0; index <= 20; index++) {
    const element = index;
    // console.log(element);

}

for (let i = 0; i <=10; i++) {
    // console.log(`outer loop value:${i}`)
   for (let j = 0; j <=10; j++) {
//    console.log(`inner loop value:${j} outer loop value ${i}`)
    
   }
    
}
let myArray=["iroman", "Thor", "groot"]
// console.log(myArray.length);
for (let index = 0; index <myArray.length; index++) {
    const element =myArray[index];
    //  console.log(element);
}

//break and continue
// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log(`detected 5`)
//         break
//     }
//    console.log(`value of variable is : ${index}`)
// }

// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log(`detected 5`)
//         continue
//     }
//    console.log(`value of variable is : ${index}`)
// }

//while
// let index = 2
// while (index <= 10) {
//     console.log(`value of index is:${index} `)
//     index = index + 2
// }


let Aman = ["batman","superman","aman"]

let arr = 0
while (arr < Aman.length) {
    // console.log(`value is : ${Aman[arr]}`)
arr = arr + 1
}
 
let score = 11
do {
    // console.log(`score is ${score}`)
    score++
} while (score <= 10);

//for of loop

const pink = [1,2,3,4]

for (const num of pink) {
    // console.log(num)
}
 const greeting ="hello world !"
 for (const greet of greeting) {
    // console.log(greet)
 }

// maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA' ,"United states of america")
// map.set('Fr' ,"france")

// console.log(map); 

// for (const [key,value] of map) {
    // console.log(key ,':-' , value);
    
// }

const myObject = {
    js: "java script",
    cpp: "C++",
    rb: "ruby"
}

for (const key in myObject) {
//  console.log(`${key} is shortcut for ${myObject[key]}`);
   
}

const programming  = ["ruby","python","css"]

for (const key in programming) {
   
    // console.log(programming[key]);
    
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA' ,"United states of america")
// map.set('Fr' ,"france")

// for (const key in map) {
//     console.log(key);
    
// }

const coding = ["js", "python","css", "html"]

// coding.forEach( function (item) {
//     console.log(item);
    
// })

// coding.forEach( (val) => {
//     console.log(val);
    
// })

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// } )

const myCoding = [
    {
        language: "javascript",
        languageFileName:"js"
    } ,
    {
        language: "pthon",
        languageFileName:"py"
    } ,
    {
        language: "ruby",
        languageFileName:"rb"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language);
    
})