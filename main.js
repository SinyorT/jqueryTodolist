$(document).ready(function(){
    $("ul").on("click","li",function(){
    
    $(this).toggleClass("calisilacaq");
});

$("ul").on("click","span",function(event){
    
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    
    event.stopPropagation();//en ust parent lara cixmamasi ucun
});

 $("input").keypress(function(event){
     if(event.which===13){
        var deyer=$(this).val();
         $(this).val("");
         $("ul").append("<li><span><i id='d1' class='fa fa-window-close'></i> </span>"+deyer+"</li>");
        
         
        }
     
  });



$("span").on("click","#adin",function(){
    $(".inP").slideToggle(2000);
});

document.addEventListener("DOMContentLoaded",function(){
    const ulSearch=document.querySelectorAll("li")[0];
    
    if(ulSearch==="undefined"){
        const alertDiv=document.getElementsByClassName("alert");
        alertDiv.innerHTML=`<div class="alert alert-danger" role="alert">
  List Bos
</div>`;
    }   
});
  
    
    
});


    
    
    
    
    
    