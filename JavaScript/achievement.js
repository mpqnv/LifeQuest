let counterText = document.getElementById('badge-status');

// Function that handles the visual change and text
function unlockTheBadge(badgeNumber, badgeLabel) {    
    // Find circle and apply styles
    let unlockedBadge = document.getElementById(`badge-${badgeNumber}`);
    if (unlockedBadge) {
        unlockedBadge.classList.add('unlocked');
        unlockedBadge.textContent = badgeLabel;
    }
}

// ON PAGE LOAD: Check everything in storage!
document.addEventListener('DOMContentLoaded', () => {
    let currentTotal = 0;

    // 1. Check for Badge 1 (From Money Manager)
    if (localStorage.getItem('badge_saver_unlocked') === 'true') {
        currentTotal++;
        unlockTheBadge(1, "SAVER");
    }
    
    // 2. Check for Badge 2 (From Healthy Habits)
    if (localStorage.getItem('badge_2_unlocked') === 'true') {
        currentTotal++;
        unlockTheBadge(2, "HEALTH");
    }

    // 3. Check for Badge 3 (From Productivity Arena)
    if (localStorage.getItem('badge_3_unlocked') === 'true') {
        currentTotal++;
        unlockTheBadge(3, "FOCUS");
    }

    // Update the counter text with the correct amount
    counterText.innerHTML = `<span class="counter-Span">${currentTotal}</span> / 3 Badges Unlocked`;
});