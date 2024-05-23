import addMatzip from "./src/addMatzip.js";
import filter from "./src/filter.js";
import handleMatzip from "./src/handleMatzip.js";

// submit
const addForm = document.querySelector(".matzip__add");
addForm.addEventListener("submit", addMatzip);

// Like or DeleteBtn
const matzips = document.querySelector("#matzips");
matzips.addEventListener("click", handleMatzip);

// matzip load
let matzipList;
const storedMatzipList = localStorage.getItem("matzips");
if (storedMatzipList) {
  matzipList = JSON.parse(storedMatzipList);
}
matzipList.forEach((matzip) => {
  const div = document.createElement("div");
  div.classList.add("matzip__group");
  div.innerHTML = `<div class="matzips__matzip">
  <h3 class="matzips__matzip__title">${matzip.name}</h3>
  <img src="${matzip.inputImg}" alt="${matzip.name}" />
  <p class="matzips__matzip__contents">
  ${matzip.description}
  </p>
  <button class="like__btn">♥</button>
  <button class="delete__btn">🗑️</button>
</div>`;
  matzips.appendChild(div);

  if (matzip.like) {
    const likeBtn = div.querySelector(".like__btn");
    likeBtn.classList.toggle("like");
    likeBtn.parentElement.setAttribute("data-type", "like");
  }
});

//FilterMatzip
const matzipFilter = document.querySelector(".matzip__filter");
matzipFilter.addEventListener("click", filter);
