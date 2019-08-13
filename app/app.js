using("app/style/style.css");
let part = createUi("div");
let txtCode = createUi("textarea");
let cssCode = createUi("textarea");
let rnd = createUi("button");
let wrapper = createUi("div");
let wrapperRunner = createUi("div");
app.ready(function() {
  setTimeout(function() {
    txtCode.attr([{ type: "class", value: "txtbox" }]);
    txtCode.attr([{ type: "id", value: "txtbox" }]);
    cssCode.attr([
      { type: "class", value: "txtbox" },
      { type: "id", value: "cssbox" }
    ]);
    render(wrapper);
    render(wrapperRunner);
    wrapper.child(txtCode);
    wrapper.child(cssCode);
    wrapper.child(rnd);
    wrapperRunner.child(part);
    part.attr([{ type: "id", value: "part" }]);
    wrapper.attr([{ type: "class", value: "wrapper" }]);
    wrapperRunner.attr([{ type: "class", value: "wrapper" }]);
    //init
    rnd.append("run code!");
    rnd.attr([
      { type: "onclick", value: "run()" },
      { type: "id", value: "btn" }
    ]);
  });
  //using("footer.html");
});

//event
function run() {
  $("#part").css({ width: "100%", height: "100%" });
  part.innerHTML = $("#txtbox").val();
  $("style").append($("#cssbox").val());
}
