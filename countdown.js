// Establece la fecha y hora de finalización de la cuenta regresiva
const countDownDate = new Date("Nov 12, 2023 14:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
const x = setInterval(function() {

  // Obtiene la fecha y hora actual
  const now = new Date().getTime();

  // Encuentra la distancia entre ahora y la fecha de la cuenta regresiva
  const distance = countDownDate - now;

  // Calcula el tiempo para días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Muestra el resultado en el elemento con id="countdown"
  document.getElementById("countdown").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // Si la cuenta regresiva termina, redirecciona a otro HTML
  if (distance < 0) {
    clearInterval(x);
    window.location.href = "message.html"; // Cambia esto por tu URL
  }
}, 1000);
