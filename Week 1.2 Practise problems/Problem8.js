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

