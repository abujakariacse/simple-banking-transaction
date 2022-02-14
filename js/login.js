// Button Event Handler Adding & taking value from input field
document.getElementById('login-btn').addEventListener('click',function(){
    console.log('clicked');
    
    const emailInput = document.getElementById('email-field');
    const email = emailInput.value;

    const passwordInput = document.getElementById('password-field');
    const password = passwordInput.value;
    
    // Comaparing Email and password
    if(email.toLowerCase() == 'admin' && password == 'admin'){
        window.location.href='./innerPage/banking.html';
    }
    else{
        loginError('email-field')
        loginError('password-field')
        document.getElementById('error-message').style.display = 'block';
    }
})

//Fake Login Credential Error Throw
function loginError(id){
    const error = document.getElementById(id);
    error.style.border = '2px solid red';
    error.style.color='red';
    
}
