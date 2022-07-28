import "./styles.css";

// HTML Elements
const app = document.getElementById("app");
const userInput_1 = document.createElement("input");
const userInput_2 = document.createElement("input");
const userInput_3 = document.createElement("input");
const userInput_4 = document.createElement("input");
const userInput_5 = document.createElement("input");
const userInput_6 = document.createElement("input");
const userInput_7 = document.createElement("input");
const userInput_8 = document.createElement("input");

app.append(userInput_1);
app.append(userInput_2);
app.append(userInput_3);
app.append(userInput_4);
app.append(userInput_5);
app.append(userInput_6);
app.append(userInput_7);
app.append(userInput_8);

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

// User input 3
userInput_3.setAttribute("type", "text");
userInput_3.setAttribute("class", "user-input");
userInput_3.setAttribute("id", "input-3");
userInput_3.setAttribute("value", "Acheter de la salade verte");

// User input 4
userInput_4.setAttribute("type", "text");
userInput_4.setAttribute("class", "user-input");
userInput_4.setAttribute("id", "input-4");
userInput_4.setAttribute("value", "Acheter de la salade verte");

// User input 5
userInput_5.setAttribute("type", "text");
userInput_5.setAttribute("class", "user-input");
userInput_5.setAttribute("id", "input-5");
userInput_5.setAttribute("value", "Acheter de la salade verte");

// User input 6
userInput_6.setAttribute("type", "text");
userInput_6.setAttribute("class", "user-input");
userInput_6.setAttribute("id", "input-6");
userInput_6.setAttribute("value", "Acheter de la salade verte");

// User input 7
userInput_7.setAttribute("type", "text");
userInput_7.setAttribute("class", "user-input");
userInput_7.setAttribute("id", "input-7");
userInput_7.setAttribute("value", "Acheter de la salade verte");

// User input 8
userInput_8.setAttribute("type", "text");
userInput_8.setAttribute("class", "user-input");
userInput_8.setAttribute("id", "input-8");
userInput_8.setAttribute("value", "Acheter de la salade verte");

// Log
console.log(app);
