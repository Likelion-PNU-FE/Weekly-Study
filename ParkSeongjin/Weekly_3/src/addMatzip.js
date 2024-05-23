import checkDuplicate from "./checkDuplicate.js";

const addMatzip = async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const description = document.querySelector("#description").value;
  const inputImg = document.querySelector("#image_uploads").value;

  const matzips = document.querySelector("#matzips");

  // 맛집 중복 검사
  if (checkDuplicate(inputImg)) {
    alert("이미 존재하는 맛집입니다.");
  } else {
    //로컬 스토리지 저장
    const newMatzip = {
      name,
      inputImg,
      description,
      like: false,
      menu: [
        { name: "김치찌개", price: "10000" },
        { name: "된장찌개", price: "9000" },
        { name: "비빔밥", price: "8000" },
        { name: "삼겹살", price: "15000" },
        { name: "계란말이", price: "7000" },
      ],
    };
    let matzipList;
    const storedMatzipList = localStorage.getItem("matzips");
    if (storedMatzipList) {
      matzipList = JSON.parse(storedMatzipList);
    }
    matzipList.push(newMatzip);
    localStorage.setItem("matzips", JSON.stringify(matzipList));
    // 화면 업데이트
    const div = document.createElement("div");
    div.classList.add("matzip__group");
    div.innerHTML = `
    <div class="matzips__matzip">
      <h3 class="matzips__matzip__title">${name}</h3>
      <img src="${inputImg}" alt="${name}" />
      <p class="matzips__matzip__contents">
      ${description}
      </p>
      <button class="like__btn">♥</button>
      <button class="delete__btn">🗑️</button>
    </div>`;
    matzips.appendChild(div);

    alert(`${name} 맛집 등록 완료!`);
  }

  // Reset form input
  document.querySelector(".matzip__add").reset();
};

export default addMatzip;
