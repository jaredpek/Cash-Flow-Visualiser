const minAge = 0, maxAge = 150;

export function generateList(increment) {
    let balances = [];

    if (!increment) {
        for (let i = minAge; i <= maxAge; i ++) {
            balances.push(0);
        }
    }
    else{
        for (let i = minAge; i <= maxAge; i ++) {
            balances.push(i);
        }
    }

    return balances
}

export function computeIncome(entries) {
    let incomes = generateList(false);
    entries.forEach(({annualAmount, startAge, endAge}) => {
        for (let i = startAge; i <= endAge; i ++) {
            incomes[i] += annualAmount;
        }
    })
    return {incomes};
}

export function computeExpense(entries) {
    let expenses = generateList(false);
    entries.forEach(({annualAmount, startAge, endAge}) => {
        for (let i = startAge; i <= endAge; i ++) {
            expenses[i] += annualAmount;
        }
    })
    return {expenses};
}

export function computeInvestment(entries) {
    let principal = generateList();
    let investments = generateList();
    entries.forEach(({initialAmount, annualAmount, annualInterest, startAge, endAge}) => {
        let balances = generateList();
        balances[startAge] = initialAmount * (annualInterest / 100 + 1) + annualAmount;
        principal[startAge] += (initialAmount + annualAmount);
        investments[startAge] += balances[startAge];
        for (let i = startAge + 1; i <= maxAge; i ++) {
            if (i <= endAge) {
                balances[i] = balances[i - 1] * (annualInterest / 100 + 1) + annualAmount;
                principal[i] += annualAmount;
            }
            else {
                balances[i] = balances[i - 1] * (annualInterest / 100 + 1)
            }
            investments[i] += balances[i];
        }
    })
    return {principal, investments};
}

export function computeLiability(entries) {
    let liabilities = generateList(false);
    entries.forEach(({initialAmount, annualAmount, startAge, endAge}) => {
        liabilities[startAge] += initialAmount;
        for (let i = startAge; i <= endAge; i ++) {
            liabilities[i] += annualAmount;
        }
    })
    return {liabilities};
}

export function getBalance(incomeEntries, expenseEntries, investmentEntries, liabilityEntries) {
    const {incomes} = computeIncome(incomeEntries);
    const {expenses} = computeExpense(expenseEntries);
    const {principal, investments} = computeInvestment(investmentEntries);
    const {liabilities} = computeLiability(liabilityEntries);

    let cash = generateList(false);
    for (let i = minAge + 1; i <= maxAge; i ++) {
        cash[i] = cash[i - 1] + incomes[i] - expenses[i] - principal[i] - liabilities[i];
    }

    return {cash, investments};
}