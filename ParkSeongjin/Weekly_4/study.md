# 4주차 과제 제출입니다

4주차에는 js 문제들을 풀어보았습니다!


### 배열의 평균값

``` javascript 
function solution(numbers) {
    let sum = 0;
    for(let i =0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    
    return sum/numbers.length;
}
```

### 각도기

``` javascript 
function solution(angle) {
    if(angle>0 && angle <90) return 1;
    else if(angle === 90){
        return 2;
    } else if(angle>90 && angle<180){
        return 3;
    } else {
        return 4;
    }
    
}
```

### 짝수의 합
``` javascript
function solution(n) {
    while(n > 0 && n <= 1000) {
        if(n % 2 === 0) return n + solution(n-2); // 짝수면 n + 그 수 보다 2 작은수
        return solution(n-1);
    }
    return 0;
}
```
### 배열 뒤집기
``` javascript
function solution(num_list) {
     num_list.reverse();
    return num_list;
}
```
### 배열 자르기
``` javascript
function solution(numbers, num1, num2) {
    numbers.splice(num2+1, numbers.length);
    numbers.splice(0,num1);
    return numbers;
}
```
### 문자열뒤집기
``` javascript
function solution(my_string) {
    return Array.from(my_string).reverse().join('');
}
```
### 모스부호
``` javascript
function solution(letter) {
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    };
    const changed = letter.split(' ');
    const answer = [];
    
    for(let i=0; i<changed.length; i++){
        const key = changed[i];
        answer.push(morse[key]);
    }
    return answer.join('');
}
```
### OX quiz
``` javascript
function solution(quiz) {
    const answer = [];
    for(let i=0; i<quiz.length; i++){
        const equalIndex = quiz[i].indexOf('='); // 6
        const left = quiz[i].slice(0,equalIndex-1); // "3 - 4"
        const right =  quiz[i].slice(equalIndex+1,quiz[i].length+1) // "-3"
    
        if(eval(left) === Number(right)) {
            answer.push('O');
        } else if(eval(left) !== Number(right)) {
            answer.push('X');
        } 
    }
    return answer;
}
```

