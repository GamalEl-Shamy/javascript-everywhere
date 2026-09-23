const message = document.getElementById('message');
const changeTextBtn = document.getElementById('changeTextBtn');
const consoleBtn = document.getElementById('consoleBtn');

changeTextBtn.addEventListener('click', () => {
    message.textContent = 'Text has been changed!';
}); 

consoleBtn.addEventListener('click', () => {
    console.log('Button clicked!');
});