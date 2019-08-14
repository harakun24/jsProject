using("app/style/style.css");
let part = createUI("div");
let txtCode = createUI("textarea");
let cssCode = createUI("textarea");
let jsCode = createUI("textarea");
let rnd = createUI("button");
let rnd2 = createUI("button");
let wrapper = createUI("div");
let btnWrapper = createUI("div");
let wrapperRunner = createUI("div");
let styy = createUI("style");
let status = 1;
app.ready(function() {
  setTimeout(function() {
    txtCode.attr([{ type: "class", value: "txtbox" }]);
    txtCode.attr([
      { type: "id", value: "txtbox" },
      { type: "placeholder", value: "this is html field!" },
      { type: "spellcheck", value: "false" },
      {
        type: "onkeydown",
        value:
          "if(event.keyCode===9){var v=this.value,s=this.selectionStart,e=this.selectionEnd;this.value=v.substring(0, s)+'  '+v.substring(e);this.selectionStart=this.selectionEnd=s+1;return false;}"
      }
    ]);
    jsCode.attr([{ type: "class", value: "txtbox" }]);
    jsCode.attr([
      { type: "placeholder", value: "this is js field!" },
      { type: "id", value: "jsbox" },
      { type: "spellcheck", value: "false" },
      {
        type: "onkeydown",
        value:
          "if(event.keyCode===9){var v=this.value,s=this.selectionStart,e=this.selectionEnd;this.value=v.substring(0, s)+'  '+v.substring(e);this.selectionStart=this.selectionEnd=s+1;return false;}"
      }
    ]);
    styy.attr([{ type: "id", value: "true" }]);
    styy.toHead();
    cssCode.attr([
      { type: "placeholder", value: "this is css field!" },
      { type: "class", value: "txtbox" },
      { type: "id", value: "cssbox" },
      { type: "spellcheck", value: "false" },
      {
        type: "onkeydown",
        value:
          "if(event.keyCode===9){var v=this.value,s=this.selectionStart,e=this.selectionEnd;this.value=v.substring(0, s)+'  '+v.substring(e);this.selectionStart=this.selectionEnd=s+1;return false;}"
      }
    ]);
    btnWrapper.child(rnd2);
    btnWrapper.child(rnd);
    wrapper.render();
    wrapperRunner.render();
    wrapper.child(btnWrapper);
    wrapper.child(txtCode);
    wrapper.child(cssCode);
    wrapper.child(jsCode);
    wrapperRunner.child(part);
    part.attr([{ type: "id", value: "part" }]);
    wrapper.attr([{ type: "class", value: "wrapper" }]);
    wrapperRunner.attr([{ type: "class", value: "wrapper" }]);
    //init
    btnWrapper.attr([{ type: "class", value: "btnW" }]);
    rnd.append("run code!");
    rnd.attr([
      { type: "onclick", value: "run()" },
      { type: "class", value: "btn" }
    ]);

    rnd2.append("zoom!");
    rnd2.attr([
      { type: "onclick", value: "zoom()" },
      { type: "class", value: "btn" },
      { type: "id", value: "btn2" }
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
function zoom() {
  if (status == 1) {
    $(".txtbox").css("fontSize", "200%");
    status = 0;
  } else {
    $(".txtbox").css("fontSize", "120%");
    status = 1;
  }
}
