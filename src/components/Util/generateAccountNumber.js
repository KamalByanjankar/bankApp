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

export {generateAccountNumber}