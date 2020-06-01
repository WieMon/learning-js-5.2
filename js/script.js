const input = document.querySelector('input');
const passwords = ['jedEN', 'DwA'];
const messages = ['super', 'it works!']
const div = document.querySelector('div');

passwords.forEach((password, index) => {
  passwords[index] = password.toLowerCase();
  //console.log(passwords[index]);
 })
 

// const showMessage = (e) => {
//   const text = e.target.value;
 
//   passwords.forEach((password, index) => {
//     if(password.toUpperCase() === text.toUpperCase()) {
//       div.textContent = messages[index];
//       e.target.value = '';
//     } 
//   })
// }

const showMessage = (e) => {
  const text = e.target.value.toLowerCase();
 
  passwords.forEach((password, index) => {
    if(password === text) {
      div.textContent = messages[index];
      e.target.value = '';
    } 
  })
}

input.addEventListener('input', showMessage)