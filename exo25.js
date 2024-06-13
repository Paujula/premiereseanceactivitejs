document.addEventListener("DOMContentLoaded", function() {
    const timeInput = document.getElementById("timeInput");
    const startButton = document.getElementById("startButton");
    const timeDisplay = document.getElementById("timeDisplay");
    let timer;

    startButton.addEventListener("click", function() {
        let time = parseInt(timeInput.value);
        if (isNaN(time) || time <= 0) {
            alert("Veuillez entrer un temps valide en secondes.");
            return;
        }

        timeDisplay.textContent = time;

        clearInterval(timer);

        timer = setInterval(function() {
            time--;
            if (time <= 0) {
                clearInterval(timer);
                timeDisplay.textContent = "Temps écoulé !";
                alert("Temps écoulé !");
            } else {
                timeDisplay.textContent = time;
            }
        }, 1000);
    });
});
