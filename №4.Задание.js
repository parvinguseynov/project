let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) { // isNaN - возвращает true, если будут буквы вместо цифр, '' - пустая строка, null - если нажмет кнопку отмена. Если один из этих условий выполниться, то цикл будет повториться заново
        money = prompt('Ваш бюджет на месяц?', '');
    }
}


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
    
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                // === 'string' - обязательный ввод строки, != null - при нажатии на отмену не будет выполняться тело функции, != '' - запрет оставлять строку пустой,
                // .length < 50 - лимит на ввод символов
                console.log('done');
                appData.expenses[a] = b;
            } else {
                console.log("bad result");
                i--; // Чтобы при не выполнении условия, вопросы задавались повторно
            };
        };
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(); // toFixed() - округление числа до первого целого. если в скобках будет (1), то до первой цифры после запятой
        alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        };
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome.toFixed()}`);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let c = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = c;
    
        };
    },
    chooseIncome: function () {

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", "); // split вносит в массив. Запятая - разделитель
            appData.income.push(prompt("Может что-то еще?")); // Добавление элемента ввиде строки в конец массива
            appData.income.sort();// сортировка по алфавиту
        }
    
        appData.income.forEach (function (itemmassive, i) {
            alert(`Способы дополнительного заработка: ${i + 1} - ${itemmassive}`);
        });
    
    }
};

// start();
// chooseExpenses();
// checkSavings();
// detectDayBudget();
// chooseOptExpenses();
// appData.chooseIncome();

for (let key in appData) {
    console.log(`Наша программа включает в себя данные: ${key} - ${appData[key]}`);
}

