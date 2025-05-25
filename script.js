document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-contacto');
  const respuesta = document.getElementById('respuesta');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      respuesta.textContent = "Por favor, completa todos los campos.";
      respuesta.style.color = "red";
      return;
    }
    respuesta.textContent = "¡Gracias por tu mensaje!";
    respuesta.style.color = "green";
    form.reset();
  });
});
