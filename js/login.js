
document.getElementById('btn-login').addEventListener('click', function(){
    const email = getInputElementValueById('user-email');
    const password = getInputElementValueById('user-password');
    
    if(email === 'ranasheikh@gmail.com' && password === '12345'){
        window.location.href = 'bank.html';
    }
    else{
        alert("You have entered wrong email or password");
    }

})