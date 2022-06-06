let inputBill = document.querySelector(".input__bill");
let inputPeople = document.querySelector(".input__people");
let customInput = document.querySelector(".custom__input");
let tipMountOut = document.querySelector(".tip-mount-out");
let totalOut = document.querySelector(".total-out");
let buttonReset = document.getElementById("reset-button");


let boxTip = document.querySelectorAll(".preset")
  boxTip.forEach((element)=>{
    element.addEventListener("click", ()=>{
      calculatorBill(inputBill.value, inputPeople.value, totalOut)
    })
  })

function calculatorBill(bill, people, total){
  let resultBill = parseFloat(bill) / parseFloat(people);
  total.innerHTML = resultBill.toFixed(2);
}
