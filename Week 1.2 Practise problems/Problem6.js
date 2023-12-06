
// 2. Write a program to print the biggest number in an arrya

let bigArray = [1,2,3,4,5,6,7,8,9,10,1000,-1000,9999]
let biggest = 0;
for(i = 0; i <bigArray.length;i++){
    if(bigArray[i] > biggest){
        biggest = bigArray[i];
    }
}
console.log(biggest)

