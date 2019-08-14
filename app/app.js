using("app/style/style.css");
let part = createUI("div");
let txtCode = createUI("textarea");
let cssCode = createUI("textarea");
let jsCode = createUI("textarea");
let rnd = createUI("button");
let wrapper = createUI("div");
let wrapperRunner = createUI("div");
let styy = createUI("style");
app.ready(function() {
  setTimeout(function() {
    txtCode.attr([{ type: "class", value: "txtbox" }]);
    txtCode.attr([{ type: "id", value: "txtbox" }]);
    jsCode.attr([{ type: "class", value: "txtbox" }]);
    jsCode.attr([{ type: "id", value: "jsbox" }]);
    styy.attr([{ type: "id", value: "true" }]);
    styy.toHead();
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
  $("#part").css({ width: "90%", height: "90%" });
  let parent = $("#part").parent();
  parent.css({ display: "flex", justifyContent: "center" });
  part.innerHTML = $("#txtbox").val();
  $("#true").html($("#cssbox").val());
  $("#false").remove();
  let scyy = createUI("script");
  scyy.attr([{ type: "id", value: "false" }]);
  scyy.render();
  $("#false").html($("#jsbox").val());
}
$(document).keydown(function(e) {
  if (e.key == "s" && e.ctrlKey) {
    event.preventDefault();
    console.log("tersave");
    rnd.click();
  }
});
