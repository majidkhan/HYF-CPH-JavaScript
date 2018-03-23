$(document).ready(function(){

    $("#btn-fade-in").click(function(){
        $(".box-fade-in").fadeIn("slow");
    });

    $("#btn-fade-out").click(function(){
        $(".box-fade-out").fadeOut("slow");
    });

    $("#btn-fade-toggle").click(function(){
        $(".box-fade-toggle").fadeToggle("slow");
    });

    $("#btn-fade-to").click(function(){
        $(".box-fade-to").fadeTo("slow", 0.6);
    });

    $("#btn-hide").click(function(){
        $(".box-hide").hide("slow");
    });

    $("#btn-show").click(function(){
        $(".box-hide").show("slow", function() {
            $(".box-hide .box").text("Show");
        });
    });

});