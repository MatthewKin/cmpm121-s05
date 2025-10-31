// CMPM 121 Smelly Code - Fixed Duplicated Code

let c = 0;

const a = "increment",
  b = "counter",
  h = "CMPM 121 Project";

function setup() {
  document.body.innerHTML = `
    <h1>${h}</h1>
    <p>Counter: <span id="${b}">0</span></p>
    <button id="${a}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  const incrementBtn = document.getElementById(a);
  const decrementBtn = document.getElementById("dec");
  const resetBtn = document.getElementById("reset");
  const counterDisplay = document.getElementById(b);

  if (!incrementBtn || !decrementBtn || !resetBtn || !counterDisplay) return;

  // Extracted function to handle all UI updates
  function updateUI() {
    counterDisplay!.innerHTML = `${c}`;
    document.title = "Clicked " + c;
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  }

  incrementBtn.addEventListener("click", () => {
    c++;
    updateUI();
  });

  decrementBtn.addEventListener("click", () => {
    c--;
    updateUI();
  });

  resetBtn.addEventListener("click", () => {
    c = 0;
    updateUI();
  });
}

setup();
