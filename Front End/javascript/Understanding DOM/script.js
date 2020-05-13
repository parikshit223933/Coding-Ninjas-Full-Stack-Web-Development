var hello_button2 = document.getElementById('btn2');
function alerter() {
    window.alert('Hello!!');
}
function alerter_bye() {
    window.alert('bye');
}
hello_button2.addEventListener('click', alerter);
hello_button2.addEventListener('click', alerter_bye);