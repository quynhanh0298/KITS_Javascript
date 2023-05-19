// console.log("Hello world");
// const multiple = (a, b) => a * b;
// const chanLe = (i) => (i % 2 == 0 ? console.log("chan") : console.log("le"));
// const xinChao = (name) => console.log(`Xin chao, ${name}`);
// const xinChaoAge = (name, age) => console.log(`Xin chao ${name} ${age} tuoi`);

// function dtb(x) {
//   //   if (x < 0) {
//   //     document.write("diem khong hop le");
//   //   } else if (x < 5) {
//   //     document.write("Khong dat");
//   //   } else if (x < 6.5) {
//   //     document.write("Dat");
//   //   } else if (x < 8) {
//   //     document.write("Kha");
//   //   } else if (x <= 10) {
//   //     document.write("Gioi");
//   //   } else {
//   //     document.write("diem khong hop le");
//   //   }

//   switch (true) {
//     case x < 0:
//       document.writeln("diem khong hop le");
//       break;
//     case x < 5:
//       document.write("Khong dat");
//       break;
//     case x < 6.5:
//       document.write("Dat");
//       break;
//     case x < 8:
//       document.write("Kha");
//       break;
//     case x <= 10:
//       document.write("Gioi");
//       break;
//     default:
//       document.write("diem khong hop le");
//       break;
//   }
// }

// const cau1 = (x) => {
//   for (let i = 0; i < x; i++) {
//     document.writeln(i);
//   }
// };

// let s = 0;
// for (let i = 1; i <= 100; i++) {
//   s += i;
// }
// document.writeln(s);

// for (let i = 0; i <= 10; i++) {
//   document.writeln(`<br>${i} x 9 = ${i * 9}`);
// }

// document.getElementById("introduce").style.color = "cyan";
// document.getElementsByClassName("introduce")[0].style.color = "pink";
// document.getElementById("introduce").innerHTML = "I am Quynh Anh";

// const para = document.createElement("p");
// para.innerHTML = "Quynh Anh cute";
// para.style.color = "gray";
// document.body.appendChild(para);

// const changeName = () => {
//   document.getElementById("myName").innerHTML = "Quynh Anh";
// };

// const myFunc = () => {
//   document.getElementById("input").style.background = "pink";
// };

// const students = ["Vỹ", "Khương", "Quỳnh Anh", "Nhất Anh", "Tiến Anh"];
// console.log(`chiều dài của array students là ${students.length}`);

// const viTri = students.indexOf("Nhất Anh");
// console.log(`Vị trí index của Nhất Anh là ${viTri}`);
// students.shift();
// console.log(students);
// const chuoiTen = students.join(" - ");
// students.slice(students.indexOf("Quỳnh Anh"));
// const students2 = ["Sơn Anh", "Phước"];
// console.log(students2.concat(students));

// console.log(Math.random());

// Math.floor(Math.random() * 100) + 1;

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };
// console.log(Object.keys(person));

// console.log(Object.values(person));

// let originalString = "Lop hoc web cua KITS";

// console.log(originalString.length);
// console.log(originalString.slice(8, 11));
// console.log(originalString.replaceAll(" ", ","));
// const check = (someString) => {
//   someString.includes("Dev") ? console.log("Yes") : console.log("No");
// };
// check("ABC Dev  ");

const isPrimeNumber = (n) => {
  if (n < 2) {
    console.log("No");
    return;
  }
  if (n == 2) {
    console.log("Yes");
    return;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
};

isPrimeNumber(13);

const sum = (n) => {
  let s = 0.0;
  for (let i = 1; i <= n; i++) {
    s += i / n;
  }
  console.log(s);
};
sum(3);
