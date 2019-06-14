let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt('ВВедите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {},
    optinalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};


for (let i = 0; i < 2; i++ ) {
    let a = prompt('Введите обязателбную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

    appData.expenses[a] = b;
   
   
}

