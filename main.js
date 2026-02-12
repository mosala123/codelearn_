// Initialize Swiper for testimonials
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    }
  }
});

// ========== FAQ Toggle (الضغط على أيقونة + / -) ==========
document.addEventListener("DOMContentLoaded", function() {
  // حدد كل عناصر FAQ
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function(item) {
    const icon = item.querySelector("i");
    const answer = item.querySelector(".faq-answer");

    // تأكد من وجود الأيقونة والإجابة
    if (!icon || !answer) return;

    // إضافة حدث الضغط على الأيقونة فقط
    icon.addEventListener("click", function(e) {
      e.stopPropagation(); // منع تفعيل أي أحداث أخرى

      // تبديل الأيقونة بين plus و minus
      if (icon.classList.contains("fa-plus")) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        answer.classList.add("show"); // إظهار الإجابة
      } else {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        answer.classList.remove("show"); // إخفاء الإجابة
      }
    });
  });
});