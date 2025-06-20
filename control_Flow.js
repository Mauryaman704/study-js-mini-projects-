// const temperature =     40


// if(temperature < 30){
//     console.log("temperature is less than 30")
//  } else{
//      console.log("temperature is greter than 30");
//  }


//  const balance = 1000

//  if(balance < 500 ){
//         console.log("less than 500");
//  }else if(balance < 750){
//         console.log("less than 750");
   
//  }else if(balance < 900){
//         console.log("less than 900");

//  }else {
//         console.log("less than 1200");

//  }

// const userLoggedIn = true
// const DebitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = false


// if (userLoggedIn && DebitCard){
//     console.log("allow for shopping");
// }

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("allow for shopping");
// } else {
//     console.log("not allowed for shopping");
// }

//++++++++++++++++++SWITCH+++++++++++++++++


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 1

// switch (month) {
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     case 4:
//         console.log("april")
//         break;
//     case 5:
//         console.log("may")
//         break;

//     default:
//         console.log("nothing is matched")
//         break;
// }


//+++++++++++++++++++++truthy & falsy values+++++++++++++++++

// truthy values
// "0","false"," ",[], {},function(){}

//falsy values
//false,0 ,-0, bigint 0n , "", null ,undefined,Nan


// const userEmail = "0"

// if (userEmail){
//     console.log("got user Email");
// }else{
//     console.log("don't have Email");

// }

// const emptyObj ={}

// if(Object.keys(emptyObj)==0){  //makes object in array

//     console.log("obj is empty");
    
// }

// Nullish coalescing operator(??): null, undefined

let val1;
// val1 = 4 ?? 10
// val1 = null ?? 32
// val1 = undefined ?? 12
val1 = undefined ?? null ?? 87



console.log(val1);


// terniary operator

// condition ? true:false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("not affordable") : console.log("affordable")



