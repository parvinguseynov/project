let money, time;

function start() {
    money = prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет на месяц?', '');
    }
}

start()


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
    }

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i = i - 1;
    }
}

chooseExpenses()

appData.moneyPerDay = (appData.budget / 30).toFixed();






let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


let a = prompt('Введите обязательную статью расходов в этом месяце: '),
    b = prompt('Во сколько обойдется?: '),
    answerA = a,
    answerB = b;

appData.expenses[answerA] = answerB;


alert(appData.budget / 30);
console.log(appData);
