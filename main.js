var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//  

 
document.addEventListener("DOMContentLoaded", function() {
  let items = document.querySelectorAll(".item");

  items.forEach(function(item) {
    let icon = item.querySelector("i");
    let paragraph = item.querySelector("p");
    let subHeading = item.querySelector("h3");

    icon.addEventListener("click", function() {
      if (icon.classList.contains("icon-plus")) {
        icon.classList.remove("icon-plus");
        icon.classList.add("icon-minus");
        subHeading.classList.remove("hidden");
      } else {
        icon.classList.remove("icon-minus");
        icon.classList.add("icon-plus");
        subHeading.classList.add("hidden");
      }
    });
  });
});
 
