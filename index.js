// Object metodlariga oid masalalar

// 1-masala

// function returnAllKeysOfObjects(obj) {
//     return Object.keys(obj);
// }
// let bmw = {
//     name: 'BMW',
//     year: '2024-yil',
//     color: 'black'
// }
// console.log(returnAllKeysOfObjects(bmw));

// 2-masala

// let bmw = {
//     name: 'BMW',
//     year: '2024-yil',
//     color: 'black'
// }

// function returnValuesOfObject(obj) {
//     return Object.values(obj);
// }
// console.log(returnValuesOfObject(bmw));

// 3-masala

// let bmw = {
//     name: 'BMW',
//     year: '2024-yil',
//     color: 'black'
// }

// function returnEntriesOfObject(obj) {
//     return Object.entries(obj);
// }
// console.log(returnEntriesOfObject(bmw));

// 4-masala

// function freezeObject(obj) {
//     Object.freeze(obj);
//     return obj;
// }

// let person = freezeObject({
//     name: 'Johon',
//     age: 24,
//     address: {
//         street: '123 Main St',
//         city: 'New York'
//     }
// });

// person.age = 25;
// person.address.city = 'Los Angeles';


// console.log(person);

// Massivga oid masalalar

// 1-masala

// function sliceMiddle(arr) {
//     return arr.slice(Math.floor(arr.length / 2) - 1, Math.floor(arr.length / 2) + 2);
// }

// 2-masala

// function customSplice(arr, numToAdd, index) {
//     arr.splice(index, 0, ...Array.from({length: numToAdd}, () => Math.floor(Math.random() * 100)));
//     return arr;
// }

// 3-masala

// function concatArrays(arr1, arr2, arr3) {
//     return arr1.concat(arr2, arr3);
// }

// 4-masala

// function findCubeIndex(arr, value) {
//     let index = arr.indexOf(value);
//     return index !== -1 ? Math.pow(index, 3) : false;
// }

// 5-masala

// function findLastIndex(arr, element) {
//     return arr.lastIndexOf(element);
// }

// 6-masala

// function checkElementInArrays(arr1, arr2, element) {
//     return arr1.includes(element) && arr2.includes(element);
// }

// 7-masala

// function includesElement(arr, element) {
//     return arr.includes(element);
// }

// 8-masala

// function findAverageOfThreeDigits(arr) {
//     let sum = 0;
//     arr.forEach(num => {
//         if (num >= 100 && num <= 999) {
//             sum += num;
//         }
//     });
//     return sum / arr.length;
// }

// 9-masala

// function transformArray(arr) {
//     return arr.map(num => {
//         if (num % 2 === 0) {
//             return num * num; 
//         } else {
//             return num * num * num;
//         }
//     });
// }

// 10-masala

// function extractLastElements(arr) {
//     return arr.map(str => str.slice(-1));
// }

// 11-masala

// function filterLessThanFourChars(arr) {
//     return arr.filter(str => str.length < 4);
// }

// 12-masala

// function checkAgeAboveEighteen(people) {
//     return people.some(person => person.age > 18);
// }

// 13-masala

// function checkAllNamesContainJon(names) {
//     return names.every(name => name.includes('jon'));
// }

// 14-masala

// function findFirstThreeAndFive(arr) {
//     return arr.find(num => num.toString().length === 3 && num % 5 === 0);
// }

// 15-masala

// function findIndexContainingBek(names) {
//     return names.findIndex(name => name.includes('bek'));
// }