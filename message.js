document.addEventListener('DOMContentLoaded', (event) => {
    // Espera a que el DOM esté completamente cargado.
  
    // Obtiene el botón por su ID.
    var button = document.getElementById('quiz-button');
  
    // Añade el evento click al botón.
    button.addEventListener('click', function() {
      // Cambia la ubicación de la ventana a la URL deseada.
      window.location.href = 'quiz.html';
    });
  });
  