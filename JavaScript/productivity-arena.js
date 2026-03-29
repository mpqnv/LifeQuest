let isCompletedToday = false;
const initialTime = 600;
let time= initialTime;
document.addEventListener("DOMContentLoaded", () => {
    const goalsContainer = document.getElementById("goals-container");
    const timerBox = document.getElementById("timer-box");
    const goalsBox = document.querySelector(".tasks .box-content");
    
    
    
    let interval = null;

    goalCheck = document.querySelectorAll(".goal-check");
for (let i=0; i<goalCheck.length; i++){
    goalCheck[i].addEventListener("change", function () {
        updateScore();
        updateStreak();
        if (goalCheck[i].checked){
            feedbackMessage("Goal completed! +" + goalCheck[i].value + " pts");
        }
        else{
            feedbackMessage("Goal is not completed.");
        }
    });
}
const inputDiv = document.createElement("div");
inputDiv.computedStyleMap.marginTop = "15px";

const goalInput = document.createElement("input");
goalInput.type = "text";
goalInput.id = "new-goal-input";
goalInput.placeholder = "Enter new goal name";

const addGoal = document.createElement("button");
addGoal.textContent = "Add Goal";
addGoal.type = "button";
addGoal.style.marginLeft = "10px";

const errorMsg = document.createElement("p");
errorMsg.id = "error-msg";
errorMsg.style.color = "red";
errorMsg.style.fontSize = "10px";
errorMsg.style.fontFamily = "sans-serif";
errorMsg.style.marginTop = "5px";

inputDiv.appendChild(goalInput);
inputDiv.appendChild(addGoal);
inputDiv.appendChild(errorMsg);
goalsBox.appendChild(inputDiv);

addGoal.addEventListener("click", function () {
    const newGoalName = goalInput.value.trim();
    if (newGoalName === "") {
        errorMsg.textContent = "Goal name cannot be empty.";
        return;
    }
    errorMsg.textContent = "";
    const goalName = document.createElement("label");
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.className = "goal-check";
    newCheckbox.value = "10";
    goalName.appendChild(newCheckbox);
    goalName.appendChild(document.createTextNode(newGoalName));
    goalsContainer.appendChild(goalName);
    goalInput.value = "";
    newCheckbox.addEventListener("change", function () {
        updateScore();
        updateStreak();
        if (newCheckbox.checked) {
            feedbackMessage("Goal completed! +" + newCheckbox.value + " pts");
        }
    });
    goalInput.value = "";
    feedbackMessage("New goal added: " + newGoalName);
});

const timer = document.createElement("div");
timer.id = "timer";
timer.style.fontSize = "40px";
timer.style.fontFamily = "sans-serif";
timer.style.marginTop = "10px";
timer.textContent = "10:00";
timerBox.appendChild(timer);

const startBtn = document.createElement("button");
startBtn.textContent = "Start Timer";
startBtn.id = "start-btn";
startBtn.type = "button";
startBtn.style.marginTop = "10px";
startBtn.style.marginLeft = "10px";
startBtn.style.color = "green";
timerBox.appendChild(startBtn);

const stopBtn = document.createElement("button");
stopBtn.textContent = "Stop Timer";
stopBtn.id = "stop-btn";
stopBtn.type = "button";
stopBtn.style.marginTop = "10px";
stopBtn.style.marginLeft = "10px";
stopBtn.style.color = "red";
timerBox.appendChild(stopBtn);

const pauseBtn = document.createElement("button");
pauseBtn.textContent = "Pause Timer";
pauseBtn.id = "pause-btn";
pauseBtn.type = "button";
pauseBtn.style.marginTop = "10px";
pauseBtn.style.marginLeft = "10px";
pauseBtn.style.color = "orange";
timerBox.appendChild(pauseBtn);

startBtn.addEventListener("click", function () {
    
    if (interval !== null) {
        clearInterval(interval);
    }
    interval = setInterval(function () {
        const scoreDisplay = document.getElementById("score");
        if (time > 0) {
            time--;
            updateTimer();
        } else {
            clearInterval(interval);
            feedbackMessage("Timer completed! +" + 20 + " pts");
            score += 20;
            scoreDisplay.textContent = score;
        }
    }, 1000);
});
pauseBtn.addEventListener("click", function () {
    if (interval !== null) {
        clearInterval(interval);
        feedbackMessage("Paused.");
    }
});
stopBtn.addEventListener("click", function () {
    if (interval !== null) {
        clearInterval(interval);
        feedbackMessage("Timer has been reset.");
        time = initialTime;
        updateTimer();
    }
});
updateScore();
updateStreak();
});
function updateScore (){
    const checkboxes = document.querySelectorAll(".goal-check");
    const scoreDisplay = document.getElementById("score");
    let score=0;
    for (let i=0; i<checkboxes.length; i++){
        if (checkboxes[i].checked){
            score += parseInt(checkboxes[i].value);
        }
        scoreDisplay.textContent = score;
}
}
function updateStreak(){
    const checkboxes = document.querySelectorAll(".goal-check");
    const streakDisplay = document.getElementById("streak");
    let streak=0;
    let completed = 0;
    for (let i=0; i<checkboxes.length; i++){
        if (checkboxes[i].checked){
            completed++;
        }
    }
    if (checkboxes.length > 0 && completed === checkboxes.length){
        if (isCompletedToday === false){
            streak++;
            isCompletedToday = true;
        }
    }
    else{
        streak = 0;
    }
    streakDisplay.textContent = streak;
}
function feedbackMessage(messageContent){
    const messageBox = document.getElementById("message-container");
    const message = document.createElement("p");
    message.textContent = messageContent;
    message.id = "feedback-message";
    message.style.fontFamily = "sans-serif";
    message.style.fontSize = "20px";
    message.style.marginTop = "20px";
    message.style.textAlign = "center";
    message.style.color = "#333";
    messageBox.appendChild(message);
    setTimeout(function () {
        message.remove();
    }, 4000);
}

function updateTimer(){
    const timerText = document.getElementById("timer");
    const min = Math.floor(time / 60);
    const sec = time % 60;
    timerText.textContent = String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}

