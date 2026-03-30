window.onload = function () {
    let submission = document.getElementById("submit");
    submission.addEventListener("click", budget);

    function budget() {
        let income = document.getElementById("income").value;
        let expenses = document.getElementById("expenses").value;
        let total = 0;

        total = income - expenses;
        document.querySelector("span").innerHTML = "$" + total;
    }
};

// 1. Grab the elements from the HTML
const incomeInput = document.getElementById('income');
const expensesInput = document.getElementById('expenses');
const submitBtn = document.getElementById('submit');
const budgetDisplay = document.getElementById('remaining-budget');

// 2. Listen for the button click
submitBtn.addEventListener('click', () => {
    // Convert the input values from text to actual numbers
    const income = parseFloat(incomeInput.value) || 0;
    const expenses = parseFloat(expensesInput.value) || 0;

    const balance = income - expenses;

    // Update the display text on the screen
    budgetDisplay.textContent = `$${balance}`;

    // Use colors to indicate if they're doing well or not
    if (balance < 0) {
        budgetDisplay.style.color = "red";
    } else {
        budgetDisplay.style.color = "green";
    }

    // Achievemnt Unlocked
    if (balance > 0) {
        localStorage.setItem('badge_saver_unlocked', 'true');
        alert('Achievement Unlocked: Master Saver! Check your Achievement System.');
    }
});