var bill=[125,555,44]
var tip=bill.map(calcTip)   
function calcTip(bill){
    if(bill>=50 && bill<=300)
       return bill*0.15
    else
         return bill*0.2
}
var total=bill.map(bill=>bill+calcTip(bill))

console.log(`Bill: ${bill} Tip: ${tip} Total: ${total} ` ) 