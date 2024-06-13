document.addEventListener("DOMContentLoaded", function() {
    
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const userGuessInput = document.getElementById("userGuess");
    const guessButton = document.getElementById("guessButton");
    const result = document.getElementById("result");
    const attemptsDisplay = document.getElementById("attempts");

    guessButton.addEventListener("click", function() {
        const userGuess = parseInt(userGuessInput.value);
        attempts++;
        attemptsDisplay.textContent = attempts;

        if (userGuess < randomNumber) {
            alert("Votre tentative est trop basse.");
            result.textContent = "Trop bas ! Essayez encore.";
        } else if (userGuess > randomNumber) {
            alert("Votre tentative est trop haute.");
            result.textContent = "Trop haut ! Essayez encore.";
        } else {
            alert("Félicitations ! Vous avez deviné le nombre.");
            result.textContent = "Correct ! Vous avez trouvé le nombre en " + attempts + " tentatives.";
        }
    });
});
