// Función para redirigir a WhatsApp
function contactarWhatsApp(producto) {
    const numeroTelefono = "123456789"; // Cambia esto por el número real
    const url = `https://wa.me/${numeroTelefono}?text=Hola, estoy interesado en ${producto}`;
    window.open(url, '_blank');
  }
  
  // Función para el formulario de contacto (opcional)
  document.getElementById('form-contacto')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;
  
    alert(`Gracias, ${nombre}. Tu mensaje ha sido enviado.`);
  });
  