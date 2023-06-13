$(document).ready(function(){
    $("#btnHide").click(function(){
        $("p").hide();        
        alert("All paragraphs are hidden now");
    });
    $("#btnShow").click(function(){
        $("p").show();
    });    
    $("#btnAll").click(function(){
        $("*").hide();
    });
    // $("p").click(function(){
    //     $(this).hide();
    // });    
    $("#btnRed").click(function(){
        $("p.redColor").hide();
    });    
    $("#btnA").click(function(){
        $("[href]").hide();
    });    
    $("#btnATB").click(function(){
        $("[target='_blank']").hide();
    });
    // $("p").mouseenter(function () { 
    //     $(this).css("color","lightgray");        
    // });  
    // $("p").mouseleave(function () { 
    //     $(this).css("color","black");        
    // });  
    $("input").focus(function () { 
        $(this).css("backgroundColor","red");        
    });  
    $("input").blur(function () { 
        $(this).css("backgroundColor","white");        
    });    
    $("p").on({
        click: function(){
            $(this).hide();
        },
        mouseenter: function(){
            $(this).css("color","lightgray");
        },
        mouseleave: function(){
            $(this).css("color","black");
        }
    });    
});