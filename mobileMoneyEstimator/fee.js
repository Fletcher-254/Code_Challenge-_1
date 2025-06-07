function estimateTransactionFee(amountToSend) {
    const minimumFee = 10; // KES
    const maximumFee = 70; // KES
    const feePercentage = 0.015; // 1.5%

    // Calculate the  fee
    let totalFee = amountToSend * feePercentage;

    // Apply min and max rules
    if (totalFee < minimumFee) {
        totalFee = minimumFee;
    } else if (totalFee > maximumFee) {
        totalFee = maximumFee;
    }

    const totalDebited = amountToSend + totalFee;

    // Output 

    console.log(`Amount to send ${amountToSend} Kshs:`);
    console.log(`Calculated Transaction Fee: Kshs ${totalFee}`);
    console.log(`Total amount to be debited: Kshs ${totalDebited}`);
    console.log(`\n  Jambocom! Send Money Safely and Securely!`);
}

// Prompt user
const userInput = prompt("Enter amount to send in Kenya Shillings:");
const amountToSend = Number(userInput);

//Function logic

if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else {
    console.log("Please enter a valid amount!");
}
