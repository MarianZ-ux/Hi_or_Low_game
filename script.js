
/* Welcome to the Higher-Lower Game Project. 
  
// Initialize global variables needed by the program.*/
let magicNumber = -1;
let remainingGuess = -1;

/* Returns a random integer in the range 'min' through 'max' inclusive. directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(0);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/* This function sets up a new game when called. 
   Here are the steps:

     (1) Generate a magic number stored in 'magicNumber'.
     (2) Reset the remaining guess count.
     (3) Show the new guess count.
     (4) Hide any messages.*/

function setupNewGame() {
  magicNumber= getRandomIntInclusive(1,100);
  remainingGuess= 5;
  showRemainingGuess(remainingGuess);
  hideAllMessages();
  console.log(`The magic number is ${magicNumber}!`);
}
// Handles when the user makes a new guess. // Sets the current value  entered into the guess input box to 'value'.
//var remainingGuess;
var currentValue;
//setupNewGame;
function handleGuess() {
remainingGuess=(getGuessInput());

  // Check if remaining guesses is -1 and setup a new game [if/so].Shows the remaining guess count.function //
  if (remainingGuess == -1) 
    setupNewGame();
    
  // Check if the user has any remaining guesses and [return if not].
  if (remainingGuess == 0)
  setupNewGame();

  // Retreive the user's newest guess. // Returns the current value the user has entered into the guess input box.function//
  getGuessInput();
 
  console.log(`Your newest guess was ${getGuessInput()}`);

  // Check if the user has won. We should show a message, set remaining guesses to 0, and return from this function.
  if (getGuessInput == magicNumber)
  showMessage("win-message");
  remainingGuess == 0;
  setupNewGame;
  
  // Hides all messages and then shows the one
  // with with the id attribute matching 'id' 
  // parameter.// Hides all messages shown to the user within the "message-container" element. function//
  hideAllMessages()

  // Check if the guess is higher or lower and show appropriate message.
  // Example: showMessage("higher-message")
 
  if (getGuessInput() < magicNumber)
    hideAllMessages();
    showMessage("higher-message");
  
  if (getGuessInput() > magicNumber)
    showMessage("lower-message");
  
  // The user has used a guess, decrement remaining guesses and show the new value.
  //remainingGuess();
remainingGuess--;
  showRemainingGuess(remainingGuess);
  
  // If the remaining guesses is 0, then the user has lost and that message should be shown.
  if (remainingGuess==0)
    showMessage("lose-message");
  
}
/* Function to be called when the user wants to play again.
   Here are the steps:
      (1) Setup a new game.
      (2) Set the guess input to "".*/
function handlePlayAgain() {
  setupNewGame();
  setGuessInput();
}