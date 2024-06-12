document.addEventListener("DOMContentLoaded", function() {
    
    const button = document.getElementById("btn");
    const paragraph = document.getElementById("para");

   
    button.addEventListener("click", function() {
        paragraph.textContent = "Le texte a été changé!";
    });
});
