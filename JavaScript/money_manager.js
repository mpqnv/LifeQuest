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