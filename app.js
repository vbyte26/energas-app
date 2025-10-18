// Toggle mostrar/ocultar contraseña
(function(){
  const btn = document.querySelector('.pwd-toggle');
  const input = document.getElementById('password');
  if(btn && input){
    btn.addEventListener('click', () => {
      const show = input.getAttribute('type') === 'password';
      input.setAttribute('type', show ? 'text' : 'password');
      btn.setAttribute('aria-pressed', String(show));
      // Mover el foco de vuelta al campo para accesibilidad
      input.focus();
    });
  }
})();

// Manejo sencillo del envío (demo)
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value.trim();
  if(!usuario || !password){
    alert('Completa usuario y contraseña');
    return;
  }
  // TODO: Reemplaza por tu lógica real de autenticación
  alert('Login enviado');
});
