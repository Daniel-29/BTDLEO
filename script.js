document.addEventListener('DOMContentLoaded', (event) => {
    const countdownElement = document.getElementById('countdown');
    const birthdayMessage = document.getElementById('birthday-message');
    const quizContainer = document.getElementById('quiz-container');
    const startQuizButton = document.getElementById('start-quiz');

    const countdownDate = new Date('Nov 11, 2023 22:57:00').getTime();

    let countdownFunction = setInterval(function() {
        let now = new Date().getTime();
        let distance = countdownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerText = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(countdownFunction);
            countdownElement.style.display = 'none';
            birthdayMessage.style.display = 'block';
        }
        
    }, 1000);

    startQuizButton.addEventListener('click', function() {
        birthdayMessage.style.display = 'none';
        quizContainer.style.display = 'block';
        // Inicializar el quiz aquí
    });

    // Funciones adicionales para manejar el quiz
    
});
