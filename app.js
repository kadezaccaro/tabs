const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const content = document.querySelectorAll(".content");

about.addEventListener("click", (event) => {
  const id = event.target.dataset.id;

  if (id) {
    btns.forEach((btn) => {
      // remove active from all btns
      btn.classList.remove("active");
      // add active to clicked btn
      event.target.classList.add("active");
    });

    content.forEach((contentItem) => {
      // remove active from all content items
      contentItem.classList.remove("active");
    });
    const elementOfClickedId = document.getElementById(id);
    // add active to element of clicked id
    elementOfClickedId.classList.add("active");
  }
});
