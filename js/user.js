function loginHidden() {
    $("#title").fadeOut("fast", function () {
        $("#title").html("注册&nbsp;<small>海量资源等你来</small>");
        $("#title").fadeIn("fast");
    });
    $("#login").fadeOut("fast", function () {
        $("#register").fadeIn("fast");
    });
}

function registerHidden() {
    $("#title").fadeOut("fast", function () {
        $("#title").html("登录&nbsp;<small>收藏、上传、下载</small>");
        $("#title").fadeIn("fast");
    });
    $("#register").fadeOut("fast", function () {
        $("#login").fadeIn(500);
    });
}

function eye() {
    var icon = $(".glyphicon-eye-open").length > $(".glyphicon-eye-close").length?$(".glyphicon-eye-open") : $(".glyphicon-eye-close");
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