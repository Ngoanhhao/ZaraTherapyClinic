$(document).ready(function () {
  for (let i = 1; i < 13; i++) {
    $(".product").append(`<div class="item"></div>`);
    $(`.product .item:nth-child(${i})`).html(`
            <div class="item-img">
                <a href="./dataProducts.html" target="_blank" data-id="${i}">
                    <img width="80%" class="" src="${environs[i].img}" alt="">
                </a>
            </div>
            <div class="text-center">
                <h3 class="s-14">${environs[i].name}</h3>
                <p class="d-inline-block s-14">Price: <h3 class="s-14 d-inline-block" style="color: #0d6efd;"> ${environs[i].price}</h3></p>
                <button type="button" class="btn btn-products btn-outline-info w-50"  data-id="${i}" data-name="environs" data-quality="0">Add to cart</button>
            </div>
        `);
  }
  $(".item-img a").click(function () {
    localStorage.setItem("NamePage", "environs");
    localStorage.setItem("IdPage", $(this).attr("data-id"));
  });
});
