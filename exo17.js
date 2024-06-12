document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myFormulaire");
    const textInput = document.getElementById("nom");
    const errorMessage = document.getElementById("erreur");

    form.addEventListener("submit", function(event) {
    
        event.preventDefault();

        
        if (nom.value.trim() === "") {
          
            erreur.style.display = "block";
        } else {
          
            erreur.style.display = "none";
           
            form.submit();
        }
    });
});
