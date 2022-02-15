
function getInputValue(inputId) {

    const input = document.getElementById(inputId);
    const inputText = input.value;
    const amount = parseFloat(inputText);
    input.value = '';
    return amount;

}

function updateTotalField(totalInputField,amount){
    const getCurrentdepowith = document.getElementById(totalInputField);
    const currentDepoWithText = getCurrentdepowith.innerText;
    const currentDepoWith = parseFloat(currentDepoWithText);
    getCurrentdepowith.innerText = amount + currentDepoWith;
}

function presentBalance(){
    const getCurrentBalance = document.getElementById('current-balance');
    const currentBalanceText = getCurrentBalance.innerText;
    const currentBalance = parseFloat(currentBalanceText);
    return currentBalance;
}

function updateBalance(amount,isAdd){
    const getCurrentBalance = document.getElementById('current-balance');
    // const currentBalanceText = getCurrentBalance.innerText;
    // const currentBalance = parseFloat(currentBalanceText);
    const currentBalance = presentBalance();

    if(isAdd){
    getCurrentBalance.innerText = amount + currentBalance;
   }

   else{
    getCurrentBalance.innerText = currentBalance - amount;
   }
}

document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositAmount = getInputValue('deposit-field');
   
    if(depositAmount > 0){
        updateTotalField('current-deposit',depositAmount);
        updateBalance(depositAmount,true);
    }
    else if(depositAmount != 'number'){
        const errorThrow = document.getElementById('deposit-field');
        errorThrow.style.border = '2px solid red';   
    }
    
})



document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-field');
    const currentBalance = presentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('current-withdraw',withdrawAmount);
        updateBalance(withdrawAmount,false);
    }
    else if(withdrawAmount != 'number'){
        const errorThrow = document.getElementById('withdraw-field');
        errorThrow.style.border = '2px solid red';       
    }
})