var bill=[17,23]
var tip=bill.map(calcTip)   
function calcTip(bill){
    if(bill>=50 && bill<=300)
       return bill*0.15
    else
         return bill*0.2
}
var total=bill.map(bill=>bill+calcTip(bill))

function calcAverage(arr){
    return arr.reduce((acc,cur)=>acc+cur)/arr.length
}
console.log(`Bill: ${bill} Tip: ${tip} Total: ${total} ` ) 
console.log(`Average total: ${calcAverage(total)}`);