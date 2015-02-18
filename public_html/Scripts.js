var shown = false;

$("document").ready(function(){
    
    //Sets the color of the text.
    $(".col-xs-9").css("color", "blue");
    
    //Sets the background color.
    $(".col-xs-9").css("background-color", "yellow");
    
    //Sets padding (width and height)
    $("ul li").css("padding", "5px 150px");
    
    $(".col-xs-3").css("background-color", "yellow");
    
    $(".header").css("color", "blue");
    
    $(".col-xs-10").css("background-color", "blue");
    
    $(".col-xs-2").css("background-color", "blue");
    
    //Lines 23-29 when the mouse hovers over those properties in the website, then it goes to those function.
    $(".inactive .btn-default").bind("mouseover", MouseOverMe).bind("mouseout", MouseOutMe);
    
    $(".inactive2 .btn-default").bind("mouseover", MouseOverMe2).bind("mouseout", MouseOutMe2);
    
    $(".dropdown .btn-default").bind("mouseover", MouseOver).bind("mouseout", MouseOut);
    
    $(".active .btn-default").bind("mouseover", MouseOn).bind("mouseout", MouseOff);
    
    $(".jumbotron").css("color", "lime");
    
    $(".jumbotron").css("background-image", "url(https://33.media.tumblr.com/bcf196654e236e37543014e901330c32/tumblr_nbjdcgvVXq1rv6iido1_500.gif)");
   
    $(".h1 ~ h2").css("color", "blue");
    
    $(".h1").css("color", "blue");
    
    //Lines 40-44 Sets border style, width, and color.
    $(".img-responsive").css("border-style", "solid");
    
    $(".img-responsive").css("border-width", "5px");
    
    $(".img-responsive").css("border-color", "blue");
    
    //Removes a column.
    $(".col-xs-2").remove();
    
    //Adds text when clicked on and follows the function "PIP".
    $(".Projects").append("<h1>Projects in Progress</h1>").bind("click", PIP);
    
    //When clicked, follows the function called "HideTheSection".
    $(".col-xs-9:last .btn-default").bind("click", HideTheSection);
    
    //When double clicked, follows the function called "ShowTheSection".
    $(".col-xs-9:last .btn-default").bind("dblclick", ShowTheSection);
    
    $(".col-xs-9:last .btn-default").bind("mouseover", OnButton).bind("mouseout", OffButton);
    
    //Sets an accordion with the headers having h2 tags in every HTML page.
    $(".row:last").accordion({header: "h2"});
});

//Sets the background color to red when hovered over. Similar for MouseOverMe2, MouseOver, MouseOn, and OnButton.
function MouseOverMe() 
{
    $(".inactive .btn-default").css("background-color", "red");
}

//Sets the background color to white when no longer hovered over. Similar for MouseOutMe2, MouseOut, MouseOff, and OffButton.
function MouseOutMe() 
{
    $(".inactive .btn-default").css("background-color", "white");
}

function MouseOverMe2() 
{
    $(".inactive2 .btn-default").css("background-color", "red");
}

function MouseOutMe2() 
{
    $(".inactive2 .btn-default").css("background-color", "white");
}

function MouseOver() 
{
    $(".dropdown .btn-default").css("background-color", "red");
}

function MouseOut() 
{
    $(".dropdown .btn-default").css("background-color", "white");
}

function MouseOn() 
{
    $(".active .btn-default").css("background-color", "blue");
}

function MouseOff() 
{
    $(".active .btn-default").css("background-color", "white");
}

function OnButton() 
{
    $(".col-xs-9:last .btn-default").text("Click on me to close or double click to open all of this information.");
}

function OffButton() 
{
    $(".col-xs-9:last .btn-default").text("Are you sure?");
}

//Hides the section in one second with the fade animation. The opposite function is ShowTheSection.
function HideTheSection()
{
    $(".col-xs-9:last .btn-default ~ *").hide("fade", {}, 1000);
}

function ShowTheSection()
{
    $(".col-xs-9:last .btn-default ~ *").show("fade", {}, 1000);
}

//Makes it so that the text only appears once.
function PIP()
{
    if(!shown){
        $(".Projects").append("<p>There are no Projects in Progress!</p>");
        shown = true;
    }
}