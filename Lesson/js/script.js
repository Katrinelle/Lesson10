// -----

// localStorage.user = { name: "Ivan" };
// alert(localStorage.user); // [object Object] у вспливаючому вікні

// -----

// localStorage.user = JSON.stringify({ name: "Jon" });

// let user = JSON.parse(localStorage.user);

// alert(user.name); // Jon у вспливаючому вікні
// alert(JSON.stringify(localStorage, null, 2)); // { "user": "{\"name\":\"Jon\"}"

// -----
// робимо, щоб дані заповнені в input не пропадали при перезагрузці

// localStorage.setItem("name", "Kateryna");
// const a = localStorage.getItem("name");
// console.log(a); // Kateryna

// -----
// код для форми

// функція на radio button - check
// eкод, який показує яку стать вибрав користувач

// function check() {
//   let val = document.getElementsByName("radio");
//   if (val[0].checked) {
//     console.log("Жіноча");
//   } else {
//     console.log("Чоловіча");
//   }
// }

// let form = document.querySelector(".form");
// let nameInput = document.querySelector(".inputName");
// let lastNameInput = document.querySelector(".inputLastName");
// let age = document.querySelector("#age");
// let male = document.getElementsByName("radio");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const info = {
//     name: nameInput.value,
//     lastName: lastNameInput.value,
//     age: age.value,
//     male: male[0].checked,
//   };
//   console.log(info); // name: 'Kateryna', lastName: 'gh', age: 'on', male: true
//   localStorage.setItem("info", JSON.stringify(info)); // передаємо обєкт, як строку (string)
//   //   localStorage.setItem("info", info);
// }

// const a = localStorage.getItem("info");

// // console.log(a); // [object Object]
// // console.log(JSON.parse(a)); // name: 'Kateryna', lastName: 'gh', age: 'on', male: true

// if (localStorage.getItem("info")) {
//   const ls = JSON.parse(localStorage.getItem("info")); // залишає у формі ввдені раніше дані
//   console.log(ls);
//   nameInput.value = ls.name; // Катеріна в графі імя
//   lastNameInput.value = ls.lastName; // Фамілія в графі фамілія
// }

// є більш оптимізований код

// -----

// let form = document.querySelector("#form");
// let formData = {};

// form.addEventListener("input", function (event) {
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem("formData", JSON.stringify(formData));
// });

// // відновлюємо

// if (localStorage.getItem("formData")) {
//   formData = JSON.parse(localStorage.getItem("formData"));

//   for (let key in formData) {
//     form.elements[key].value = formData[key];
//   }
// }

// -----
