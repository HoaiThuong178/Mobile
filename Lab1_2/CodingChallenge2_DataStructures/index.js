const game = {
    scored: ['Gnarby', 'Hummels', 'Lewandowski', 'Lewandowski'],
    odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5,
    },
    teams: ['Bayern Munich', 'Borrussia Dortmund']
  };
  
  // 1. Loop over the game.scored array and print each player name to the console, along with the goal number
  for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
  }
  
  // 2. Use a loop to calculate the average odd and log it to the console
  let averageOdd = 0;
  const oddsValues = Object.values(game.odds);
  for (const odd of oddsValues) {
    averageOdd += odd;
  }
  averageOdd /= oddsValues.length;
  console.log(`Average odd: ${averageOdd}`);
  
  // 3. Print the 3 odds to the console, but in a nice formatted way
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'team1' ? game.teams[0] : team === 'team2' ? game.teams[1] : 'draw';
    console.log(`Odd of victory ${teamStr}: ${odd}`);
  }
  
  // 4. Bonus: Create an object called 'scorers'
  const scorers = {};
  for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  }
  console.log(scorers);  