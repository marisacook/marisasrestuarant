/*global $ */
$("img").hide();

$("#dinner").click(function(){
    //corresponding function call 
    makedinner();
   
});

$("#lunch").click(function(){
    //corresponding function call 
    makelunch();
   
});

$("#yes-button").click(function(){
    //corresponding function call 
    makeYes();
   
});






function makeYes(){
    $("#option").text("Glad you liked your meal!");
    $("p").css("font-family","'Chewy', cursive");
    console.log("makeyes function ran");
     
}


function makedinner(){
    $("#option").text("dinner options below");
    $("body").css("font-family","'Chewy', cursive");
    console.log("makeDinner function ran");
     
}

function makelunch(){
    $("#option").text("lunch options below");
    $("body").css("font-family","'Chewy', cursive");
    console.log("makeLunch function ran");
     
}

$("#steak").click(function(){
    $("#steak-pic").toggle();
});

$("#salad").click(function(){
    $("#salad-pic").toggle();
});

$("#chicken").click(function(){
    $("#chicken-pic").toggle();
});

$("#shrimp").click(function(){
    $("#shrimp-pic").toggle();
});

$("#sandwich").click(function(){
    $("#sandwich-pic").toggle();
});

$("#noodles").click(function(){
    $("#noodles-pic").toggle();
});

