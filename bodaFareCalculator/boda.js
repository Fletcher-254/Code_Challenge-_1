function calculateBodaFare(distanceTravelled){
    const baseFare=50;//kshs Base fare applied for all trips
    const perKmCharge=15;//ksh for every KM travelled

    const totalFare=baseFare+perKmCharge*distanceTravelled;
    console.log (`Your total fare is ${totalFare} kshs`);
}

//Prompt user for input

const userInput=prompt ("What distance did you ride in Kilometers?");
const distanceTravelled=Number(userInput);

//Function Logic

if (!isNaN(distanceTravelled) && distanceTravelled>0) { 
    calculateBodaFare(distanceTravelled);}
else {console.log ("Please enter a valid number!")}

   
