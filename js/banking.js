document.getElementById('deposit-btn').addEventListener('click',function(){
    //Get deposit input 
    const depositInput = document.getElementById('deposit-field');
    const depositInputText = depositInput.value;
    const depositAmount = parseFloat(depositInputText);

    // Get current deposit amount
    const getCurrentDeposit = document.getElementById('current-deposit');
    const currentDepositText = getCurrentDeposit.innerText;
    const currentDeposit = parseFloat(currentDepositText);

    // Total Deposit & deposit innerText Set
    const totalDeposit = depositAmount + currentDeposit;
    getCurrentDeposit.innerText = totalDeposit;

    depositInput.value = '';

    // Get Current Balance
    const getCurrentBalance = document.getElementById('current-balance');
    const currentBalanceText = getCurrentBalance.innerText;
    const currentBalance = parseFloat(currentBalanceText);

    // New Balance Set
    const newBalance = depositAmount + currentBalance;
    getCurrentBalance.innerText = newBalance;


})


document.getElementById('withdraw-btn').addEventListener('click',function(){
    //Get Withdraw Input 
    const withdrawInput = document.getElementById('withdraw-field');
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);

    // Get Current Withdrawal Amount
    const getCurrentWithdraw = document.getElementById('current-withdraw');
    const currentWithdrawText = getCurrentWithdraw.innerText;
    const currentWithdraw = parseFloat(currentWithdrawText);
    

    // Total withdraw & total withdraw innerText Set
    const totalWithdraw = withdrawAmount + currentWithdraw;
    getCurrentWithdraw.innerText = totalWithdraw;

    withdrawInput.value = '';

    // Get Current Balance
    const getCurrentBalance = document.getElementById('current-balance');
    const currentBalanceText = getCurrentBalance.innerText;
    const currentBalance = parseFloat(currentBalanceText);

    // New Balance Set
    const newBalance = currentBalance-withdrawAmount ;
    getCurrentBalance.innerText = newBalance;
})