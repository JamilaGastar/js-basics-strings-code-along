// Write your code in this file!
const currentUser = 'Grace Hopper';
console.log(currentUser);

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
console.log(welcomeMessage);

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(excitedWelcomeMessage);

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
console.log(shortGreeting);