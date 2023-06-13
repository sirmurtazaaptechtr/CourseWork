$(document).ready(function(){
    $("#btnHide").click(function(){
        $("p").hide(function(){
            alert("paragraph is hidden successfully...");
        });
    });
    $("#btnShow").click(function(){
        $("p").show(function(){
            alert("paragraph is now visiable...");
        });
    });

});