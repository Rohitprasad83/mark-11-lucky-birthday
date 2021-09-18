var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-number");
var outputMessage = document.querySelector("#output-message");
checkNumber.addEventListener("click", function(){

    var date = dateOfBirth.value.replaceAll("-", "");
    var digSum = 0;
    for(var i = 0; i < date.length; i++){
        digSum += Number(date.charAt(i));
    }

    if(luckyNumber.value > 0){
    if(digSum % Number(luckyNumber.value) == 0)
        {
            outputMessage.innerText = "your birthday is lucky";
        }
        else
        {
            outputMessage.innerText = "your birthday is NOT lucky, so sad";
        }   
    }
    else if(luckyNumber.value < 0)
    {
        showErrorMessage("Lucky number cannot be negative!");
    }
    else if(luckyNumber.value == 0)
    {
        showErrorMessage("Lucky Number cannot be zero, Try Again!");
    }
    else
    {
        showErrorMessage("Lucky Number should be a Number, Try Again!");
    }

})



function showErrorMessage(msg)
{
    outputMessage.innerText = msg;
}
