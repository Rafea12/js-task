//task 1

function findLargestProductSubarray() {
    const input = prompt("Enter the integer array separated by commas (e.g., 2,3,-2,4):");
    const nums = input.split(",").map(Number);

    if (nums.length === 0) {
        alert("Invalid input. Please enter at least one integer.");
        return;
    }

    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const tempMax = Math.max(nums[i], maxProd * nums[i], minProd * nums[i]);
        minProd = Math.min(nums[i], maxProd * nums[i], minProd * nums[i]);

        maxProd = tempMax;

        result = Math.max(result, maxProd);
    }

    alert("The largest product of a subarray is: " + result);
}


findLargestProductSubarray();
  //task 2

function twoSum(nums, target) {
    const numIndexMap = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (numIndexMap.hasOwnProperty(complement)) {
            return [numIndexMap[complement], i];
        }
        numIndexMap[num] = i;
    }
    return null;
}
//task 3
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
let originalString = " i love javascript";
let reversedString = reverseString(originalString);
console.log(reversedString); 

 //task 4

let library = [
    {
        author: 'BILL GATES',
        title: 'A ROAD AHEAD',
        readingStatus: true
    },
    {
        author: 'SUAZZANE COLLINS',
        title: 'MOKINGJAG: THE FINAL BOOK OF HUNGER GAME',
        readingStatus: false
    },
    {
        author: 'STEVE JOBS',
        title: 'WALTER ISSCSON',
        readingStatus: true
    }
];


function displayReadingStatus(library) {
    for (let book of library) {
        let status = book.readingStatus ? 'already read' : 'not yet read';
        console.log(`Title: ${book.title}, Author: ${book.author}, Status: ${status}`);
    }
}
displayReadingStatus(library);

//task 5
function amountToCoins(amount, coins) {
    let result = [];
    let index = 0;

    while (amount > 0 && index < coins.length) {
        const coin = coins[index];
        if (amount >= coin) {
            const count = Math.floor(amount / coin);
            for (let i = 0; i < count; i++) {
                result.push(coin);
                amount -= coin;
            }
        }
        index++;
    }

    return result;
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));


