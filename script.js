// Função para mostrar a notificação
function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'flex';
}

// Função para fechar a notificação
function closeNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'none';
}

// Exemplo de como você pode chamar a notificação ao enviar o formulário
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        showNotification();
    });
});
