const filter = (e) => {
  // Remove selection from the previous item and select new one
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target = e.target;
  target.classList.add("selected");

  // matzip filtering logic
  const filter = e.target.dataset.filter;
  // 최애 맛집 누르면 최애 맛집만 뜨도록,
  // All 누르면 전체 다 뜨도록
  const matzips = document.querySelectorAll(".matzips__matzip");
  matzips.forEach((matzip) => {
    if (filter === "*" || filter === matzip.dataset.type) {
      matzip.classList.remove("invisible");
    } else {
      matzip.classList.add("invisible");
    }
  });
};

export default filter;
