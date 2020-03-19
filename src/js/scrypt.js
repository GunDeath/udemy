let money, time;
	
	
function start() {
	while(isNaN(money) || money == '' || money == null){
		money = prompt("Ваш бюджет на месяц?", '');
	}
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseEcpenses(){
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');

	if(typeof(a) === String && typeof(a) !== null && a!== ''  && typeof(b) !== null && b!== ''){
		console.log('done');
		appData.expenses[a] = b;
	}
}

chooseEcpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(2);

alert(appData.moneyPerDay);

function detectLevel(){
	if(appData.moneyPerDay < 100){
		console.log("Low money")
	}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
		console.log("Medium money")
	}else if(appData.moneyPerDay > 2000 && appData.moneyPerDay < 20000){
		console.log("Hight money")
	}else{
		console.log('You have misstake');
	}
};

detectLevel();


function checkSaving() {
	if(appData.savings === true){
		let save = +prompt('какова сумма накоплений? '),
			percent = +prompt('под какой процент? ');

		appData.monthInCome = save/100/12*percent;
		alert(`Доход в месяц с депозита: ${appData.monthInCome}`);
	}
}

checkSaving();

function detectDayBudget(){
	let aaas = appData.moneyPerDay, b = appData.monthInCome/30, c;
	c = parseFloat(aaas) + b;
	c.toFixed(2);
	console.log(c)
	alert(`Доход со всех прибылей в день: ${ c }`);
}

detectDayBudget();

function chooseOptExpenses(){
	for(let i =0; i < 2; i++){
		let stat = prompt('статья расхода необязательная: ');
		appData.optionalExpenses[i] = stat;
	}
}