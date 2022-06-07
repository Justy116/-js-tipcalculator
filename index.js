let inputBill = document.querySelector(".input__bill");
let inputPeople = document.querySelector(".input__people");
let customInput = document.querySelector(".custom__input");
let tipMountOut = document.querySelector(".tip-mount-out");
let totalOut = document.querySelector(".total-out");
let buttonReset = document.getElementById("reset-button");
let boxTip = document.querySelectorAll(".preset");


// ciclare i div che ci permettono di applicare le tip
  boxTip.forEach((element)=>{
    element.addEventListener("click", ()=>{
      calculatorBill(inputBill.value, inputPeople.value, totalOut);
      calculatorTip(inputBill.value, element, inputPeople.value, tipMountOut, totalOut);
    })
  })

  
// calcorare il bill 
function calculatorBill(bill, people, total){
  let resultBill = parseFloat(bill) / parseFloat(people);
  total.innerHTML = resultBill.toFixed(2);
}


// calcolare le tip 
let tips = [5, 10, 15, 25, 50]

function calculatorTip(bill, boxTip, people, tipOut, total){
  for(i=0; i<tips.length; i++){
    if(boxTip.classList.contains(`${tips[i]}`)){
       let resultTip = (parseFloat(bill) / parseFloat(people)) * `${tips[i]}` / 100;
       tipOut.innerHTML = resultTip.toFixed(2);
       if(isNaN(resultTip) || resultTip == "Infinity"){
        tipOut.innerHTML = "0.00";
        total.innerHTML = "0.00";
       }
    }
  }
}


// custom input (input custom)
function customTip(bill, InputTip, people, tipOut){
    let resultCustomTip = (parseFloat(bill) / parseFloat(people)) * InputTip / 100;
    tipOut.innerHTML = resultCustomTip.toFixed(2);
}

customInput.addEventListener("keypress", (e)=>{
  if (e.key === 'Enter') {
    calculatorBill(inputBill.value, inputPeople.value, totalOut);
    customTip(inputBill.value, customInput.value, inputPeople.value, tipMountOut)
  }
})


// button reset 
function resetAll(bill, input, people,  tipOut, total){
  buttonReset.addEventListener("click", ()=>{
    bill.value = ""
    input.value = "";
    people.value = "";
    tipOut.innerHTML = "0.00";
    total.innerHTML = "0.00";
  })
}
resetAll(inputBill, customInput, inputPeople, tipMountOut, totalOut)