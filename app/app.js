using("app/style/style.css");
let part = createUI("div");
let txtCode = createUI("textarea");
let cssCode = createUI("textarea");
let jsCode = createUI("textarea");
let rnd = createUI("button");
let wrapper = createUI("div");
let wrapperRunner = createUI("div");
app.ready(function() {
  setTimeout(function() {
    txtCode.attr([{ type: "class", value: "txtbox" }]);
    txtCode.attr([{ type: "id", value: "txtbox" }]);
    jsCode.attr([{ type: "class", value: "txtbox" }]);
    jsCode.attr([{ type: "id", value: "jsbox" }]);
    cssCode.attr([
      { type: "class", value: "txtbox" },
      { type: "id", value: "cssbox" }
    ]);
    wrapper.render();
    wrapperRunner.render();
    wrapper.child(rnd);
    wrapper.child(txtCode);
    wrapper.child(cssCode);
    wrapper.child(jsCode);
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
  let scr = createUI("script");
  scr.append($("#jsbox").val());
  scr.render();
}
