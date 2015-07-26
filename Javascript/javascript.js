// This is a single line comment
/*
    This is a multiline comment
*/

// Main variable types: String, Number and Boolean

// This is a type Number.
var currentPost = 5;
currentPost = 10;

var averagePostLength = 400.23;

// This is type String.
var postTitle = "Don't Eat The Candy"
var postTitle = 'Don\'t eat the Candy' // use a back slash when you need to use appropriate apostraphe
var postTitle = "Don't \"eat\" The Candy";

// This is type Boolean (just means true or false)
var postVisible = true;



// Automatic type conversion
var numberOfPosts = 10;
var totalPostLengths = 2300; //Number of words in all post combined
var averagePostLength = totalPostLengths / numberOfPosts; // Simple expression using division operator


// Boolean expression - Logical Operators
var postVisible = true;
var postsLoaded = true;
var pageReadyToShow = (postVisible && postsLoaded)

if (pageReadToShow {
  hiderLoader();
}


// If statements.
// && and operator
// || or operator
if (postVisible || somethingElse) {
  doSomething();
} else {
  doSomethingElse();

  if (oneMorething == true) {
    doYetAnotherThings();
  } else {
    doSomeOtherCrap();
  }
}

// ! not operator
if (!lookingGood) {
  buyNiceClothes();
}


// else happens if the first statement doesn't happen
if (lookingGood) {
} else {
  buyNiceClothes();
}


if (moneyInWallet > 0) {
  partyTime();
}

// Comparision expression
if ("First string" < "Second String") {
  alert("First string wins");
}

if ("FFb" < "SSa") {
  alert("First string wins");
}

if ("FFb" < "FFa") {
  alert("First string wins");
}

if ("FFb" == "FFa") {
  alert("First string wins");
}

if ("FFa" != "FFa") {
  alert("First string wins");
}

var moneyInWallet = 50;
if (moneyInWallet != 100.00) {
  alert("Can't be a baller");
}

// MAKE SURE YOU FINISHED YOUR STATEMENT WITH SEMICOLONS; Javascript will not yell at you if you don't finish with semicolons






if (moneyInPocket) {
  partyTime();
} else if (moneyInBank) {
  hitTheATM();
} else if (friendWillLendMoney) {
  borrowMoney ();
}

if (totalMoney == 100) {
  partyLikeRockStar();
} else if (totalMoney == 50) {
  goToMovies();
} else if (totalMoney == 5) {
  buyGum ();
}

// Switch case; shorthand version of above
switch (totalMoney) {
  case 100:
    partyLikeRockStar();
    break;

  case 50:
    goToABar();
    break;

  case 25:
    goToMoviesA();
    break;

  case 5:
    buyGum();
    break;

  default:
    drinkAtHome();
}


// Loops - repeating calculation

for (var i=0; i<5; i++) {
  console.log("We're on round number" + i)
};


for (var i=0; i<5; i++) {
  var moneyInPocket = i*10;
  console.log(moneyInPocket);
};

// While Loop

var count = 0;
while (count <= 10) {
  console.log("dollarInPocket: " + count);
  count++;
}

// BECARE OF WHILE LOOPS GOING INFINITELY

// Useful in the console
document.getElementByID ("");
document.getElementbyTagName ("");
document.getElementbyClassName ("");

// Event Listener
// Tell javascript to do something after listening for an Event
document.getElementbyClassName ("").addEventListener("click", displaydate);

//example button click
document.getELementbyID("alert-button").addEventListener("click", function() {
  console.long("button clicked");
});


printOut(currentPost);

// function is smalling mini program
