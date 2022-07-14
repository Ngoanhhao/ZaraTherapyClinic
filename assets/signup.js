// login box
$(document).ready(function () {
  // create login box
  $(".background-signup").html(`
    <div class="background-signup-content d-flex overflow-hidden">
      <div class="w-50 register flex-column justify-content-center align-items-center">
        <label for="" class="d-block mb-4">
          <h1 class="s-40">Sign in</h1>
        </label>
        <input type="email" class="form-control w-75 email d-inline-block" placeholder="Email" id="exampleInputEmail1">
        <input type="password" class="form-control w-75 password d-inline-block mt-3" placeholder="Password"
          id="exampleInputPassword1">
          <div id="emailHelp" class="text-danger form-text s-14 d-block text-start errorr"></div>

          <p class="s-16 mb-3">Forgot your password?</p><button type="button" class="btn btn-primary login-btn bth-signin">SIGN IN</button>
      </div>

      <div class="w-50 signupp d-flex flex-column justify-content-center align-items-center">
        <label for="" class="d-block mb-4 text-white">
          <h1 class="s-40">Hello, Friend!</h1>
        </label>
        <button type="button" class="btn btn-primary register-btn">SIGN UP</button>
      </div>

      <div class="register2 w-50 flex-column justify-content-center align-items-center">

        <label for="" class="d-block mb-4">
          <h1 class="s-40">Register</h1>
        </label>

      <div class="infoGuest">
        <div id="name" class="d-flex justify-content-between">
          <input type="text" class="form-control name d-inline-block" placeholder="First Name" id="">
          <input type="text" class="form-control name d-inline-block" placeholder="Last Name" id="">
        </div>

        <div class="birthday d-flex mt-3 justify-content-around w-100">
          <label>Birthday</label>
          <input type="date" id="birthday" class="border-0" value="2000-01-01" name="birthday">
          </div>
          
          <div class="sex d-flex mt-3 justify-content-between s-16 w-100">
            <div>
                <input type="radio" name="sex" id="male">
                <label for="male">Male</label>
            </div>
            <div>
                <input type="radio" name="sex" id="female">
                <label for="female">Female</label>
            </div>
          </div>
          <div class="text-center">
            <button type="button" class="btn btn-primary next mt-3">NEXT</button>
          </div>
        </div>
      </div>
      
      <div class="register3 w-50 flex-column justify-content-center align-items-center">
      <label for="" class="d-block mb-4">
        <h1 class="s-40">Create Account</h1>
      </label>
      <input type="email" class="form-control user w-75 d-inline-block mt-3" placeholder="Email"
        id="exampleInputEmail1">
      <input type="password" class="form-control pass w-75 d-inline-block mt-3" placeholder="Password"
        id="exampleInputPassword1">
      <input type="password" class="form-control pass w-75 d-inline-block mt-3" placeholder="RePassword"
        id="exampleInputPassword1">
      <button type="button" class="btn btn-primary login-btn bth-signup mt-3">SIGN UP</button>
    </div>
    </div>
    `);
  
  // reset animation login box khi tắt bật lại
  $(".signin").click(function () {
    $(".background-signup").css("display", "flex");
    $(".register2").css("animation", "");
    $(".signupp").css("animation", "");
    $(".register").css("animation", "");
  });
  // vùng hủy close login box
  $(".background-signup-content").click(function (event) {
    event.stopPropagation();
  });
  // vùng close login box
  $(".background-signup").click(function () {
    $(".background-signup").css("display", "none");
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
  //next
  $(".next").click(function(){
    $(".register2").css("display","none")
    $(".register3").css("display","flex")
  })
  // tạo và kiểm tra username password
  $(".bth-signup").click(function () {
    var user = $(".user").val();
    var pass = $(".pass").val();
    // var name = $(".name")
    if (!user || !pass) {
      alert("Write somthing!!");
    } else {
      var newguest = new guest(user, pass);
      if (!localStorage.getItem("guestID")) {
        localStorage.setItem("guestID", "1");
      } else {
        localStorage.setItem(
          "guestID",
          parseInt(localStorage.getItem("guestID")) + 1
        );
      }
      localStorage.setItem(
        localStorage.getItem("guestID"),
        JSON.stringify(newguest)
      );
      alert("Successful account creation, login please");
      $(".user").val("");
      $(".pass").val("");
      $(".name").val("");
    }
  });
  $(".bth-signin").click(function () {
    switch (signin()) {
      case 0:
        alert("Write somthing!!");
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
        return 1;
      }
    }
  }
}

function signinSuccess() {
  $(".DN").html(`
  <p class="s-16 w-100 text-end"></p>
  <img class="dropdown-toggle" width="15%" src="assets/Img/avatar.png" alt=""  id="navbarDropdown"
  role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
  
  <ul class="dropdown-menu account-content">
    <li><a class="dropdown-item" href="#">My account</a></li>
    <li><a class="dropdown-item" href="#">Shoping cart</a></li>
    <li><a class="dropdown-item logout" href="#">Log out</a></li>
  </ul>
  `);
}
