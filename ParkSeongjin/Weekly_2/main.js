// 추가로 해볼꺼?
// => google API 사용해서 지도 뛰워서, 지도에 마크를 누르면 되게 만들기
const addForm = document.querySelector(".matzip__add");
const inputImg = document.querySelector("#image_uploads");
inputImg.addEventListener("change", updatePreview);

const preview = document.querySelector(".preview");

// img 파일 업로드 preview
function updatePreview(event) {
  const fileInput = event.target;
  const file = fileInput.files[0];
  const preview = document.querySelector(".preview");

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        preview.innerText = `이미지 : ${file.name}`;
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
// submit
addForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const description = document.querySelector("#description").value;
  const file = inputImg.files[0];

  const matzips = document.querySelector("#matzips");
  // <hr> 태그부터 추가
  const hr = document.createElement("hr");
  hr.classList.add("matzips__divider");
  if (matzips.lastElementChild && matzips.lastElementChild.tagName !== "HR")
    matzips.appendChild(hr);
  // <div class="matzips__matzip"> 태그 추가
  const matzip = document.createElement("div");
  matzip.classList.add("matzips__matzip");
  // mazip안에 h3, img, p, button, deleteBtn 추가
  const matzipTitle = document.createElement("h3");
  matzipTitle.classList.add("matzips__matzip__title");
  matzipTitle.innerText = name;
  matzip.appendChild(matzipTitle);

  const img = await loadImage(file);
  img.style.maxWidth = "100%";
  matzip.appendChild(img);

  const matzipContents = document.createElement("p");
  matzipContents.classList.add("matzips__matzip__contents");
  matzipContents.innerText = description;
  matzip.appendChild(matzipContents);

  const heartBtn = document.createElement("button");
  heartBtn.innerText = "♥";
  matzip.appendChild(heartBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑️";
  deleteBtn.classList.add("delete__btn");
  matzip.appendChild(deleteBtn);

  matzips.appendChild(matzip);

  alert(`${name} 맛집 등록 완료!`);
  // Reset form input
  document.querySelector(".matzip__add").reset();
  preview.innerText = "업로드할 이미지가 선택되지 않았습니다.";
});

// Img 로딩을 동기적으로 처리하는 함수
function loadImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        resolve(img);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

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
