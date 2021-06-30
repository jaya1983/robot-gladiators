var playerName = window.prompt("What is your robot's name?");
var playerHealth = 60;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {

//Repeat until enemyHealth is not zero  
while (playerHealth > 0 && enemyHealth > 0) {

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + ' has decided to skip this fight. Goodbye!');
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney)
      break;
    }
  }

  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
  );

// check enemy's health
if (enemyHealth <= 0) {
window.alert(enemyName + " has died!");
   // award player money for winning
   playerMoney = playerMoney + 20;
break;
} 
else {
window.alert(enemyName + " still has " + enemyHealth + " health left.");

} 
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
playerHealth = playerHealth - enemyAttack;
console.log('player health ' +playerHealth);
console.log('enemy health ' +enemyHealth);

//Log a resulting message to the console so we know that it worked.
console.log(
enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
// check player's health
if (playerHealth <= 0) {
window.alert(playerName + " has died!");
break;

} else {
window.alert(playerName + " still has " + playerHealth + " health left.");
}
}
};
/* if player choses to skip
else if (promptFight === "skip" || promptFight === "SKIP") {
// confirm player wants to skip
var confirmSkip = window.confirm("Are you sure you'd like to quit?");

// if yes (true), leave fight
if (confirmSkip) {
window.alert(playerName + " has decided to skip this fight. Goodbye!");
// subtract money from playerMoney for skipping
playerMoney = playerMoney - 10;
console.log("playerMoney", playerMoney);
 break;
}
// if no (false), ask question again by running fight() again
else {
fight(enemyName);
break;
}
}
else {
window.alert("You need to choose a valid option. Try again!");
}
}

};*/

for(var i = 0; i < enemyNames.length; i++) {
    debugger;
var pickedEnemyName = enemyNames[i];
enemyHealth = 50;
fight(pickedEnemyName);
}
//fight();