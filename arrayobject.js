//bai 1
let objectArray = [{ value: 10 }, { value: 20 }, { value: 30 }];
let s = 0;
for (let i = 0; i < objectArray.length; i++) {
  s = s + objectArray[i].value;
}
console.log(s);
// bai 2
let objectArray1 = [{ value: 15 }, { value: 25 }, { value: 10 }, { value: 35 }];
let arr = [];
objectArray1.filter((element) => {
  if (element.value > 10) {
    arr.push(element);
  }
});
console.log(arr);
// bai 3
let objectArray2 = [{ value: 5 }, { value: 10 }, { value: 15 }];
let arr1 = [];
for (let i = 0; i < objectArray2.length; i++) {
  arr1.push(objectArray2[i].value);
}
console.log(arr1);
// bai 5
let objectArray3 = [{ value: 30 }, { value: 10 }, { value: 20 }];
for (let i = 0; i < objectArray3.length - 1; i++) {
  for (let j = i + 1; j < objectArray3.length; j++) {
    if (objectArray3[i].value > objectArray3[j].value) {
      let temp = objectArray3[i].value;
      objectArray3[i].value = objectArray3[j].value;
      objectArray3[j].value = temp;
    }
  }
}
console.log(objectArray3);
// bai 4
let objectArray4 = [
  { value: "apple" },
  { value: "banana" },
  { value: "apple" }
];
let count = 0;
let count1 = 0;
objectArray4.filter((element) => {
  if (element.value == "apple") {
    count++;
  } else {
    count1++;
  }
});
let kq = {
  apple: count,
  bannana: count1
};
console.log(kq);
