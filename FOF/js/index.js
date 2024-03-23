const buttonCheck = document.getElementById(buttonID);
let previousAnswer = null;

function showAnswer() {
    const textInput = document.getElementById('inputID').value;
    const answer = document.getElementById('answer');

    if (textInput.trim() !== '') {
        if (previousAnswer === null || textInput !== previousAnswer) {
            previousAnswer = textInput;
            answer.textContent = Math.random() > 0.5 ? 'Да' : 'Нет';
            answer.className = answer.textContent === 'Да' ? 'yes' : 'no';

            // Отобразить текст в течение 6 секунд
            setTimeout(() => {
                answer.textContent = '';
                answer.className = '';
            }, 3000);
        }
    } else {
        answer.textContent = '';
        answer.className = '';
    }
}

function simulateEarthquake() {
    const answer = document.getElementById('answer');
    answer.textContent = 'Землетрясение!';
    answer.className = 'earthquake';

    // Вернуть обычный текст через 2 секунды
    setTimeout(() => {
        answer.textContent = '';
        answer.className = '';
    }, 2000);
}