let countdown = 10;

function startCountdown() {
   
    console.log(countdown);

 
    let countdownInterval = setInterval(function() {
        countdown--;

        console.log(countdown);

    
        if (countdown === 0) {
            clearInterval(countdownInterval); 
            console.log("Temps écoulé!");
        }
    }, 1000); 
}


startCountdown();
