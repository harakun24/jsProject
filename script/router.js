open(() => {
  let date = "";
  $("*[bref]").click(function() {
    $.get(
      $(this).attr("bref"),
      data => {
        date = data;
        // $("*[bview]").html(data);
        // route = createUI("script");
        // route.append(localStorage.route);
        // $("*[bview]").append(route);
      },
      "text"
    );
    console.log(date);
  });
});
