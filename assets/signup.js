// login box
$(document).ready(function () {
  // create login box
  $(".background-signup").html(`
  <div class="background-signup-content d-flex overflow-hidden">
  <!-- login -->
  <div class="w-50 register flex-column justify-content-center align-items-center" style="display: flex;">
    <label for="" class="d-block mb-4">
      <h1 class="s-40">Sign in</h1>
    </label>
    <input type="email" class="form-control w-75 email d-inline-block" placeholder="Email" id="exampleInputEmail1">
    <input type="password" class="form-control w-75 password d-inline-block mt-3" placeholder="Password"
      id="exampleInputPassword1">
    <div id="emailHelp" class="text-danger form-text s-14 d-block text-start errorr"></div>

    <p class="s-16 mb-3">Forgot your password?</p><button type="button"
      class="btn btn-primary login-btn bth-signin">SIGN IN</button>
  </div>

  <div class="w-50 signupp d-flex flex-column justify-content-center align-items-center">
    <label for="" class="d-block mb-4 text-white">
      <h1 class="s-40">Hello, Friend!</h1>
    </label>
    <button type="button" class="btn btn-primary register-btn">SIGN UP</button>
  </div>

  <div class="register2 w-50 flex-column justify-content-center align-items-center" style="display: none;">
    <label for="" class="d-block mb-4">
      <h1 class="s-40">Register</h1>
    </label>

    <!-- name birth sex -->
    <div class="infoGuest">
      <div id="name" class="d-flex justify-content-between">
        <input type="text" class="form-control name d-inline-block" placeholder="First Name" required id="firstname">
        <input type="text" class="form-control name d-inline-block" placeholder="Last Name" required id="lastname">
      </div>

      <div class="birthday d-flex mt-3 justify-content-around w-100">
        <label>Birthday</label>
        <input type="date" id="birthday" class="border-0" value="2000-01-01" name="birthday">
      </div>

      <div class="sex d-flex mt-3 justify-content-between s-16 w-100">
        <div>
          <input type="radio" name="sex" id="male" required>
          <label for="male">Male</label>
        </div>
        <div>
          <input type="radio" name="sex" id="female" required>
          <label for="female">Female</label>
        </div>
      </div>
      <div class="text-center">
        <button type="button" class="btn btn-primary next mt-3">NEXT</button>
      </div>
    </div>
  </div>
  <!-- mail pass -->
  <div class="register3 w-50 flex-column justify-content-center align-items-center" style="display: none;">
    <label for="" class="d-block mb-4">
      <h1 class="s-40">Create Account</h1>
    </label>
    <input type="email" class="form-control user w-75 d-inline-block mt-3" placeholder="Email"
      id="exampleInputEmail1" required>
    <input type="password" class="form-control pass w-75 d-inline-block mt-3" placeholder="Password"
      id="exampleInputPassword1" required>
    <input type="password" class="form-control repass w-75 d-inline-block mt-3" placeholder="RePassword"
      id="exampleInputPassword2" required>
    <button type="button" class="btn btn-primary login-btn bth-signup mt-3">SIGN UP</button>
  </div>
</div>
    `);

  // reset animation login box khi tắt bật lại
  $(".signin").click(function () {
    $(".register2").css("animation", "");
    $(".signupp").css("animation", "");
    $(".register").css("animation", "");
    $(".background-signup").css("display", "flex");
  });
  // vùng hủy close login box
  $(".background-signup-content").click(function (event) {
    event.stopPropagation();
  });
  // vùng close login box
  $(".background-signup").click(function () {
    $(".background-signup").fadeOut();
  });
  //   animation login box
  $(".register-btn").click(function () {
    if ($(".register-btn").text() == "SIGN UP") {
      $(".register").css("display", "none");
      $(".signupp label h1").text("Welcome back!");
      $(".register-btn").text("SIGN IN");
      $(".register2").css("display", "flex");
      $(".register2").css("animation", "LtR ease 0.7s");
      $(".signupp").css("animation", "RtoL ease 0.7s");
    } else {
      $(".register").css("display", "flex");
      $(".signupp label h1").text("Hello friend!");
      $(".register-btn").text("SIGN UP");
      $(".register2").css("display", "none");
      $(".register3").css("display", "none");
      $(".register").css("animation", "RtL ease 0.7s");
      $(".signupp").css("animation", "LtoR  ease 0.7s");
    }
  });
  if (localStorage.getItem("login") == 1) {
    signinSuccess();
  }
  // register
  $(".next").click(function () {
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    if (!(firstname && lastname)) {
      toast({
        title: "error",
        message: "Write something!!",
        type: "warning",
      });
    } else {
      $(".register2").css("display", "none");
      $(".register3").css("display", "flex");
    }
  });
  $(".bth-signup").click(function () {
    var user = $(".user").val();
    var pass = $(".pass").val();
    var repass = $(".repass").val();
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var name = firstname + " " + lastname;

    if (!$(".user").val() || !$(".pass").val() || !$(".repass").val()) {
      toast({
        title: "error",
        message: "Write something!!",
        type: "warning",
      });
    } else {
      if (pass != repass) {
        toast({
          title: "warning",
          message: "Password and Repassword different!!",
          type: "warning",
        });
      } else {
        toast({
          title: "Success",
          message: "Sign Up Success.",
          type: "success",
        });
        setguest(user, pass, name);
        $(".background-signup").fadeOut();
      }
    }
  });
  // login
  $(".bth-signin").click(function () {
    switch (signin()) {
      case 0:

        break;
      case 1:
        $(".errorr").html("");
        localStorage.setItem("login", "1");
        location.reload();
        break;
    }
  });
  //logout
  $(".logout").click(function () {
    localStorage.setItem("login", "0");
    location.reload();
  });
  // xóa bớt animation trên mobile
  const mediaQuery = window.matchMedia("(max-width: 576px)");
  if (mediaQuery.matches) {
    $('div [data-aos="flip-right"]').removeAttr("data-aos");
    $('div [data-aos="slide-right"]').removeAttr("data-aos");
    $('div [data-aos="zoom-in"]').removeAttr("data-aos");
  }

  //scroll top
  $("body").append(`
  <div class="scroll-top">
      <i class="fa-solid fa-angle-up"></i>
  </div>
  `);
  $(document).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $(".scroll-top").fadeIn();
    } else if ($(this).scrollTop() < 300) {
      $(".scroll-top").fadeOut();
    }
  });
  $(".scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  //error box
  var icons = {
    success: "fa-solid fa-circle-check",
    warning: "fa-solid fa-exclamation",
  };
  var x = -10;
  function toast({ title, message, type }) {
    var icon = icons[type];
    $("#toast").append('<div class="toastt">');
    $(".toastt:last-child").attr("class", `toastt toastt--${type}`);
    $("#toast").append(
      $(".toastt:last-child").html(`
    <div class="icon m-5 s-20">
      <i class="${icon}"></i>
    </div>
    <div class="info">
      <h3>${title}</h3>
      <p>${message}</p>
    </div>
    `)
    );
    $(".toastt:last-child").animate({ top: `${(x += 86)}px` });
    $(".toastt:last-child").animate(
      { right: "0", top: `${x}`, opacity: "1" },
      "slow"
    );

    $(this).delay(2000).remove();
    setTimeout(function () {
      $(".toastt:first-child").remove();
      $(".toastt:first-child").animate({ top: `${(x -= 86)}px` }, "slow");
    }, 3000);
  }
});

