// 1. Create Variables for Page Elements
let claimButton = document.getElementById('claim-Button');
let popupDiv = document.getElementById('popup-Div');
let closePopupButton = document.getElementById('closePopup-Button');

let counterText = document.getElementById('badge-status');
let badgeCount = 0;

// 2. Open the popup AND unlock a badge
claimButton.addEventListener('click', () => {
    // Show the popup
    popupDiv.classList.remove('hidden');

    // Only add a badge if not maxed out
    if (badgeCount < 3) {
        badgeCount++;
        
        // Update the number text on the screen
        counterText.textContent = `${badgeCount} / 3 Badges Unlocked`;

        // Find the current badgeCount that was unlocked
        let unlockedBadge = document.getElementById(`badge-${badgeCount}`);
        
        if (unlockedBadge) {
            unlockedBadge.classList.add('unlocked');
            unlockedBadge.textContent = "AWARD";
        }
    }
});

// 3. Close the popup
let close = () => {
    popupDiv.classList.add('hidden');
};

closePopupButton.addEventListener('click', close);