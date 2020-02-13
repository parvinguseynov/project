let money = +prompt('Ваш бюджет на месяц?', ''), // знак плюса ставим, когда мы собираемся получать от пользователя число, а не строку (prompt возвращает всегда строку)
    time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


// let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
//     a2 = prompt('Во сколько обойдется?', ''),
//     a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
//     a4 = prompt('Введите обязательную статью расходов в этом месяце', '');

// appData.expenses[a1] = a2;
// appData.expenses[a3] = a4;

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
        // === 'string' - обязательный ввод строки, != null - при нажатии на отмену не будет выполняться тело функции, != '' - запрет оставлять строку пустой,
        // .length < 50 - лимит на ввод символов
        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log ("bad result");
        i--; // Чтобы при не выполнении условия, вопросы задавались повторно
    };
};

appData.moneyPerDay = appData.budget / 30;

alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);




if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}

console.log(appData); 
