// //アロー関数省略
// const func21 = (str) => str;
// console.log(func21("func21です"));

// const func3 = (num1, num2) => num1 - num2;
// console.log(func3(10, 20));

//分割代入
// const myProfile = {
//   name: "せり",
//   age: 38
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// const myProfile = ["せり", 38];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// //デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("じゃけぇ");

//スプレット構文...
//配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2=[1,2,3,4,5];
// const [num1, num2, ...arr3]= arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5]
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

//mapとfilter
const nameArr = ["田中", "山田", "じゃけぇ"];
// nameArr.map((name) => console.log(name));
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);
