var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-number");
var outputMessage = document.querySelector("#output-message");
checkNumber.addEventListener("click", function(){

    if(dateOfBirth.value){
    var date = dateOfBirth.value.replaceAll("-", "");
    var digSum = 0;
    for(var i = 0; i < date.length; i++){
        digSum += Number(date.charAt(i));
        console.log()
    }


    if(luckyNumber.value > 0){
    if(digSum % Number(luckyNumber.value) == 0)
        {
            outputMessage.innerText = "Yay! Your birthday is lucky 🥳 🥳 🥳";
        }
        else
        {
            outputMessage.innerText = "Your birthday is NOT lucky, so sad 😕";
        }   
    }
    else if(Number(luckyNumber.value) < 0)
    {
        showErrorMessage("Lucky number cannot be negative!");
    }
    else
    {
        showErrorMessage("Invalid Input, Try again!");
    }
}
else
{
    showErrorMessage("Please Enter your birthday!")
}

})



function showErrorMessage(msg)
{
    outputMessage.innerText = msg;
}
