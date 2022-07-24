var x = -10;
function toast({ title, message, type }) {
    var icons = {
        success: "fa-solid fa-circle-check",
        warning: "fa-solid fa-exclamation",
      };
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