var dateOfBirth = document.querySelector("#dob");
var luckyNum = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-number");

checkNumber.addEventListener('click',function getDateNum() {
    console.log(dateOfBirth.value,luckyNum.value);
});