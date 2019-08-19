// console.log(true);
using("app/style/main.css");
open(() => {
  btn = createUI("button");
  btn.append("download");
  text = createUI("textarea");
  text.attr([
    { type: "id", value: "text" },
    { type: "spellcheck", value: "false" }
  ]);
  text.render();
  fname = createUI("input");
  fname.attr([{ type: "id", value: "fname" }]);
  fname.render();
  btn.render();
  btn.attr([{ type: "id", value: "btndownload" }]);
  $("#btndownload").click(() => {
    // upload($("#fname").val(), $("#text"));
    upload();
  });
});