function guest(user, pass, name) {
  this.user = user;
  this.pass = pass;
  this.name = name;
}

function signin() {
  if (!$(".email").val() || !$(".password")) {
    // alert("Write somthing!!");
    return 0;
  } else {
    for (var i = parseInt(localStorage.getItem("guestID")); i > 0; i--) {
      var guest2 = JSON.parse(localStorage.getItem(i));
      if (
        $(".email").val() != guest2.user ||
        $(".password").val() != guest2.pass
      ) {
        $(".errorr").html("Username or Password incorrect.");
      } else {
        localStorage.setItem("DN", guest2.name);
        return 1;
      }
    }
  }
}

function signinSuccess() {
  $(".DN").html(`
  <p class="s-16 w-100 text-end">${localStorage.getItem("DN")}</p>
  <img class="dropdown-toggle" width="15%" src="assets/Img/avatar.png" alt=""  id="navbarDropdown"
  role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
  
  <ul class="dropdown-menu account-content">
    <li><a class="dropdown-item" href="#">My account</a></li>
    <li><a class="dropdown-item" href="#">Shoping cart</a></li>
    <li><a class="dropdown-item logout" href="#">Log out</a></li>
  </ul>
  `);
}

function setguest(user, pass, name) {
  var newguest = new guest(user, pass, name);
  // set số lượng guest làm ID
  if (!localStorage.getItem("guestID")) {
    localStorage.setItem("guestID", "1");
  } else {
    localStorage.setItem(
      "guestID",
      parseInt(localStorage.getItem("guestID")) + 1
    );
  }
  // get ID từ số lượng guest
  localStorage.setItem(
    localStorage.getItem("guestID"),
    JSON.stringify(newguest)
  );
  $(".user").val("");
  $(".pass").val("");
  $(".repass").val("");
  $(".name").val("");
}
