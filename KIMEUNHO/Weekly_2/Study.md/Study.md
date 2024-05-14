# 2주차 공부기록

## 1주차 과제 확장

-   js에서 스크립트 작성시 변수는 소문자로 시작하는 것이 일반적이다. 카멜 표기법!

-   변수를 선언할때는 var보다 let이 좋다.

1.  var을 사용하면 중복선언이 가능, let을 사용하면 중복 선언이 불가능!
2.  var을 사용하면 if, for 등의 코드내에서 선언된 후 코드 외부에서도 사용이 가능해진다.(코드 블록을 관통함)
3.  호이스팅시 초기화 차이 (hoisting:인터프리터가 코드 실행 전 변수가 해당 범위의 맨 위로 끌어 올리는 것처럼 보이는 현상)
    결론 :let선언은 호이스팅시 값 할당은 해당 블록에서 할당한 값으로, var선언은 호이스팅시 undefined로 초기화됨.

-   defer async 속성 > script의 실행시점을 조작할 수 있음!

    -   async : 스크립트가 페이지의 나머지 부분과 병렬로 로드됨. 스크립트의 로딩이 완료되면 페이지 파싱()이 중단되고 스크립트가 실행됨. 여러개의 async가 있는 경우 먼저 로드된 스크립트부터 실행 >> 스크립트가 독립적이고 페이지의 로딩을 차단하지 않아도 되는 경우 사용

    -   defer : 스크립트가 나머니 부부분과 병렬로 로드되지만, 페이지의 파싱이 완전히 끝난 후에 실행, 여러개의 defer가 있는 경우 문서에 나타난 순서대로 실행 >> 스크립트가 DOM(문서객체모델)을 조작하거나 다른 스크립트에 의존하는 경우 사용

*   파싱 : 코드를 실행하거나, 프로그램으로 변환시키기 위해 어휘분석, 토큰화를 하는데 이후 프로그래밍 언어의 문법에 맞는지 확인하는 과정

-   script 태그를 삽입에 대해 > 웹 페이지의 로딩 속도를 최적화, 사용자 경험 향상!
    script 태그가 가능한 위치:

1. head태그 내부 : 웹페이지 로딩될때 스크립트가 먼저실행
2. body 태그의 끝 부분 : 웹페이지 나머지 부분이 모두 로드된 후 스크립트가 실행된다.

-   반복되는 경우는 함수로!
    -   수정 전
    <pre>
    <code>
            var Target = document.getElementById("clock");
            function clock(){
            var time = new Date();
            var hours = time.getHours();
            var minutes = time.getMinutes();
            var seconds = time.getSeconds();
            Target.innerText=
            `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
            }
            clock();
            setInterval(clock, 1000);
    </code>
    </pre>
    -   수정 후
    <pre>
    <code>
     let target = document.getElementById("clock");
            function addZero(number){
                return number<10?'0${number}':number;
            }
            function clock(){
            let time = new Date();
            let hours = addZero(time.getHours());
            let minutes = addZero(time.getMinutes());
            let seconds = addZero(time.getSeconds());
            target.innerText=`${hours}:${minutes}:${seconds}`;
            }
            clock();
            setInterval(clock, 1000);
    </code>
    </pre>

*   BEM 방법론 : CSS 클래스 이름을 지정하는 방법론 웹페이지 구성요소를 블록(Block), 요소(Element), 수정자(Modifier) 세 가지 유형으로 나눈다. 이를 통해 CSS코드의 구조를 명확하게 하고, 유지 관리를 용이하게 한다.

1. Block : 웹 페이지의 독립적인 구성 요소. 예: 헤더, 메뉴, 로그인 폼 등
2. Element : 블록 내부의 구성 요소. 예: 메뉴 블록 내부의 각 메뉴 항목
3. Modifier : 불록이나 요소의 모양, 상태 등을 나타내는 표시, 예: 선택된 메뉴 항목, 비활성화된 버튼 등

-   이에 따라 CSS 클래스 이름을 block\_\_element--modifier 형식으로 지정

*   아직 익숙하지 않다..!

## 2주차 공부..!

-   html에서 input을 통해 사용자에게 값을 입력받을 수 있다. type을 통해 입력받는 타입을 결정하고, placeholder를 통해 입력창에 입력받을 값에 대한 정보를 기입할 수 있다. 특히, required 속성을 통해 필드가 비워져있으면 채워달라는 메시지를 표시할 수 있다!

-   getElementById를 사용할때 .value를 붙이지 않으면 요소 자체를 반환한다. 그래서 실제 값을 반환받기 위해서는 .value을 사용하면된다.
<pre><code>
const name = document.getElementById('name').value;
</code></pre>

-   image속성의 src와 alt에 접근할때는 '.'을 통해서 접근할 수 있다.
<pre><code>
restaurant_image.src = image_url;
</code></pre>
-   출력문장을 작성할때 배떱(``)을 이용하여 변수를 출력할 수 있다.
<pre><code>
alert(`${name} 맛집 등록 완료!`);
</code></pre>
-   삭제버튼에서 이벤트 리스너에서는 상위 요소(res_main)를 받아야한다. res_section은 동적으로 추가되므로 페이지가 로드될때 존재하지 않을 수 있기 때문..!
