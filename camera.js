document.addEventListener("DOMContentLoaded", () => {
  const startCamera = document.getElementById("startCamera");
  const video = document.getElementById("camera");

  if (startCamera) {
    startCamera.addEventListener("click", async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
      } catch (err) {
        alert("Error al acceder a la cámara: " + err.message);
      }
    });
  }
});
