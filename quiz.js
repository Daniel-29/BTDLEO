// Este es el contenido de tu archivo quiz.js
document.addEventListener('DOMContentLoaded', function () {
    const quizDataUrl = 'json/questions.json';
    let currentQuestionIndex = 0;
    let quizData = [];

    fetch(quizDataUrl)
        .then(response => response.json())
        .then(data => {
            quizData = data;
            showQuestion(currentQuestionIndex);
        })
        .catch(error => {
            console.error('Error al cargar las preguntas:', error);
        });

    function showQuestion(index) {
        const questionData = quizData[index];
        const questionCountElement = document.getElementById('question-count');
        const questionElement = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const imageElement = document.getElementById('question-image');
        const nextButton = document.getElementById('next-question');

        questionCountElement.textContent = `Pregunta ${index + 1}/${quizData.length}`;
        questionElement.textContent = questionData.question;
        imageElement.src = questionData.image;
        optionsContainer.innerHTML = '';

        questionData.options.forEach(option => {
            const optionElement = document.createElement('button');
            optionElement.textContent = option;
            optionElement.className = 'option';
            optionElement.onclick = () => selectOption(optionElement, questionData.correct_answer);
            optionsContainer.appendChild(optionElement);
        });

        nextButton.classList.remove('visible');
    }

    function selectOption(selectedOption, correctAnswer) {
        const options = document.querySelectorAll('.option');
        const nextButton = document.getElementById('next-question');

        // Deshabilitar todas las opciones una vez que el usuario hace una selección
        options.forEach(optionElement => {
            optionElement.disabled = true;
            if (optionElement.textContent === correctAnswer) {
                // Pintar de verde la opción correcta
                optionElement.classList.add('correct');
            }
        });

        // Si la opción seleccionada no es la correcta, pintarla de rojo
        if (selectedOption.textContent !== correctAnswer) {
            selectedOption.classList.add('incorrect');
        }

        // Mostrar el botón de siguiente pregunta
        nextButton.classList.add('visible');
    }


    document.getElementById('next-question').addEventListener('click', function () {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion(currentQuestionIndex);
        } else {
            // Aquí puedes manejar el final del cuestionario, como mostrar los resultados o reiniciar el cuestionario.
            window.location.href = 'gift.html';
            // Es posible que desees redireccionar al usuario o reiniciar el cuestionario.
        }
    });
});
