function show() {
    $(".btn").on("click", function () {
        $('.menu').toggleClass("show");
    });
}

// Change title 
window.onblur = function(){
    document.title = "Szafrantu"
}
window.focus = function(){
    document.title = "Wróć"
}