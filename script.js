$(window).on("load", function(){
    "use strict";

    const imageCount = $("#slider ul li").length;
    const imageWidth = $("#slider ul li img").first().width();
    const totalWidth = imageCount * imageWidth;
 
    let leftPosition = "0px";
    let counter = 0;

    $("#slider ul").css("width", `${totalWidth}px`);

    $("#next").click( function() {
        counter++;

        if ( counter === imageCount ) {

            $("#slider ul").clone().appendTo("#slider");
            $("#slider ul").last().css("left", `${imageWidth}px`);

            leftPosition = `${-totalWidth}px`;                 
      
             $("#slider ul").last().animate( { left: "0px" }, 380, "easeInQuad" );

             $("#slider ul").first().animate( { left: leftPosition }, 380, "easeInQuad", function() {
                $("#slider ul").first().remove(); 
            } ); 
 
            counter = 0;
        }
        else {

            leftPosition = `${-counter * imageWidth}px`;
            $("#slider ul").animate( {left: leftPosition}, 380, "easeInQuad" );

        }
    });

    $("#previous").click( function() {
        counter--;

        if ( counter < 0 ){
            counter = imageCount -1;

            $("#slider ul").clone().appendTo("#slider");
            $("#slider ul").last().css("left", `${-totalWidth}px`);

            leftPosition = `${-counter * imageWidth}px`;                 
      
             $("#slider ul").last().animate( { left: leftPosition }, 380, "easeInQuad" );
             $("#slider ul").first().animate( { left: `${imageWidth}px` }, 380, "easeInQuad", function() {
                $("#slider ul").first().remove(); 
            } ); 

        }
        else {

            leftPosition = `${-counter * imageWidth}px`;
            $("#slider ul").animate( {left: leftPosition}, 380, "easeInQuad" );
        }
    });

});