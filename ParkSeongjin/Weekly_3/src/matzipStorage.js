export let matzipList = [
  {
    name: "맛나 식당",
    inputImg: "https://source.unsplash.com/1600x900/?koreanfood",
    description:
      "맛나 식당에서 먹은 김치찌개는 정말 일품이었습니다. 서비스도 훌륭하고, 분위기도 좋아 다음에 꼭 다시 방문하고 싶어요.",
    like: false,
    menu: [
      { name: "김치찌개", price: "10000" },
      { name: "된장찌개", price: "9000" },
      { name: "비빔밥", price: "8000" },
      { name: "삼겹살", price: "15000" },
      { name: "계란말이", price: "7000" },
    ],
  },
  {
    name: "해피 카페",
    inputImg: "https://source.unsplash.com/1600x900/?cafe",
    description:
      "커피 맛이 일품이며, 케이크도 맛있습니다. 친구들과의 수다 떨기 좋은 곳.",
    like: false,
    menu: [
      { name: "아메리카노", price: "4000" },
      { name: "카페라떼", price: "4500" },
      { name: "녹차라떼", price: "5000" },
      { name: "치즈케이크", price: "6000" },
      { name: "티라미수", price: "6500" },
    ],
  },
  {
    name: "빠르고 맛있는 햄버거",
    inputImg: "https://source.unsplash.com/1600x900/?hamburger",
    description: "햄버거와 감자튀김이 맛있어요. 빠른 서비스가 마음에 들어요.",
    like: false,
    menu: [
      { name: "치즈버거", price: "5000" },
      { name: "불고기버거", price: "5500" },
      { name: "새우버거", price: "6000" },
      { name: "감자튀김", price: "2000" },
      { name: "콜라", price: "1500" },
    ],
  },
  {
    name: "초밥 천국",
    inputImg: "https://source.unsplash.com/1600x900/?sushi",
    description:
      "신선한 재료와 깔끔한 맛이 인상적인 곳입니다. 초밥을 좋아한다면 한 번쯤 방문해볼 가치가 있어요.",
    like: true,
    menu: [
      { name: "연어 초밥", price: "12000" },
      { name: "참치 초밥", price: "15000" },
      { name: "장어 초밥", price: "18000" },
      { name: "광어 초밥", price: "13000" },
      { name: "아보카도 롤", price: "8000" },
    ],
  },
  {
    name: "이탈리아 음식점",
    inputImg: "https://source.unsplash.com/1600x900/?italianrestaurant",
    description:
      "분위기가 정말 좋고 음식도 맛있습니다. 특별한 날 방문하기 좋은 곳이에요.",
    like: true,
    menu: [
      { name: "파스타", price: "12000" },
      { name: "피자", price: "15000" },
      { name: "리조또", price: "18000" },
      { name: "샐러드", price: "8000" },
      { name: "와인", price: "10000" },
    ],
  },
];

localStorage.setItem("matzips", JSON.stringify(matzipList));
