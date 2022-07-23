import "./styles.css";

// HTML Elements
const app = document.getElementById("app");
const userInput_1 = document.createElement("input");
const userInput_2 = document.createElement("input");

app.append(userInput_1);
app.append(userInput_2);

// User input 1
userInput_1.setAttribute("type", "text");
userInput_1.setAttribute("class", "user-input");
userInput_1.setAttribute("id", "input-1");
userInput_1.setAttribute("placeholder", "Enter Your Task...");
// User input 2
userInput_2.setAttribute("type", "text");
userInput_2.setAttribute("class", "user-input");
userInput_2.setAttribute("id", "input-2");
userInput_2.setAttribute("value", "Acheter de la salade verte");

// Log
console.log(app);
