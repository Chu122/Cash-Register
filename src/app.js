//getting input for bill amount,cashgiven and checkbutton.
const billAmount= document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message= document.querySelector("#error-message");
const noOfNotes= document.querySelectorAll(".no-of-notes");

//array of notes
const availableNotes =[ 2000, 500, 200,100,50, 20 ,10,5,2, 1];
//click event listener button
checkButton.addEventListener("click",function validateBillAndCashAmount(){
        hideMessage();
        if(billAmount.value >0){ // inupt one 
            if(cashGiven.value >= billAmount.value){ // input one is greater than second amount =>true
                const amountToBeReturn = cashGiven.value - billAmount.value
                calculatedChange(amountToBeReturn);
            }else{
                showMessage("The cash provided should atleast be equal to the bill amount")
            }
        }else{
            showMessage("invalid bill amount "); 
        }
    }
);
function hideMessage(){
     //hidding error message after displayed
     message.getElementsByClassName.display ='none';

}
function calculatedChange(amountToBeReturn){ 
    for(let i=0; i< availableNotes.length; i++){
        const numberOfNotes = Math.trunc(
            amountToBeReturn / availableNotes[i]
            );
            //amount left after calculating the no. of notes needed
            amountToBeReturn %= availableNotes[i];
            //updating the no. of notes in the table
            noOfNotes[i].innerText = numberOfNotes;

    }

}

function showMessage(msg){
    message.style.display ='block';
    message.innerText = msg;

}
billAmount.addEventListener("input", function() {
    // If the bill amount input is not empty
    if (this.value) {
      // Show the discount code input and label
      cashGiven.style.display = "block";
      cashGiven.style.display = "block";
    } else {
      // Hide the discount code input and label
      cashGiven.style.display = "none";
      cashGiven.style.display = "none";
    }
  });