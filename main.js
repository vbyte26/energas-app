document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      // Redirigir a otra pantalla después del login
      window.location.href = "consulta.html";
    });
  }
});
