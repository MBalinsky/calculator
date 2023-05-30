const calc = document.querySelector('.calc');
const calcScreen = document.querySelector('.calc-screen p')

calc.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn')) return;
    if (calcScreen.innerText === '0') {
        calcScreen.innerText = '';
    }
    if (calcScreen.innerText.length > 7) {
        alert('Сорян,но поле не резиновое,уже очищаю...');
        calcScreen.innerText = '0';
    }
    const value = e.target.innerText;

    switch (value) {
        case 'ac':
            calcScreen.innerText = '0';
            break;

        case '=':
            calcScreen.innerText = eval(calcScreen.innerText).toFixed(0);
            break;

        default:
            calcScreen.innerText += value
    }




})