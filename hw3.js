//1
function numbers(a, b) {
    if (a == b) {
        return ("a  და b ტოლია");
    } else if (a > b) {
        return ("a  მეტია b -ზე")
    } else if (a < b) {
        return ("a  ნაკლებია  b -ზე");
    }
}
console.log(numbers(2, 5));
//2

function findLongestWord(text) {
    const words = text.split(" ");
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const text = "the quick brown fox jumped over the lazy dog";
const longestWord = findLongestWord(text);
console.log("ყველაზე გრძელი სიტყვა: {longestWord}");

//3

function isSumGreaterThan100(a, b) {
    if (a + b > 100) {
        return true;
    } else {
        return false;
    }
}
console.log(isSumGreaterThan100(50, 60)); 
console.log(isSumGreaterThan100(30, 40)); 
//4,5,6,7

function calculateTotalScore(points1, points2, points3) {
    const totalScore = (1 * points1) + (2 * points2) + (3 * points3);
    return totalScore;
}
const ones = 5;   
const twos = 3;   
const threes = 2; 
const gameScore = calculateTotalScore(ones, twos, threes);
console.log(`Total score: ${gameScore}`);

//8
function createArrayFromRange(start, end) {
   
    const resultArray = [];

    for (let i = start; i <= end; i++) {
        resultArray.push(i);
    }

    return resultArray;
}

const startValue = 3;
const endValue = 6;

const resultArray = createArrayFromRange(startValue, endValue);
console.log(resultArray); 
//9

function compareWithRandom(num) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    let result = (num === randomNum);
    return result;
}

console.log(compareWithRandom(1));
//10
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 25
};
function printPersonStatus(personObj) {
    if (personObj.age < 18) {
        console.log(`{personObj.firstname} არასრულწლოვანია`);
    } else {
        console.log(`{personObj.firstname} სრულწლოვანია`);
    }
}

printPersonStatus(person);

