
//function below allows a user to increase or decrease the quantity of the books they bought by one

function update(purchased, ibsn, change) {
  const index = purchased.findIndex((book) => book.ibsn === ibsn);

  if (index > -1) {
    if (change === -1 || change === 1) {
        purchased[index].bookQuantity = Number(purchased[index].bookQuantity) + Number(change)
    
      if (purchased[index].bookQuantity < 1){
        console.log('Quantity cannot be less than 1.');
        purchased[index].bookQuantity= 1;
      } else if (purchased[index].bookQuantity> 100 ){
        console.log('Quantity cannot be greater than 100.');
        purchased[index].bookQuantity = 100;
      } else {
        console.log("Quantity has been successfully updated.");
      }
    } else {
        console.log ("Quantity can only be changed by 1.");
    }
    return purchased;
  }else {
    console.log ("Product not found. No action taken");
    return purchased;
  }
}


module.exports = { update };
