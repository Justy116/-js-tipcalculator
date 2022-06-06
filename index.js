let inputBill = document.querySelector(".input__bill");
let inputPeople = document.querySelector(".input__people");
let customInput = document.queryCommandIndeterm("custom__input");
let tipMountOut = document.querySelector(".tip-mount-out");
let totalOut = document.querySelector(".total-out");

let boxTip = document.querySelectorAll(".preset")
boxTip.forEach((element) => {
    element.addEventListener("click", ()=>{
        console.log(element)
        calculatorBill(inputBill.value, inputPeople.value, totalOut)
    })
});

function calculatorBill(bill, people, total){
  let resultBill = parseFloat(bill) / parseFloat(people);
  total.innerHTML = resultBill.toFixed(2);
}

// function calculatorTip(){
  
// }