var tmmp, tfile, nfile, k;
let using = function(url) {
  $.get(url, data => {
    $("head").append("<style>" + data + "</style>");
    console.log("sukses nambah:" + url);
  });
};
let upload = function(tmp) {
  fopen = createUI("input");
  fopen.attr([
    { type: "id", value: "openb" },
    { type: "type", value: "file" },
    { type: "style", value: "display:none" }
  ]);
  tmmp = tmp;
  fopen.render();
  // $("#openb").css("display", "none");
  k = fopen;
  if ("FileReader" in window) $("#openb").click();
  else alert("browser terlalu jadul");

  //
  $("input[type=file]").change(event => {
    var ftl = event.target.files[0];
    if (ftl) {
      var reader = new FileReader();
      reader.onload = function(flevent) {
        var txtfile = flevent.target.result;
        //$("#text").val(txtfile);
        tfile = txtfile;
        nfile = ftl.name;
        tmmp();
        // document.body.removeChild(k);
      };
      reader.readAsText(ftl, "UTF-8");
    }
  });
  document.body.removeChild(k);
};

let app = $(document);
let createUI = function(type) {
  let result = document.createElement(type);
  result.render = () => {
    document.body.appendChild(result);
  };
  result.child = child => {
    result.appendChild(child);
  };
  result.attr = val => {
    $.each(val, function(key, isi) {
      result.setAttribute(isi.type, isi.value);
    });
  };
  result.toHead = () => {
    document.head.appendChild(result);
  };
  //document.body.appendChild(result);
  return result;
  result.unset = () => {
    document.body.removeChild(result);
  };
};
let open = function(runer) {
  app.ready(() => {
    setTimeout(() => {
      runer();
    }, 0);
  });
};
let async = fun => {
  setTimeout(() => {
    fun();
  }, 0);
};
let fsave = (ft, name, type) => {
  //alert("text");
  var file = new Blob([ft], { type: type });
  if (window.navigator.msSaveOrOpenBlob)
    window.navigator.msSaveBlob(file, name);
  else {
    let a = createUI("a");
    let url = URL.createObjectURL(file);
    a.href = url;
    a.download = name;
    a.render();
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
};
