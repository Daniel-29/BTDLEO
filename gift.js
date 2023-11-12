document.addEventListener('DOMContentLoaded', (event) => {
    // Espera a que el DOM esté completamente cargado.
  
    // Obtiene el botón por su ID.
    var button = document.getElementById('quiz-button');
  
    // Añade el evento click al botón.
    async function copyTextToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
    
    button.addEventListener('click', function() {
      const codeToCopy = "dh7A-Ucta-tu8w-nqRK-3w2W-wJ7c";
      copyTextToClipboard(codeToCopy);
    });
    
  });
  