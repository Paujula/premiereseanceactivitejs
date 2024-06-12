document.addEventListener("DOMContentLoaded", function() {
    const colorDiv = document.getElementById("colorDiv");

  
    colorDiv.addEventListener("mouseover", function() {
        colorDiv.style.backgroundColor = "white"; 
    });

   
    colorDiv.addEventListener("mouseout", function() {
        colorDiv.style.backgroundColor = "blue";
    });
});
