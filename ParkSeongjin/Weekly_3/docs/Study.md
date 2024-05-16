# 3주차 공부기록

### 중복 확인
``` javascript
export default function checkDuplicate(url) {
  const imgs = document.querySelectorAll("img");
  let exist = false;
  imgs.forEach((img) => {
    if (img.getAttribute("src") === url) {
      exist = true;
    }
  });
  return exist;
}
```
여기서 img.src === url 로 작성했더니 절대경로로 반환하여 img 태그에 설정된 url이 동일하더라도 두 url이 일치하지 않을 수 있다고 했다.
깔끔하게 하려면 img.getAttribute를 사용해서 상대경로로 비교하면 된다고 한다.

### 좋아요 버튼 토글
``` javascript
if (e.target.classList.contains("like__btn")) {
    const target = e.target;
    target.classList.toggle("like");
  }
```
굳이 like 있는지 없는지 확인 안하고, toggle로 더 간단히 구현 가능했다.

### dataset HTML property
`<p data-id='123' data-type='number'>`
이런식으로 html 태그에 데이터 관련 정보를 넣어줘서 필터링 할 때 참고해서 사용했다.
html은 다 노출되므로, 중요한 데이터는 이런식으로 관리하면 안된다.     

``` javascript
const matzips = document.querySelectorAll(".matzips__matzip");
  matzips.forEach((matzip) => {
    if (filter === "*" || filter === matzip.dataset.type) {
      matzip.classList.remove("invisible");
    } else {
      matzip.classList.add("invisible");
    }
  });
```
---

### localStorage에 추가한 내용이 새로고침 하면 사라지 경우

로컬 스토리지에 데이터가 저장되었다가 새로고침할 때 사라지는 현상은 아마도 데이터를 로드하는 과정에서 발생할 수 있습니다. 웹페이지가 로드되거나 새로고침될 때, 로컬 스토리지로부터 저장된 데이터를 불러와서 matzipList 배열에 다시 할당하는 과정이 필요합니다. 이 과정이 누락되면, matzipList 배열이 초기 상태로 재설정되어 변경사항이 사라집니다.

### HTML안의 텍스트를 기반으로 데이터 필터링
HTML 요소 내의 특정 내용을 기반으로 localStorage에서 데이터를 필터링하고 싶다면, 먼저 해당 내용을 읽어와야 합니다. 주어진 HTML 구조에서는, 삭제 버튼을 클릭했을 때 상위 요소 중 h3 태그 안의 내용을 찾아 이를 name으로 사용하면 됩니다.

``` javascript
// 클릭된 삭제 버튼에서 가장 가까운 .matzips__matzip 요소를 찾는다
  const matzipElement = event.target.closest('.matzips__matzip');
// 해당 요소 내에 있는 .matzips__matzip__title 요소의 텍스트를 찾는다
  const name = matzipElement.querySelector('.matzips__matzip__title').textContent;
```

### html page 이동
``` javascript
window.location.href = "matzipmenu.html";
    // 새로운 html페이지로 이동
```


### 돈 단위 10000 => 10,000
number.toLocaleString();

### localStorage 궁금한 것 들
localStorage 관련 코드들을 따로 분리해야하는지?
브라우저에 그냥 직접 손으로 데이터를 삭제했는데 다시 데이터를 넣는 방법은?