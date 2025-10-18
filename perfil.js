// Acciones de los botones de la pantalla Perfil
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');

  // Ejemplo: cerrar sesión (ajusta a tu flujo real)
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      // Limpia sesión, tokens, etc. y vuelve al login
      window.location.href = 'index.html';
    });
  }
});
