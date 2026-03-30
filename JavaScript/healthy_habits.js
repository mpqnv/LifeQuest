let habitsForm = document.getElementById('habits-form');

habitsForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the page from refreshing and getting rid of input
    
    // Get the input
    let waterInput = parseFloat(document.getElementById('water').value) || 0;
    let exerciseInput = parseFloat(document.getElementById('exercise').value) || 0;
    let sleepInput = parseFloat(document.getElementById('sleep').value) || 0;

    // Achievement 
    if (waterInput >= 2000 && exerciseInput > 0 && sleepInput >= 6) {
        localStorage.setItem('badge_2_unlocked', 'true');
        alert('Achievement Unlocked: Healthy Lifestyle! Check your Achievement System.');
    } else {
        alert('Data saved! (Tip: Drink at least 2000ml of water and log some exercise and sleep for more than 6 hours to earn a badge!)');
    }
});