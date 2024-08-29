function login() {
    const modmeId = document.getElementById('modmeId').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    

    

    const correctModmeId = '123456';
    const correctPassword = '78900';
    
    if (modmeId === correctModmeId && password === correctPassword) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Kirish muvaffaqiyatli! Siz spacega kirdingiz.';
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'ID yoki parol xato. Iltimos, qayta urinib ko\'ring.';
    }

    console.log(modmeId, password);

   
    

}