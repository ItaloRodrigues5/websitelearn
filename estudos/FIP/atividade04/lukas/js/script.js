document.getElementById('submitBtn').addEventListener('click', function(){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação simples
    if(!name || !email || !message){
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verificação de email
    if(!email.includes('@')){
        alert('Por favor, insira um e-mail válido que contenha "@".');
        return;
    }

    // Exibir a mensagem de sucesso
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Mensagem enviada com sucesso!';
    responseMessage.style.color = 'green';

    // Limpar os campos
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';











});

console.log('xuxa');