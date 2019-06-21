    'use strict';


    let money, time;

    function start() {
        money = +prompt("Ваш бюджет на месяц?", '');
        time = prompt('ВВедите дату в формате YYYY-MM-DD', '');

        while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", '');
        }
    }
    start();


    let appData = {
        budget: money,
        expenses: {},
        optinalExpenses: {},
        income: [],
        timeData: time,
        savings: true
    };

    function chooseExpenses() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязателбную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');


            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

            } else {
                i--;
            };
        }
    }
    chooseExpenses();


    function detectedDayBudget() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день состовляет " + appData.moneyPerDay + "руб. ");

    }
    detectedDayBudget();

    function detectLevel() {
        if (appData.moneyPerDay < 100) {
            console.log('Это минимальный уровень достатка!');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Ошибочка ...!");

        }
    }
    detectLevel();

    function checkSaving() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?');
            percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Дохода с вашего депозита в месяц: ' + appData.monthIncome);


        }
    }
    checkSaving();

    function chooseOptExpenses() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt('Статья необязательных расходов?');
            appData.optinalExpenses[i] = questionOptExpenses;
            console.log(appData.optinalExpenses);


        }
    }
    chooseOptExpenses();

    function chooseIncome() {

        let items = prompt("ЧТо принесет дополнительный доход? Перечислите через запятую)", "");
        if (typeof (items) != 'string' || items == "" || typeof (items) == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        }


        appData.income.forEach(function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
        });
    }

    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    }
