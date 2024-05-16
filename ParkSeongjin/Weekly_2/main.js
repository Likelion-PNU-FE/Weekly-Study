const addForm = document.querySelector(".matzip__add");

// submit
addForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const description = document.querySelector("#description").value;
  const inputImg = document.querySelector("#image_uploads").value;

  const matzips = document.querySelector("#matzips");
  const div = document.createElement("div");
  div.classList.add("matzip__group");
  div.innerHTML = `<hr class="matzips__divider" />
  <div class="matzips__matzip">
    <h3 class="matzips__matzip__title">${name}</h3>
    <img src="${inputImg}" alt="월남면반" />
    <p class="matzips__matzip__contents">
      ${description}
    </p>
    <button>♥</button>
    <button>🗑️</button>
  </div>`;
  matzips.appendChild(div);

  alert(`${name} 맛집 등록 완료!`);
  // Reset form input
  document.querySelector(".matzip__add").reset();
});

// DeleteBtn
const matzips = document.querySelector("#matzips");
matzips.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete__btn")) {
    const target = e.target.parentElement;
    const hrElement = target.nextElementSibling;
    target.remove();
    if (hrElement && hrElement.tagName === "HR") {
      hrElement.remove();
    }
    alert("삭제 완료!");
  }
});
