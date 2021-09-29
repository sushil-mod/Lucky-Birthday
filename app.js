var dateOfBirth = document.querySelector("#dob");
var luckyNum = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-number");
var showLuck = document.querySelector("#show-luck");

checkNumber.addEventListener('click',function getDateNum() {
    var birthDate = dateOfBirth.value;
    var sum = calSum(birthDate);
    checkLucky(sum,luckyNum.value);
  
});

function calSum(birthDate){
    birthDate = birthDate.replaceAll("-","");
    let sum=0;
    for (let i=0;i<birthDate.length;i++)
    {
        sum+=Number(birthDate.charAt(i));
    }
    return sum;
}
 function checkLucky(sum,luckyNum){
     if(sum%luckyNum === 0){
        showLuck.innerHTML="your birthday is lucky";
     }else{
        showLuck.innerHTML="sorry your birthday is not lucky";
     }

 }