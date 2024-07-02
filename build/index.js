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

    const tipPerPerson = (parseFloat(bill.value) * (tipPercentage / 100)) / parseFloat(numberOfPeople.value);
    const totalPerPerson = (parseFloat(bill.value) + parseFloat(bill.value) * (tipPercentage / 100)) / parseFloat(numberOfPeople.value);

    elements.expenses.tipAmountEl.textContent = `$${tipPerPerson.toFixed(2)}`
    elements.expenses.totalAmountEl.textContent = `$${totalPerPerson.toFixed(2)}`
}

function validateInputCustom(input){
    if(parseFloat(input.value) < 0){
        input.value = ''
    }
}

function validateNumberOfPeople(input){
    const tipAmount = elements.expenses.tipAmountEl
    if(parseFloat(input.value) <= 0){
        window.alert("Number of People cannot be zero or less than zero")
        input.value = 1
    }
     
}

elements.tip.fiveEl.addEventListener("click", function(){
    validateNumberOfPeople(elements.peopleEl)
    total(5);
})

elements.tip.tenEl.addEventListener("click", function(){
    validateNumberOfPeople(elements.peopleEl)
    total(10);
})

elements.tip.fifteenEl.addEventListener("click", function(){
    validateNumberOfPeople(elements.peopleEl)
    total(15);
    
})

elements.tip.twentyFiveEl.addEventListener("click", function(){
    validateNumberOfPeople(elements.peopleEl)
    total(25);
    
})

elements.tip.fiftyEl.addEventListener("click", function(){
    validateNumberOfPeople(elements.peopleEl)
    total(50);
    
})

elements.tip.customTipEl.addEventListener("input", function(){
    validateInputCustom(elements.tip.customTipEl) //Validate Input
    const customTip = parseFloat(elements.tip.customTipEl.value)
    if(!isNaN(customTip)){
        elements.peopleEl.addEventListener("input", function() {
            validateNumberOfPeople(elements.peopleEl) //Validate Input
            total(customTip);
        });

    }
})

elements.resetBtnEl.addEventListener('click', function(){
    elements.billEl.value = ''
    elements.peopleEl.value = ''
    elements.expenses.tipAmountEl.textContent = "$0.00"
    elements.expenses.totalAmountEl.textContent = "$0.00"
    elements.tip.customTipEl.value = ''
})