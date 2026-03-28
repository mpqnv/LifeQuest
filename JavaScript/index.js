document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const saveBtn = document.getElementById('save-btn');
    const displayName = document.getElementById('display-name');
    const fileUpload = document.getElementById('file-upload');
    const navProfilePic = document.getElementById('nav-profile-pic');

    const savedName = localStorage.getItem('lifeQuestName');
    const savedPhoto = localStorage.getItem('lifeQuestPhoto');

    if (savedName) {
        displayName.textContent = savedName;
        nameInput.value = savedName;
    } else {
        displayName.textContent = "Username";
    }

    if (savedPhoto) {
        navProfilePic.src = savedPhoto;
    }

    saveBtn.addEventListener('click', () => {
        const newName = nameInput.value.trim();
        if (newName) {
            displayName.textContent = newName;
            localStorage.setItem('lifeQuestName', newName);
        }
    });

    const resetBtn = document.getElementById('reset-btn');

    resetBtn.addEventListener('click', () => {
        localStorage.removeItem('lifeQuestName');
        localStorage.removeItem('lifeQuestPhoto');

        nameInput.value = "";
        displayName.textContent = "User";
        navProfilePic.src = "Images-lifequest/blank-profile-picture-973460_1280.webp";

        alert("Profile reset!");
    });

    fileUpload.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                navProfilePic.src = imageUrl;
                localStorage.setItem('lifeQuestPhoto', imageUrl);
            };
            reader.readAsDataURL(file);
        }
    });
});