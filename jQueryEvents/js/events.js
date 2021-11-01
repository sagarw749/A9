

$(document).ready(function()
{
//Step 1
    $("#clickButton").click(function()
    {
        window.alert("Button 1 has been clicked");
    });
    
//Step 2
    $("#bindButton").bind("click", function()
    {
        window.alert("Button 2 has been clicked");
    });

//Step 3
     $("#onButton").on("click", function()
    {
        window.alert("Button 3 has been clicked");
    });

//Step 4
    $("body").on({
        click: function()
 	{
            window.alert("Button has been clicked");
        }
    }, ".step4_btn");

//Step 5
    $("#div1").css({"width" : "400px" , "height":"400px", "background": "silver"});
    $("#div1").on({
        click: function()
 	 {
            window.alert("div was clicked");
         },
         mouseenter: function()
	 {
            window.alert("Mosue has entered the div");
         },
         mouseleave: function()
	 {
            window.alert("Mouse has left the div");
         }
    });

//Step6
    $("#div1").css({"width" : "400px" , "height":"400px", "background": "silver"});
    $("#div1").on({
        click: function(event)
	 {
            $("span").html(event.target.nodeName + " was clicked");
         },
         mouseenter: function(event)
	  {
             $("span").html( "The User has entered " + event.target.nodeName);
          },
          mouseleave: function(event)
	  {
             $("span").html( "The User has left " + event.target.nodeName);
          }
    });

//Step 7
    $("a").click( function(event)
     {
        event.preventDefault();
        $("this").css("color", "red");
        window.alert(event.target.nodeName + " triggered the event");
     });

//Step 8
     $(window).resize(function()
     {
        $("#step8").text("Width: " + $(window).width() + " Height: " + $(window).height());
    });

//Step 9 
     $("#text").on({
        focus: function()
	{
           $("#text").css("background", "gray");
        },
        focusout: function()
	{
           $("#text").css("background", "white");
        }
   });
//Step 10
   $("#mySubmit").on("click", function()
   {
        var name= $("#name").val();
        var email = $("#email").val();
        var temp = true;
        if(name == "")
	{
            alert("Name is required");
            $("#name").css("border", "3px solid red");
            temp = false;
        }
	else
	{
            $("#name").css("border", "3px solid green");
        }
        if(email == "")
	{
            alert("Email is required");
            $("#email").css("border", "3px solid red");
            temp="false";
        }
	else
	{
            $("#email").css("border", "3px solid green");
        }
        if(temp)
	{
          event.preventDefault();
        }
    });

});