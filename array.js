// bai 1
// cach 1:
let originalArray = [1, 2, 3, 4, 5];
let arr = [];
let list = [];
for (let i = 0; i < originalArray.length; i++) {
  let kq = originalArray[i] * 2;
  arr.push(kq);
}
// cach 2:
originalArray.map((element) => {
  list.push(element * 2);
});
console.log(arr);
console.log(list);
// bai 2

let stringArray = ["apple", "banana", "cherry"];
let arr1 = [];
for (let i = 0; i < stringArray.length; i++) {
  let kq1 = stringArray[i].toUpperCase();
  arr1.push(kq1);
}
console.log(arr1);
// bai 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [];
numbers.filter((element) => {
  if (element % 2 == 0) {
    arr2.push(element);
  }
});
console.log(arr2);
// bai 4
const words = ["apple", "banana", "cherry", "date", "elderberry"];
const arr3 = [];
words.filter((element) => {
  if (element.length > 5) {
    arr3.push(element);
  }
});
console.log(arr3);
