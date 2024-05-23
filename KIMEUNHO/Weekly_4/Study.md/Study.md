# 4주차 공부기록

개인적으로는 옹알이 문제에 대해 알고리즘을 생각하는 것이 가장 어려웠던 것 같다.

1. 배열의 평균값

    - 다른 사람의 풀이를 보니 reduce 함수를 많이 사용했다. 배열을 순환하면서 합을 반환한 후 배열의 길이로 나누는 방법이 있었다.
        ```javascript
        const numbers = [4, 3, 2, 1];
        let sum = numbers.reduce((acc, cur) => acc + cur);
        ```

2. 각도기

    - 삼항 연산자, filter 함수를 사용하는 방법
        ```javascript
        function solution(angle) {
            return [0, 90, 91, 180].filter((x) => angle >= x).length;
        }
        ```
        angle이 몇 개의 구간에 속하는 지 확인하여 반환하는 방법

3. 짝수의 합

    - 수열 공식을 이용하여 n을 절반으로 나눈 값(half)과 그 값에 1을 더한 값(half+1)을 곱하면 n보다 작은 짝수의 합과 같음을 이용
        ```javascript
        function solution(n) {
            var half = Math.floor(n / 2);
            return half * (half + 1);
        }
        ```

4. 배열 뒤집기

    - reverse 함수를 이용하여 배열을 뒤집을 수 있다..!

5. 배열 자르기

    - splice() 함수 이용. 첫 번째 인자로 시작 인덱스, 두 번째 인자로 몇 개를 삭제할 건지를 받아 잘라서 반환하는 방법
        ```javascript
        function solution(numbers, num1, num2) {
            return numbers.splice(num1, num2 - num1 + 1);
        }
        ```

6. 문자열 뒤집기

    - 스프레드 문법을 이용한 방법. '...'을 이용하여 문자열을 배열로 변환. 문자열을 각 문자로 분해하여 배열로 만든 후 뒤집음
        ```javascript
        function solution(my_string) {
            var answer = [...my_string].reverse().join('');
            return answer;
        }
        ```

7. 모스 부호

    - for...of 를 통해 배열 요소를 하나씩 순차 접근하고, if문을 사용하여 요소가 배열 내에 있는지 확인할 수 있다.

8. OX 퀴즈

    - parseInt를 통해 문자열을 정수형으로 변환하여 계산을 함.

9. 옹알이

    - trim 함수를 이용하여 문자열의 양 끝의 공백을 제거하여 남아있는 문자가 있으면 옹알이에 해당하지 않는 알고리즘을 이용했다.
      다른 사람의 풀이에서는 ^와 $를 이용하여 문자열로 가능한 조합을 저장한 문자열을 생성하고, test를 이용해 특정 문자열이 확인하려는 문자열에 포함되어 있는지 확인하는 방법이 있다. word가 regex 내부에 있는 경우를 확인하는 방법.

        ```javascript
        function solution(babbling) {
            var answer = 0;
            const regex = /^(aya|ye|woo|ma)+$/; // 내부에 있는 문자열 중 하나 이상의 반복으로 이루어진 문자열을 생성

            babbling.forEach((word) => {
                if (regex.test(word)) answer++;
            });

            return answer;
        }
        ```

10. 서울에서 김서방 찾기

    - indexOf 함수를 이용하여 'Kim'의 위치를 바로 찾을 수 있음. 이 함수를 통해 for문을 사용하지 않고 위치를 찾을 수 있음.

11. 수박수박수박수박수박수

    - 홀수 번째에는 '수', 짝수 번째에는 '박'을 추가하여 n까지 추가하는 방법을 사용했다.

12. 비밀지도

    - toString 함수를 이용하여 주어진 수를 2진수로 변경하고, padStart를 통해 2진수를 몇 자리로 나타낼 것인지, 그리고 앞의 남는 자리는 0으로 추가한다. 그리고 or 연산자를 사용하여 결과값에 따라 '#' 또는 공백을 삽입하여 반환했다.
      다른 사람의 풀이에서는 replace 함수를 이용하여 기존 문자를 대체하고, push를 대체할 함수를 사용했다.
