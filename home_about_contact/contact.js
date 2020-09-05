let mail = document.getElementById('emailid');
let regex_mail = /^([\w \. - _]+)@([\w -]+)\.([a-z]{2,7})([\. a-z]{2,7})?$/;

function toValidate() {
    if (regex_mail.test(mail.value)) {
        alert('Thank you');
    }
    else {
        alert('Please enter valid email ID');
    }
}