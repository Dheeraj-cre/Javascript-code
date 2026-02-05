const number = [2,4,3,13,12,11,17,29]

// for (let i=0; i < number.length;i++){
//     console.log(number[i])
// }

// number.forEach(number =>console.log(number));

// for (let i= 0; i < number.length; i++){
//     if (number[i] %2 === 0){
//     console.log(number[i]);
// }
// }

// for (let i=0; i < number.length; i++){
//     if (number[i]%2 !== 0){
//         console.log(number[i]);
//     }
// }
// 3. Count how many EVEN numbers

// let count = 0

// number.forEach(number => {
//     if (number%2==0) count ++;
// });
// console.log(count)
// 4. Create a NEW array of EVEN numbers (filter)

// const evenNumbers = number.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// 5. Square every number (map)

// const square = number.map(num=> num *num);
// console.log(square);

// 6. Find the LARGEST number

// let max = number[0];

// for(let i = 0; i < number.length; i++){
//     if (number[i] > max){
//         max = number[i];
//     }
// }
// console.log(max);

// let sum = 0
// number.forEach(num=> sum+= num);
// console.log(sum);

// check the number exists
// const exists = number.includes(19);
// console.log(exists);


// const result = number.find(num => num > 10);
// console.log(result);

// let sum = 0;
// for(let i = 0; i < number.length; i++){
//     if(number[i]%2 === 0){
//     sum += number[i];

// }
// }
// console.log(sum);

// Reverse the array
// const reversed = [...number].reverse();
// console.log(reversed);

// Sort array in ascending order

const shorted = [...number].sort((a,b)=> a-b);
console.log(shorted);



let num = [12, 14, 13, 74, 19, 37, 29];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}





