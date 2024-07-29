// alert("this is a javascript course, enjoy!!");
// strings
let firstString = "this is our first variable, we stored a string in it.";
// alert(firstString);
// varibles and constant
const firstNumber = 123.11;
// alert(firstNumber);
// numbers
// firstNumber = 34567;
// alert(firstNumber);

// Arrays
let age = 16;
let height = "5ft 6inches";

// console.log(personalData)

// console.log(personalData[0]);

// objects
const myProfile = {
  myName: "stephen",
  myAge: 16,
  myHeight: "5ft 6inches",
  myObject: { anyKey: "dfiubiudf" },
  myArray: [12, "duyfuyd"],
};

// operations in javascript.
console.log("my age is " + 16);

// functions
function myFunction(userName, userAge) {
  // create The function,
  // define data in the function
  // return values in the funcition  with the return key word
  const myProfile2 = {
    myName: userName,
    myAge: userAge,
  };
  return myProfile2;
}
// log the result ........ the function
console.log(myFunction("lord petyr baelish", 60));
console.log(myFunction("lady stark", 58));

// introducing methods
const newObjects = {
  myShool: "tetairy institution",
  greet() {
    // alert("hello world")
  },
};

newObjects.greet();

let name = "stephen";

console.log(name.length);

const personalData = ["stephen", 16, "5ft 6inches"];
console.log(personalData)
