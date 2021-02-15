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

const myProfile = ["せり", 38];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);
