
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resetForm');
  const user = document.getElementById('resetUser');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = user.value.trim();

    if (!value) {
      alert('Por favor, ingresa tu usuario.');
      user.focus();
      return;
    }


    alert('Si el usuario existe, enviaremos un correo con instrucciones para restablecer tu contraseña.');

  });
});
