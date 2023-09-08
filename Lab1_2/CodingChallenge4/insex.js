var bill = 275
var tip
if (bill >= 50 && bill < 300)
    tip = (bill * 0.15)
else
    tip = bill * 0.2

var total=bill+tip
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${total}`);