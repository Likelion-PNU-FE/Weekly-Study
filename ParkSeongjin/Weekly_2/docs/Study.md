# 2주차 공부기록

### target.nextElementSibling
js에서 target.nextElementSibling을 활용해서 원하는 target의 바로 다음 요소를 선택할 수 있다. 

### input type=file 시 UI 이쁘게
input은 opacity 0 만들고 label 태그를 꾸며주기

### img 로딩 비동기 → 동기 처리
img를 그냥 받아서 appendChild 처리를 해 줬더니 제일 마지막 순서로 img가 가버리는 문제가 발생했다.

해결법은 이미지 받는 로직을 promise안에 넣어서 동기처리.

### 새로 추가한 요소에는 delete event가 안 된 경우
부모 요소에 이벤트 위임을 설정하여 모든 삭제 버튼에 대한 클릭 이벤트를 처리할 수 있다.

### parentElement.lastElementChild
부모의 가장 마지막 요소를 선택하고 싶으면 parentElement.lastElementChild를 사용하면 된다.