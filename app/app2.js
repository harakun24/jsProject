using("app/style/main.css");
let wrapper = createUI("div");
wrapper.attr([{ type: "class", value: "wrapper" }]);

app.ready(() => {
  setTimeout(() => {
    wrapper.render();
  });
});
