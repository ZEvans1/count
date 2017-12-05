$(document).ready(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    var countTo = parseInt($("#input1").val());
    var countBy = parseInt($("#input2").val());

    for (i = countBy; i <= countTo; i+=countBy){
      $("#output").append("<li>" + i + "</li>");
    }
  });
});
