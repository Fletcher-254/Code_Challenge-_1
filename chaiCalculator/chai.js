function calculateChaiIngredients(numberOfCups){
    const water=200;//ml
    const milk=50;//ml
    const teaLeaves=1;//tablespoon(s)
    const sugarSukari=2;//tablespoon(s)

    
    //Calculating the amount of each ingridient needed

   const waterRequired=water*numberOfCups;
   const milkRequired=milk*numberOfCups;
   const tealeavesRequired=teaLeaves*numberOfCups;
   const sugarRequired=sugarSukari*numberOfCups;

    //Message to the users for each individual input

   console.log(`To make ${numberOfCups} cup(s) of chai, you will need:`);
   console.log(`- Water: ${waterRequired} ml`);
   console.log(`- Milk: ${milkRequired} ml`);
   console.log(`- Tea Leaves: ${tealeavesRequired} tablespoon(s)`);
   console.log(`- Sugar: ${sugarRequired} teaspoon(s)`)

  }

  //User prompt
const userInput = prompt("How many cups of chai would you like to make?");
const numberOfCups = Number(userInput); //converts input to a number by calling the number function //number()
 
//function Logic

if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    console.log("Please enter a valid  number.");
}





