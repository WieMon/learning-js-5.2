const input = document.querySelector('input');
const passwords = ['jedEN', 'DwA'];
const messages = ['super', 'it works!']
const div = document.querySelector('div');


const showMessage = (e) => {
  const text = e.target.value;
  const newText = text.toUpperCase();
  
  passwords.forEach((password, index) => {
    if(password.toUpperCase() === newText) {
      div.textContent = messages[index];
      e.target.value = '';
    } 
  })
}

input.addEventListener('input', showMessage)