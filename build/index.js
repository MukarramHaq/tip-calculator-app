const elements = {
    billEl: document.getElementById("bill"),
    tip: {
        fiveEl: document.getElementById("five-perc"),
        tenEl: document.getElementById("ten-perc"),
        fifteenEl: document.getElementById("fifteen-perc"),
        twentyFiveEl: document.getElementById("twenty-five-perc"),
        fiftyEl: document.getElementById("fifty-perc"),
        customTipEl: document.getElementById("custom-tip")
    },
    peopleEl: document.getElementById("people"),
    expenses: {
        tipAmountEl: document.getElementById("tip-amount"),
        totalAmountEl: document.getElementById("total-amount")
    },
    resetBtnEl: document.getElementById("reset-btn"),
}

function total(tipPercentage){
    const bill = elements.billEl;
    const numberOfPeople = elements.peopleEl;

    const tipPerPerson = (parseInt(bill.value) * (tipPercentage / 100)) / parseInt(numberOfPeople.value);
    const totalPerPerson = (parseInt(bill.value) + parseInt(bill.value) * (tipPercentage / 100)) / parseInt(numberOfPeople.value);

    elements.expenses.tipAmountEl.textContent = `$${tipPerPerson.toFixed(2)}`
    elements.expenses.totalAmountEl.textContent = `$${totalPerPerson.toFixed(2)}`
}

elements.tip.fiveEl.addEventListener("click", function(){
    total(5);
})

elements.tip.tenEl.addEventListener("click", function(){
    total(10);
})

elements.tip.fifteenEl.addEventListener("click", function(){
    total(15);
})

elements.tip.twentyFiveEl.addEventListener("click", function(){
    total(25);
})

elements.tip.fiftyEl.addEventListener("click", function(){
    total(50);
})

elements.tip.customTipEl.addEventListener("input", function(){
    const customTip = parseFloat(elements.tip.customTipEl.value)
    if(!isNaN(customTip)){
        total(customTip)
    }
})

elements.resetBtnEl.addEventListener('click', function(){
    elements.billEl.value = ''
    elements.peopleEl.value = ''
    elements.expenses.tipAmountEl.textContent = "$0.00"
    elements.expenses.totalAmountEl.textContent = "$0.00"
    elements.tip.customTipEl.value = ''
})