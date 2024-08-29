let grade = 0;

const correctAnswer = ["A","C","D","B"]

const button = document.querySelector('button');

button.addEventListener('click',test)

function test(){
    for (let i= 0; i< correctAnswer.length; i++){
        let userAnswer = document.querySelector('#question'+(i+1)).value;
        if (userAnswer === correctAnswer[i]){
            grade += 1;
            alert("La respuesta a la pregunta " + (i+1) +" es correcta.")
        }else{
            alert("La respuesta a la pregunta " + (i+1) +" es incorrecta.")
        }
    }
    grade = (grade * (10/4));
    alert("Su nota final es: " + grade)
}

