// Let’s write some code -

// 1. Write the program to greet a person given their first and last name



let firstName = "Bhagyesh";
let lastName = "Bhardwaj";

let fullName = firstName+lastName;
console.log("Hi there! "+firstName+lastName+", How are you?");
console.log("Hey! "+fullName+", How are you feeling today?");

let oneMoreFirstName = "Harkirat";
oneMoreFirstName += "Singh";

// console.log("hello! "+oneMoreFirstName);

// just testing undefined here ^




// 2. Write a program that greets a person based on their gender. (If else)


let gender = "Male";


if (gender == "Male") {
    console.log("A guy with smol PP");
} else {
    console.log("A girl with flat chest");
}


// 3. Write a program that counts from 0 - 1000 and prints (for loop)


let num1 = 1000;

for (let i = 0; i <= num1;i++){
    console.log(i);
}


// 3. Write a program that adds and show the sum of numbers from 0 - 1000 and prints (for loop)

let sum = 0;
let maxNum = 1000;

for(i=0;i<=maxNum;i++){
    sum += i;
    // console.log(sum)
}
console.log(sum)



// Let’s write some code -

// 1. Write a program prints all the even numbers in an array

const numArray = [12,13,15,17,21,33,34,0,2,22,100000000001,1010101010,0.00001,2.1,2.2,-2,-22,2.0];
for(i = 0; i < numArray.length; i++){
    if(numArray[i] % 2 == 0){
        console.log(numArray[i]);
    }
}

// 2. Write a program to print the biggest number in an arrya

let bigArray = [1,2,3,4,5,6,7,8,9,10,1000,-1000,9999]
let biggest = 0;
for(i = 0; i <bigArray.length;i++){
    if(bigArray[i] > biggest){
        biggest = bigArray[i];
    }
}
console.log(biggest)


// 3. Write a program that prints all the male people’s first name given a complex object

const bioData = [
    {
         firstName : "Bhagyesh",
         lastName : "Bhardwaj",
         gender : "Male",
    },

    {
         firstName : "Mahesh",
         lastName : "Dalle",
         gender : "Male",
    },

    {
         firstName : "Ranu",
         lastName : "Mondal",
         gender : "Female",
    },

    {
         firstName : "Savita",
         lastName : "Bhabhi",
         gender : "Female",
     }
];

for(i = 0;i < bioData.length;i++){
    if(bioData[i]["gender"] == "Male"){
        console.log(bioData[i]["firstName"]);
    }
}


// 4. Write a program that reverses all the elements of an array

let normalArray = ["A","B","C","D","E","F"];
let reverseArray = [];

for(i = (normalArray.length)-1;i >= 0; i--){
    reverseArray.push(normalArray[i]);
}
console.log(reverseArray);


let testArray = [];
testArray[0] = normalArray[normalArray.length - 1];
console.log(testArray);



// Let’s write some code -


// 1. Write a function that finds the sum of two numbers


let numOne = 100;
let numtwo = 20;

function sumOftwoNumbers(numOne,numTwo){
    sumOf = numOne+numTwo;
    return(sumOf);
}
let ans = sumOftwoNumbers(numOne,numtwo);
console.log(ans);



// 2. Write another function that displays this result in a pretty format

function sumOftwoNumbersButPreetier(numOne,numTwo){
    sumIt = numOne+numTwo;
    return("Sum of "+numOne+" and "+numtwo+" is: "+sumIt);
}
let preetyAns = sumOftwoNumbersButPreetier(numOne,numtwo);
console.log(preetyAns);

// 3. Write another function that takes this sum and prints it in passive tense

function sumOftwoNumbersInPassive(numOne,numTwo){
    sumThem = numOne+numTwo;
    return(sumThem+" is the sum of "+numOne+" and "+numtwo);
}
let passiveAns = sumOftwoNumbersInPassive(numOne,numtwo);
console.log(passiveAns);

