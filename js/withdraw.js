document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    // checking validation
    if(newWithdrawAmount < 1){
        alert('You can not withdraw less than 1tk');
        return;
    }
    else if(isNaN(newWithdrawAmount)){
        alert('Please provide a withdraw amount in the withdraw field');
        return;
    }
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //error handling
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Insufficient Balance');
        return;
    }
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    setTextElementValueById('balance-total', newBalanceTotal);
})