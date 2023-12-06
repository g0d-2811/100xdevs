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

