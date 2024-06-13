document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const fullImage = document.getElementById("fullImage");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const fullSrc = this.getAttribute("data-full");
            fullImage.setAttribute("src", fullSrc);
            fullImage.setAttribute("alt", this.getAttribute("alt"));
        });
    });
});
