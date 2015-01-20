var shown = false;

$("document").ready(function(){
    $(".col-xs-9").css("color", "blue");
    
    $(".col-xs-9").css("background-color", "yellow");
    
    $("ul li").css("padding", "5px 150px");
    
    $(".col-xs-3").css("background-color", "yellow");
    
    $(".header").css("color", "blue");
    
    $(".col-xs-10").css("background-color", "blue");
    
    $(".col-xs-2").css("background-color", "blue");
    
    $(".inactive .btn-default").bind("mouseover", MouseOverMe).bind("mouseout", MouseOutMe);
    
    $(".inactive2 .btn-default").bind("mouseover", MouseOverMe2).bind("mouseout", MouseOutMe2);
    
    $(".dropdown .btn-default").bind("mouseover", MouseOver).bind("mouseout", MouseOut);
    
    $(".active .btn-default").bind("mouseover", MouseOn).bind("mouseout", MouseOff);
    
    $(".jumbotron").css("color", "lime");
    
    $(".jumbotron").css("background-image", "url(https://33.media.tumblr.com/bcf196654e236e37543014e901330c32/tumblr_nbjdcgvVXq1rv6iido1_500.gif)");

    $(".h1 ~ h2").css("color", "blue");
    
    $(".h1").css("color", "blue");
    
    $(".img-responsive").css("border-style", "solid");
    
    $(".img-responsive").css("border-width", "5px");
    
    $(".img-responsive").css("border-color", "blue");
    
    $(".col-xs-2").remove();
    
    $(".Projects").append("<h1>Projects in Progress</h1>").bind("click", PIP);
    
    $(".col-xs-9:last .btn-default").bind("click", HideTheSection);
    
    $(".col-xs-9:last .btn-default").bind("dblclick", ShowTheSection);
    
    $(".col-xs-9:last .btn-default").bind("mouseover", OnButton).bind("mouseout", OffButton);
    
    $(".row:last").accordion({header: "h2"});
});

function MouseOverMe() 
{
    $(".inactive .btn-default").css("background-color", "red");
}

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

function HideTheSection()
{
    $(".col-xs-9:last .btn-default ~ *").hide("fade", {}, 1000);
}

function ShowTheSection()
{
    $(".col-xs-9:last .btn-default ~ *").show("fade", {}, 1000);
}

function PIP()
{
    if(!shown){
        $(".Projects").append("<p>There are no Projects in Progress!</p>");
        shown = true;
    }
}