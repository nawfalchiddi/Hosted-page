   $(".definition").hide();
  function myFunction($myVar, $myVar_def) {
    $myVar.hover(function() {
    $myVar_def.show();
    },function(){
     $myVar_def.hide(); 
    })
  }

  myFunction($(".name"), $(".name_def"));
  myFunction($(".email"), $(".email_def"));
  myFunction($(".message"), $(".message_def"));