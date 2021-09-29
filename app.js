var dateOfBirth = document.querySelector("#dob");
var luckyNum = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-number");

checkNumber.addEventListener('click',function getDateNum() {
    var birthDate = dateOfBirth.value;
    var sum = calSum(birthDate);
    console.log(sum);
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