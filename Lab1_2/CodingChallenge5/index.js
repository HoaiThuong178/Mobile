var dolphinsScores = [85, 54, 41]//[44, 23, 71]
var koalasScores = [23, 34, 27]//[65, 54, 49]
function calcAverage(arr){
    return arr.reduce((acc, num) => { return acc + num }) / (arr.length);
}

console.log(`Dolphins Team Score: ` + calcAverage(dolphinsScores).toFixed(2));
console.log(`Koalas Team Score: ` + calcAverage(koalasScores).toFixed(2));
function checkWinner(dolphinsAverageScore, koalasAverageScore) {
    if(dolphinsAverageScore/koalasAverageScore>=2)
        console.log(`Dolphins win (${dolphinsAverageScore} vs ${koalasAverageScore})`);
    else if(koalasAverageScore/dolphinsAverageScore>=2)
        console.log(`Koalas win (${koalasAverageScore} vs ${dolphinsAverageScore})`);
    else
        console.log(`No team wins`);
}
checkWinner(calcAverage(dolphinsScores), calcAverage(koalasScores));