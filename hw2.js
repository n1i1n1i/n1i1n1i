//1
for(let i=23; i>=12;i--){console.log(i);}
//2
let arr =["Apple","Banana","Orange","Raspberries","Blackberries"];
for(let index=0; index < arr.length; index++){
    console.log(arr[index]);
    if(arr[index] =="Raspberries"){
        break;
    }
}
//3

for(let index=0; index < arr.length; index++ ){
    if(arr[index]=="Apple" || arr[index]== "Blackberries"){
        continue;
    }
    console.log(arr[index]);
}
//4
arr.unshift("Tomatoes");
console.log(arr);

//5
console.log(arr.indexOf("Raspberries"));
//6
let myFullName = "Nini Pukhashvili";
for(const iterator of myFullName){
    if(
        iterator == "i" ||
        iterator == "e" ||
        iterator == "a" ||
        iterator == "m" ||
        iterator == "r"
    )
   continue;
   console.log(iterator);
}
//7
let petname = [
    "Bella",
    "Max",
    "Luna",
    "Charlie",
    "Charlie",
    "Cooper",
    "Max",
    "Milo"
];
for(let i=1; i< arr.length; i++){
    if(petname[i]== petname[i-1]) break;
    console.log(i,i-1, petname[i]);
}
//8
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
//9 
console.log(person.lastName, person.age);
//10
person.firstName = "Nini";
person.lastName = "Pukhashvili";
person.age = 32;
person.eyeColor = "Green";
console.log(person);




    

 
 


