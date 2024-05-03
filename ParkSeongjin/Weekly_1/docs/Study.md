# 1주차 공부기록

### <link ???.css> 파일이 여러개일 때 우선순위

가장 윗줄의 파일이 먼저 읽히고 실행된 다음
아랫줄의 파일이 그것을 덮어 쓰는 형태
⇒ 나중에 로드된 파일의 우선순위가 더 높다!

### flex vs grid

한 컨테이너의 안의 자식 요소들의 길이가 제각각일 때 flex를 쓰면 원하는 레이아웃이 힘들 수 있는데, grid는 바깥에서 미리 정의하고 들어가는 형태라서 이런 경우에 레이아웃 짜기가 훨 수월해진다.

``` css
display: grid;
grid-template-columns: 1fr 1fr 3fr 0.5fr;
```
이런식으로 grid-template-columns: ?fr ?fr ?fr
을 원하는 수만큼 배치하면 정해진 화면비율을 입력값에 따라 나눠먹는다.

flex도 growth shrink를 줄여서 잘 조절해서 사용하면 괜찮긴 하다.footer__contact

### navbar display:fixed 
navbar를 상단 고정시 body나 그 다음 요소에 padding-top: navbar높이 만큼 지정하면 서로 겹치는 것을 피할 수 있다.footer__contact

### centering trick

[수평 centering]
- 블럭라인 element => margin: auto;

- 인라인 element => text-align: center;

[수직 centering]
- transform: translate(50%, 50%)
- line-height: 100px(부모 상자 만큼)
