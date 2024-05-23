import { getLocalStorageData, formatPrice } from "./util.js";

document.addEventListener("DOMContentLoaded", function () {
  displayMenuBoard();
});

// 메뉴판을 나타내는 함수
function displayMenuBoard() {
  // 메뉴판 초기화
  const menuBoard = document.getElementById("menuBoard");
  menuBoard.innerHTML = `<h3 class="menu__title">메뉴판</h3>`;

  const matzipList = getLocalStorageData("matzips");

  const savedImgSrc = localStorage.getItem("selectedImgSrc");
  const imgSrc = JSON.parse(savedImgSrc);

  matzipList.forEach((matzip) => {
    // matzip중에서 imgURL이 동일한 녀석만 필터링 하는 단계
    if (matzip.inputImg === imgSrc) {
      if (matzip.menu) {
        matzip.menu.forEach((menuItem) => {
          const menuElement = document.createElement("div");
          menuElement.classList.add("menu");
          menuElement.innerHTML = `<p>${menuItem.name} - ${formatPrice(
            Number(menuItem.price)
          )}</p>
          <button class="menu__delete__btn">X</button>
          `;
          menuBoard.appendChild(menuElement);
        });
      }
    }
  });

  // menu추가하는 태그들 생성
  const menuAdd = document.createElement("div");
  menuAdd.classList.add("menu__add");
  menuAdd.innerHTML = `
<label for="name">이름 : </label>
<input type="text" id="name" required>
<label for="price">가격 : </label>
<input type="text" id="price" required>
<button class="menu__add__btn">메뉴 추가</button>
  `;
  menuBoard.appendChild(menuAdd);
}
