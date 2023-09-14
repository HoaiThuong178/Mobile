var Mark={
    name:"Mark Miller",
    mass:78,
    height:1.69
}
var John={
    name:"John Smith",
    mass:92,
    height:1.95
}
function calcBMI(mass,height){
    return (mass/(height*height)).toFixed(2);
}

var MarkBMI=calcBMI(Mark.mass,Mark.height);
var JohnBMI=calcBMI(John.mass,John.height);

if(MarkBMI>JohnBMI)
    console.log(` Mark's (${MarkBMI}) BMI is higher than John's(${JohnBMI})!`);
else
    console.log(` John's (${JohnBMI}) BMI is higher than Mark's(${MarkBMI})!`);