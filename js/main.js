$(document).ready(
  function() {


    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var context = { text: "Fare la spesa" };
    var html = template(context);

    $(".normal_list").append(html);

    $(document).on("click", ".delete",
      function() {
        $(this).parent().remove("li");
      }
    );

  $("input").keypress(function(event) {
    if(event.which == 13) {
      var newDo = $("[name='text-to-do']").val();
      var context = {
        "text": newDo
      };
      var html = template(context);
      $(".normal_list").append(html);
    };
  });
 }
);
