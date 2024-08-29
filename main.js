let grade = 0;

const correctAnswer = ["A","C","D","B"] //Declaración de respuestas correctas según ek número de preguntas preestablecidas

const button = document.querySelector('button'); //lamamos el boton

button.addEventListener('click',test)

function test(){

    let disableAnswers = document.querySelectorAll('select');
    disableAnswers.forEach(function(select) {
    select.disabled = true;
    });

    //Se crea un for que itera sobre el arreglo correctAnswer para ir evaluando cada respuesta
    for (let i= 0; i< correctAnswer.length; i++){ 
        let userAnswer = document.querySelector('#question'+(i+1)).value; //obtiene la respuesta del usuario
        let feedback =  document.querySelector('.statusanswer' + (i + 1));
        //Evaluación de la respuesta
        if (userAnswer === correctAnswer[i]){
            grade += 1;
            feedback.textContent = "La respuesta a la pregunta " + (i + 1) + " es correcta.";
        }else{
            feedback.textContent = "La respuesta a la pregunta " + (i + 1) + " es incorrecta.";
        }
    }
    
    // calculo de nota final
    grade = (grade * (10/4)); 

    //Se crea un espacio de visualización para ver la nota 

    const headerContainer = document.createElement('header');
    headerContainer.className = 'header-container';

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = 'Nota final: ' + grade;

    headerContainer.appendChild(title);
    document.body.appendChild(headerContainer);


}

