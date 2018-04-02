function loginHidden() {
  $("#title").fadeOut("fast", function() {
    $("#title").html("注册&nbsp;<small>海量资源等你来</small>");
    $("#title").fadeIn("fast");
  });
  $("#login").fadeOut("fast", function() {
    $("#register").fadeIn("fast");
  });
}

function registerHidden() {
  $("#title").fadeOut("fast", function() {
    $("#title").html("登录&nbsp;<small>收藏、上传、下载</small>");
    $("#title").fadeIn("fast");
  });
  $("#register").fadeOut("fast", function() {
    $("#login").fadeIn(500);
  });
}

function eye() {
  var icon = $(".glyphicon-eye-open").length > $(".glyphicon-eye-close").length ? $(".glyphicon-eye-open") : $(".glyphicon-eye-close");
  if (icon.hasClass("glyphicon-eye-open")) {
    for (var i = 0; i < icon.length; i++) {
      $(icon[i]).addClass("glyphicon-eye-close");
      $(icon[i]).removeClass("glyphicon-eye-open");
    }
    $("#inputRPassword").attr("type", "password");
    $("#inputResPassword").attr("type", "password");
    $("#inputPassword").attr("type", "password");
  } else if (icon.hasClass("glyphicon-eye-close")) {
    for (var i = 0; i < icon.length; i++) {
      $(icon[i]).addClass("glyphicon-eye-open");
      $(icon[i]).removeClass("glyphicon-eye-close");
    }
    $("#inputRPassword").attr("type", "text");
    $("#inputResPassword").attr("type", "text");
    $("#inputPassword").attr("type", "text");
  }
  console.log("change");
}

function success(data) {
  // data = $.parseJSON(data);
  if (data.status == 0) {
    $("#inputRUsername").attr("data-content", "用户名可用")
    $("#inputRUsername").popover('show');
    setTimeout(function() {
      $("#inputRUsername").popover('hide');
    }, 1000);
  } else if (data.status == 1) {
    $("#inputRUsername").attr("data-content", "用户名重复，不能使用");
    $("#inputRUsername").popover('show');
  }
}

function findUsername(url, data, success) {
  $.post({
    url: url,
    data: data,
    success: success,
    dataType: "json"
  });
}

$(function() {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
  $("#inputRUsername").blur(function() {
    var username = $("#inputRUsername").val();
    findUsername(
      'http://localhost:3000', {
        name: username
      },
      success
    );
  });
  $("#inputRUsername").focus(function() {
    $("#inputRUsername").popover('hide');
  })
})
