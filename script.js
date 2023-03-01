const infinity = document.querySelector("#infi-list");
let counter = 11;
infinity.addEventListener("scroll", function () {
  if (infinity.scrollHeight <= infinity.offsetHeight + infinity.scrollTop) {
    const htmlContent = ` 
    <li class="${counter}">Item ${counter++}</li>
    <li class="${counter}">Item ${counter++}</li>
    `;
    infinity.insertAdjacentHTML("beforeend", htmlContent);
  }
});

