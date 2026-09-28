$(document).ready(function() {
    $("#aksiBtn").click(function() {
        // 1. Efek fade pada gambar
        $("#gambar").fadeOut(1000).fadeIn(1000);

        // 2. Animasi pergeseran kotak
        $("#Kotak").animate({
            left: "250px",
            opacity: "0.5",
            height: "150px"
        }, 1000);
    });
});