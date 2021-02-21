// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");

});

// click "X" to delete Todo

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();      //   $(this) will reprent the li here not the span due to  $(this).parent() this output
    });                          // parent() Return the direct parent element of <span>:
    event.stopPropagation();    // stopPropagation();  Stop the click event from bubbling to parent elements:

});


$("input[type='text'").keypress(function (event) {
    if (event.which === 13) {
        // Grabbing new todoText from input
        var todoText = ($(this).val());
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");   //  append() is use to Insert content at the end of elements:
    }
});
$(".fa-plus").click(function () {
    $("input[type='text'").fadeToggle();
});



















/*
 // if li is gray
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        //turn in black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    //else turn in gray
    else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"     //if we write   text- decoration: "line-through";  it gives error  because jquey work on camel case //
        });
    }
    */