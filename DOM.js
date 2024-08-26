const headerContainer = document.createElement('header');
headerContainer.className = 'header-container';

const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Titulo Quiz';

headerContainer.appendChild(title);
document.body.appendChild(headerContainer);

const main = document.createElement('main');

const questions = [
    "Pregunta 1",
    "Pregunta 2",
    "Pregunta 3",
    "Pregunta 4"
];

questions.forEach((questionText, index) => {
    const containerQuestion = document.createElement('div');
    containerQuestion.className = 'container-question';

    const question = document.createElement('p');
    question.className = 'question';
    question.textContent = questionText;

    const select = document.createElement('select');
    select.name = 'questions';
    select.id = `question${index + 1}`;

    const defaultOption = document.createElement('option');
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = 'Seleccione un item';

    select.appendChild(defaultOption);

    ['A', 'B', 'C', 'D'].forEach(optionValue => {
        const option = document.createElement('option');
        option.value = optionValue;
        option.textContent = optionValue;
        select.appendChild(option);
    });

    containerQuestion.appendChild(question);
    containerQuestion.appendChild(select);
    main.appendChild(containerQuestion);
});

const registerButton = document.createElement('button');
registerButton.className = 'register-button';
registerButton.type = 'button';
registerButton.textContent = 'Registrar respuestas';

registerButton.addEventListener('click', () => {
    const responses = questions.map((_, index) => document.getElementById(`question${index + 1}`).value);

    if (responses.every(response => response)) {
        alert(`Respuestas seleccionadas:\n${responses.map((res, idx) => `Pregunta ${idx + 1}: ${res}`).join('\n')}`);
    } else {
        alert('Por favor, responda todas las preguntas antes de registrar sus respuestas.');
    }
});

main.appendChild(registerButton);

document.body.appendChild(main);
