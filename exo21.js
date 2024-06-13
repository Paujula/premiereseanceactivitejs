document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myFormulaire");
    const textInput = document.getElementById("nom");
    const bobo = document.getElementById("mail");
    const popo = document.getElementById("keyword");
    const errorMessage = document.getElementById("erreur");
    const erreurmaile = document.getElementById("erreurmail");
    const motdepass = document.getElementById("motdepasse");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let isValid = true;

        if (nom.value == "" || nom.value.length < 3) {
            errorMessage.style.display = "block";
            isValid = false;
        } else {
            errorMessage.style.display = "none";
        }

        if (!mail.value.includes("@") || !mail.value.includes(".")) {
            erreurmaile.style.display = "block";
            isValid = false;
        } else {
            erreurmaile.style.display = "none";
        }

        if (keyword.value == "" || keyword.value.length < 8) {
            motdepass.style.display = "block";
            isValid = false;
        } else {
            motdepass.style.display = "none";
        }

      
        if (isValid) {
            form.submit();
        }
    });
});
