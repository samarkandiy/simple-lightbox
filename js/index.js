$(document).ready(function(){
  $(".show-info").click(function(){
    $(".info").slideToggle("fast");
    if($(this).text() == '-')
     {
       $(this).text('+');
     }
     else
     {
       $(this).text('-');
     }
  });
});