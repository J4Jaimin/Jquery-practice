
// console.log($("h1").css("font-size"));

$("button").css("background-color", "yellow");

$("h1").addClass("big-title margin-50");

// $("h1").text("Hello");

$("button").text("Don't click me");

$("button").html("<em>Click me</em>");

$("h1").click(function (e) {
    e.preventDefault();
    $("h1").css("color", "purple");
});

function changeColor() {
    $("button").click(function (e) {
        e.preventDefault();
        // $("h1").css("color", "red");
        $("h1").slideUp().slideDown().animate({ opacity: 0.5, margin: "50px" });
    });
}

setTimeout(changeColor, 300);

$("h1").css("color", "yellow");

$("input").on("keypress", function (e) {
    $("h1").text(e.key);
});

$("h1").on("click", function () {
    $("h1").css("color", "red");
});



