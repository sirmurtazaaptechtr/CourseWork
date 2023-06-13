const theButton =  document.getElementById('toggle');
$(document).ready(function(){    
    $("#toggle").click(function(){
        $("#jumbo").toggle(1000,function(){
            if(theButton.innerText == 'Hide')
            {
                theButton.innerText = 'Show';
                theButton.classList.remove("btn-danger"); // Remove btn-danger class from Button
                theButton.classList.add("btn-success"); // Add btn-success class to Button
            }
            else
            {
                theButton.innerText = 'Hide';
                theButton.classList.remove("btn-success"); // Remove btn-success class from Button
                theButton.classList.add("btn-danger"); // Add btn-danger class to Button
            }            
        });
    });
    $("#btnFadeIn").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
    $("#btnFadeOut").click(function(){
        $("#div1").fadeOut(3000);
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut();
    });
    $("#btnFadeToggle").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle();
        $("#div3").fadeToggle();
    });
    $("#btnFadeTo").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
    });
});