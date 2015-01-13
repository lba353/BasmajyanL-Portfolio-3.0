$("document").ready(function(){
    $(".col-xs-9").css("color", "blue");
    
    $(".col-xs-9").css("background-color", "yellow");
    
    $("ul li").css("padding", "6px 150px");
    
    $(".col-xs-3").css("background-color", "yellow");
    
    $(".header").css("color", "blue");
    
    $(".col-xs-10").css("background-color", "blue");
    
    $(".col-xs-2").css("background-color", "blue");
    
    $(".inactive .btn-default").bind("mouseover", MouseOverMe).bind("mouseout", MouseOutMe);
    
    $(".dropdown .btn-default").bind("mouseover", MouseOver).bind("mouseout", MouseOut);
    
    $(".active .btn-default").bind("mouseover", MouseOn).bind("mouseout", MouseOff);
    
    $(".jumbotron").css("color", "lime");
    
    //$(".jumbotron").css("background-image", "url(https://33.media.tumblr.com/bcf196654e236e37543014e901330c32/tumblr_nbjdcgvVXq1rv6iido1_500.gif)");
    
    $(".h1 ~ h2").css("color", "blue");
    
    $(".h1").css("color", "blue");
    
    $(".img-responsive").css("border-style", "solid");
    
    $(".img-responsive").css("border-width", "10px");
    
    $(".img-responsive").css("border-color", "blue");
    
    $(".col-xs-2").remove();
    
    $(".col-xs-9:last").append("<h1>Projects in Progress</h1>");
    
    $(".col-xs-9:last .btn-default").bind("click", HideTheSection);
    
    $(".col-xs-9:last .btn-default").bind("dblclick", ShowTheSection);
});

function MouseOverMe() 
{
    $(".inactive .btn-default").css("background-color", "red");
}

function MouseOutMe() 
{
    $(".inactive .btn-default").css("background-color", "white");
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

function HideTheSection()
{
    $(".col-xs-9:last .btn-default ~ *").hide("clip", {}, 2500);
}

function ShowTheSection()
{
    $(".col-xs-9:last .btn-default ~ *").show("clip", {}, 2500);
}