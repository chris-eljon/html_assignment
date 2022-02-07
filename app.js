let pass = document.getElementById('password');
let confirmpass = document.getElementById('cpassword');
    function validatePassword() {
        if((confirmpass.value != '')||(pass.value != confirmpass.value)) {
            document.getElementById('errorMsg').innerHTML="Passwords don't match";
        } else {
            document.getElementById('errorMsg').innerHTML="";
        }
    }
    pass.onchange = validatePassword;
    confirmpass.onkeyup = validatePassword;