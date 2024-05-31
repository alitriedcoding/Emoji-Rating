const starEl = document.querySelectorAll(".fa-star");
const emojiEl = document.querySelectorAll(".fa-regular");
colorArray = ["red", "orange", "blue", "green", "lightblue"];

updatRating(0);
starEl.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
    updatRating(index);
  });
});

function updatRating(index) {
  starEl.forEach((starEl, idx) => {
    if (idx < index + 1) {
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  });
  emojiEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorArray[index];
  });
}
