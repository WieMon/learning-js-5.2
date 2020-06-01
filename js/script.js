const input = document.querySelector('input');
const passwords = ['jedEN', 'DwA'];
const messages = ['super', 'it works!']
const div = document.querySelector('div');

//1. changing the array
passwords.forEach((password, index) => {
  passwords[index] = password.toLowerCase();
  //console.log(passwords[index]);
 })
 
 //2. creating a new array
 const LCPasswords = passwords.map(password => password.toLowerCase())

//3. changing the letter size inside the function only

// const showMessage = (e) => {
//   const text = e.target.value;
 
//   passwords.forEach((password, index) => {
//     if(password.toUpperCase() === text.toUpperCase()) {
//       div.textContent = messages[index];
//       e.target.value = '';
//     } 
//   })
// }

//1. changing the array

// const showMessage = (e) => {
//   const text = e.target.value.toLowerCase();
 
//   passwords.forEach((password, index) => {
//     if(password === text) {
//       div.textContent = messages[index];
//       e.target.value = '';
//     } 
//   })
// }

//2. creating a new array
const showMessage = (e) => {
  const textInput = e.target.value.toLowerCase();
 
  for (let i = 0; i < LCPasswords.length; i++) {
   if (textInput === LCPasswords[i]) {
    div.innerHTML = messages[i];
   }
  }
 }

input.addEventListener('input', showMessage)