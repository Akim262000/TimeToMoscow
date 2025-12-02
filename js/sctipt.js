function getWordForm(num, forms) {
    let n = Math.abs(num);
    n %= 100;
    if (n >= 11 && n <= 14) {
        return forms[2];
    }
    n %= 10;
    if (n === 1) {
        return forms[0];
    }
    if (n >= 2 && n <= 4) {
        return forms[1];
    }
    return forms[2];
}

// Функция для склонения слова "день"
function getDayWord(num) {
    const lastTwoDigits = num % 100;
    const lastDigit = num % 10;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return 'дней';
    }
    switch (lastDigit) {
        case 1:
            return 'день';
        case 2:
        case 3:
        case 4:
            return 'дня';
        default:
            return 'дней';
    }
}

function updateCountdown() {
    // Укажите вашу целевую дату и время здесь
    const targetDate = new Date(2025, 11, 31, 12, 09, 0); // 28 ноября 2025, 14:30
    const now = new Date();

    let diff = targetDate - now;
    if (diff < 0) diff = 0; // если прошло уже время

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / (24 * 3600));
    let remainingSeconds = totalSeconds % (24 * 3600);
    const hours = Math.floor(remainingSeconds / 3600);
    remainingSeconds %= 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    // Отображаем дни с правильным склонением
    document.getElementById('days').textContent = days + ' ' + getDayWord(days);

    // Отображаем часы
    const hourWord = getWordForm(hours, ['час', 'часа', 'часов']);
    document.getElementById('hours').textContent = hours + ' ' + hourWord;

    // Минуты
    const minuteWord = getWordForm(minutes, ['минута', 'минуты', 'минут']);
    document.getElementById('minutes').textContent = minutes + ' ' + minuteWord;

    // Секунды
    const secondWord = getWordForm(seconds, ['секунда', 'секунды', 'секунд']);
    document.getElementById('seconds').textContent = seconds + ' ' + secondWord;
}

// Обновляем каждую секунду
setInterval(updateCountdown, 1000);
// Также вызываем сразу для отображения
updateCountdown();