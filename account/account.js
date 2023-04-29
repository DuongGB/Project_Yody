$(document).ready(() => {
  var name = $("#first_name");
  var phone = $("#phone");
  var email = $("#email");
  var password = $("#password");
  var btnSubmid = $("#btnSubmit");
  var error_1 = $(".error-1");
  var error_2 = $(".error-2");
  var error_3 = $(".error-3");
  var error_4 = $(".error-4");

  function checkName() {
    var patternName = /^[A-Za-z ][A-Za-z]+/;
    if (name.val() == "") {
      error_1.html("Trường này không được để trống");
      name.addClass("border-text");
      return false;
    }
    if (!patternName.test(name.val())) {
      error_1.html("Vui lòng nhập họ và tên");
      name.addClass("border-text");
      return false;
    }
    error_1.html("");
    return true;
  }
  name.blur(checkName);
  name.focus(() => {
    error_1.html("");
    name.removeClass("border-text");
  });

  function checkPhone() {
    var patternPhone = /\d{10}/;
    if (phone.val() == "") {
      error_2.html("Trường này không được để trống");
      phone.addClass("border-text");
      return false;
    }
    if (!patternPhone.test(phone.val())) {
      error_2.html("Vui lòng nhập số điện thoại");
      phone.addClass("border-text");
      return false;
    }
    error_2.html("");
    return true;
  }
  phone.blur(checkPhone);
  phone.focus(() => {
    error_2.html("");
    phone.removeClass("border-text");
  });

  function checkEmail() {
    var patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.val() == "") {
      error_3.html("Trường này không được để trống");
      email.addClass("border-text");
      return false;
    }
    if (!patternEmail.test(email.val())) {
      error_3.html("Vui lòng nhập Email");
      email.addClass("border-text");
      return false;
    }
    error_3.html("");
    return true;
  }
  email.blur(checkEmail);
  email.focus(() => {
    error_4.html("");
    email.removeClass("border-text");
  });

  function checkPass() {
    if (password.val() == "") {
      error_4.html("Trường này không được để trống");
      password.addClass("border-text");
      return false;
    }
    error_4.html("");
    return true;
  }
  password.blur(checkPass);
  password.focus(() => {
    error_4.html("");
    password.removeClass("border-text");
  });

  btnSubmid.click(() => {
    if (!checkName() && !checkPhone() && !checkEmail() && !checkPass()) {
      return false;
    }
    if (!checkName() || !checkPhone() || !checkEmail() || !checkPass()) {
      return false;
    }
    alert("Đăng ký thành công!");
  });
});
