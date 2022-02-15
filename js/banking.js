
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

function updateBalance(amount,isAdd){
    const getCurrentBalance = document.getElementById('current-balance');
    const currentBalanceText = getCurrentBalance.innerText;
    const currentBalance = parseFloat(currentBalanceText);
  
    if(isAdd){
    getCurrentBalance.innerText = amount + currentBalance;
   }

   else{
    getCurrentBalance.innerText = currentBalance - amount;
   }
}

document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositAmount = getInputValue('deposit-field');
    updateTotalField('current-deposit',depositAmount);
    updateBalance(depositAmount,true);
    
})


document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-field');
    updateTotalField('current-withdraw',withdrawAmount);
    updateBalance(withdrawAmount,false);
    
})