// Functions
const setCounter = (n) => document.getElementById("counter").innerHTML = n;
const getCounterValue = () => parseInt(document.getElementById("counter").innerHTML);
const incrementCounter = () => setCounter(getCounterValue() + 1);
const resetCounter = () => setCounter(0);

// Button Variables
var incrementButton = document.getElementById("increment-btn");
var resetButton = document.getElementById("reset-btn");

// Button Functions
incrementButton.onclick = () => incrementCounter();
resetButton.onclick = () => resetCounter();