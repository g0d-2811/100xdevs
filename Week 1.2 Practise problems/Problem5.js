// 1. Write a program prints all the even numbers in an array

const numArray = [12,13,15,17,21,33,34,0,2,22,100000000001,1010101010,0.00001,2.1,2.2,-2,-22,2.0];
for(i = 0; i < numArray.length; i++){
    if(numArray[i] % 2 == 0){
        console.log(numArray[i]);
    }
}
