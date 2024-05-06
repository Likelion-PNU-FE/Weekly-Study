const hotplace = [
  {
    index: 0,
    name: "모름지기",
    picture: "0",
    detail: "돼지껍데기, 목살 맛집!",
  },
  {
    index: 1,
    name: "거창맷돌",
    picture: "0",
    detail: "순두부찌개 맛집!",
  },
  {
    index: 2,
    name: "춘하추동",
    picture: "0",
    detail: "콩국수 맛집!",
  },
  {
    index: 3,
    name: "모름지기",
    picture: "0",
    detail: "돼지껍데기, 목살 맛집!",
  },
  {
    index: 4,
    name: "거창맷돌",
    picture: "0",
    detail: "순두부찌개 맛집!",
  },
  {
    index: 5,
    name: "춘하추동",
    picture: "0",
    detail: "콩국수 맛집!",
  },
  {
    index: 6,
    name: "모름지기",
    picture: "0",
    detail: "돼지껍데기, 목살 맛집!",
  },
  {
    index: 7,
    name: "거창맷돌",
    picture: "0",
    detail: "순두부찌개 맛집!",
  },
  {
    index: 8,
    name: "춘하추동",
    picture: "0",
    detail: "콩국수 맛집!",
  },
  {
    index: 9,
    name: "모름지기",
    picture: "0",
    detail: "돼지껍데기, 목살 맛집!",
  },
  {
    index: 10,
    name: "거창맷돌",
    picture: "0",
    detail: "순두부찌개 맛집!",
  },
  {
    index: 11,
    name: "춘하추동",
    picture: "0",
    detail: "콩국수 맛집!",
  },
];

const $hotplace = document.querySelector(".hotplaceList");
const showList = (index) => {
  const $list = document.createElement("div");

  $list.className = "listLayout";
  $list.innerHTML += `
      <p>${hotplace[index].name}</p>
      <img src="./img/LikeLion_logo.png" alt="hotplace1" />
      <p>${hotplace[index].detail}</p>
      <div class="likeBtn" onclick="like(event)" type="button">🤍</div>
      `;
  $hotplace.append($list);
};
for (let i = 0; i < hotplace.length; i++) {
  showList(i);
}

const like = (e) => {
  const heart = e.target.textContent;
  const unlike = "🤍";
  const like = "❤️";

  if (e.target.innerHTML == unlike) {
    e.target.innerHTML = like;
  } else if (e.target.innerHTML == like) {
    e.target.innerHTML = unlike;
  }
};
