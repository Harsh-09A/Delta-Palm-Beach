const scrollContainers = document.querySelectorAll("#infiniteScroll--left");

scrollContainers.forEach((container) => {
  const scrollWidth = container.scrollWidth;
  let isScrollingPaused = false;

  window.addEventListener("load", () => {
    self.setInterval(() => {
      if (isScrollingPaused) {
        return;
      }
      const first = container.querySelector("article");

      if (!isElementInViewport(first)) {
        container.appendChild(first);
        container.scrollTo(container.scrollLeft - first.offsetWidth, 0);
      }
      if (container.scrollLeft !== scrollWidth) {
        container.scrollTo(container.scrollLeft + 1, 0);
      }
    }, 15);
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.right > 0;
  }

  function pauseScrolling() {
    isScrollingPaused = true;
  }

  function resumeScrolling() {
    isScrollingPaused = false;
  }
  const allArticles = container.querySelectorAll("article");
  for (let article of allArticles) {
    article.addEventListener("mouseenter", pauseScrolling);
    article.addEventListener("mouseleave", resumeScrolling);
  }
});

// fancy Box
Fancybox.bind('[data-fancybox="gallery"]', {
  // Custom options for the first gallery
});

Fancybox.bind('[data-fancybox="plans"]', {
  // Custom options for the first gallery
});

Fancybox.bind('[data-fancybox="internal_amenities"]', {
  // Custom options for the first gallery
});

Fancybox.bind('[data-fancybox="external_amenities"]', {
  // Custom options for the first gallery
});

// Popup Auto
$(window).ready(function () {
  setTimeout(function () {
    $("#popupModal").modal("show");
  }, 3000);
});

// Toggle Content Button
function toggleContent(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More ...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
