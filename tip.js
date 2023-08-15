const billAmountIdEl = document.getElementById("billAmountId");
const tipAmountIdEl = document.getElementById("tipAmountId");
let billAmount=null;
const enterBillAmountFunc = addEventListener("blur",()=>{
    billAmount=billAmountIdEl.value;
    //console.log(billAmount);
});
let tipAmount=null;
const enterTipAmountFunc = addEventListener("blur",()=>{
    tipAmount=tipAmountIdEl.value;
    //console.log(tipAmount);
});
let tipGivingIdEl=document.getElementById("tipGivingId");
