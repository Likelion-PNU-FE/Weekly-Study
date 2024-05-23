// 가격을 "10,000원" 형태로 변환하는 함수
export function formatPrice(price) {
  return price.toLocaleString() + "원";
}

// 로컬 스토리지에서 데이터를 가져오는 함수
export function getLocalStorageData(key) {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : [];
}
