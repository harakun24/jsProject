let wrapper = createUI("div");
let x = [
  window.matchMedia("(max-width: 860px)"),
  window.matchMedia("(max-width: 650px)"),
  window.matchMedia("(min-width: 900px)")
];

let qmedia = function() {
  if (x[0].matches) {
    // using("app/style/style2.css");
    getText("app/style/style2.css", result => {
      style.append(result);
    });
  }
  if (x[1].matches) {
    getText("app/style/style4.css", result => {
      style.append(result);
    });
  }
  if (x[2].matches) {
    getText("app/style/style5.css", result => {
      style.append(result);
    });
  }
};

open(() => {
  wrapper.attr([{ type: "id", value: "wrapper" }]);
  wrapper.render();
  qmedia();
  x[0].addListener(qmedia);
  x[1].addListener(qmedia);
  x[2].addListener(qmedia);
});
