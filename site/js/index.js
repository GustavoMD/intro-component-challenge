/**
 * This will contain the application interactive behavior.
 */
// global variables

let inputs = document.querySelectorAll('.form-input');
let alertEmptyField = document.querySelectorAll('.empty-field-alert')
let form = document.querySelector('.form-wrapper > form');
let email = document.querySelector('#email');

email.addEventListener('keypress', function() {
    email.classList.remove('red-text');
});

form.addEventListener('submit', verifyData);

function verifyDatsa() {
    alert('teste');
}


function verifyData(e) {
    let verify = true
    inputs.forEach((input, i) => {
        if (input.value == '') {
            e.preventDefault();
            alertEmptyField[i].style.display = 'block';
            alertEmptyField[i].textContent = input.placeholder + ' cannot be empty'
            verify = false;
        } else {
            alertEmptyField[i].style.display = 'none';
        }
        if (input.value != '' && input.id == 'email' && !validateEmail(input.value)) {
            input.classList.add('red-text');
            alertEmptyField[i].style.display = 'block';
            alertEmptyField[i].textContent = 'Looks like this is not an email'
            verify = false;
        } else {
            input.classList.remove('red-text');
        }
    });
    if (verify) {
        alert('Your free trial was claimed');
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}