const handleMatzip = (e) => {
  if (e.target.classList.contains("delete__btn")) {
    const target = e.target.parentElement;
    target.remove();
    //localStorage도 업데이트 해주기
    const matzipElement = e.target.closest(".matzips__matzip");
    // 해당 요소 내에 있는 .matzips__matzip__title 요소의 텍스트를 찾는다
    const name = matzipElement.querySelector(
      ".matzips__matzip__title"
    ).textContent;
    let matzipList;
    const storedMatzipList = localStorage.getItem("matzips");
    if (storedMatzipList) {
      matzipList = JSON.parse(storedMatzipList);
    }
    const filteredMatzip = matzipList.filter((matzip) => matzip.name !== name);
    localStorage.setItem("matzips", JSON.stringify(filteredMatzip));
    alert("삭제 완료!");
  } else if (e.target.classList.contains("like__btn")) {
    const target = e.target;
    target.classList.toggle("like");
    if (target.classList.contains("like")) {
      target.parentElement.setAttribute("data-type", "like");
    } else {
      target.parentElement.removeAttribute("data-type", "like");
    }
    //localStorage like도 업데이트
    const matzipElement = e.target.closest(".matzips__matzip");
    // 해당 요소 내에 있는 .matzips__matzip__title 요소의 텍스트를 찾는다
    const name = matzipElement.querySelector(
      ".matzips__matzip__title"
    ).textContent;
    let matzipList;
    const storedMatzipList = localStorage.getItem("matzips");
    if (storedMatzipList) {
      matzipList = JSON.parse(storedMatzipList);
    }
    const updatedMatzipList = matzipList.map((matzip) => {
      if (matzip.name === name) {
        return { ...matzip, like: !matzip.like };
      }
      return matzip;
    });
    localStorage.setItem("matzips", JSON.stringify(updatedMatzipList));
  } else {
    const matzipElement = e.target.closest(".matzips__matzip");
    // 해당 요소 내에 있는 img 요소의 url
    const imgSrc = matzipElement.querySelector("img").src;
    // imgSrc랑 로컬 스토리지에서 가지고 온 값 중에 일치하는 걸 찾음
    const storedMatzipList = localStorage.getItem("matzips");
    let matzipList = JSON.parse(storedMatzipList);
    let menu;
    matzipList.forEach((matzip) => {
      if (matzip.inputImg === imgSrc) {
        menu = matzip.menu;
      }
    });
    localStorage.setItem("selectedImgSrc", JSON.stringify(imgSrc));

    window.location.href = "matzipmenu.html";
  }
};

export default handleMatzip;
