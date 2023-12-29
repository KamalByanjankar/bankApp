function generateAccountNumber(accountType){
    let accountNumber;

    if(accountType === "Saving Account"){
        accountNumber = "10" + generateAccount(5);
    }
    else if(accountType === "Current Account"){
        accountNumber = "09" + generateAccount(5);
    }
    else{
        alert("Error while assigning Account Number")
    }

    return accountNumber;
}

function generateIban(accountNumber){
    let iban;
    iban = "PT0000000000" + generateAccount(1) + "0000" + accountNumber  + generateAccount(1);
    return iban;
}

const generateAccount = (length) => {
    let result = ""
    const charater = "0123456789"
    let counter = 0
    while (counter < length){
        result += charater.charAt(Math.floor(Math.random() * charater.length));
        counter += 1;
    }
    return result;
}

export {generateAccountNumber, generateIban}