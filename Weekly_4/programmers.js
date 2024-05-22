//배열의 평균값
function solution(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
}

//각도기
function solution(angle) {
    let answer;
    if (0 < angle && angle < 90) {
        answer = 1;
    } else if (angle === 90) {
        answer = 2;
    } else if (90 < angle && angle < 180) {
        answer = 3;
    } else answer = 4;
    return answer;
}

/*
function solution(angle) {
    let answer;
    if (0 < angle < 90) {
        answer = 1;
    } else if (angle = 90) {
        answer = 2;
    } else if (90 < angle < 180) {
        answer = 3;
    } else answer = 4;
    return answer;
} 왜 틀렸나?
*/

//짝수의 합
function solution(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            //대입은 =, 계산은 ===
            sum += i;
        }
    }
    return sum;
}

/*
    for(let i=2; i<=n; i+=2)
            sum += i;
*/

//배열 뒤집기
function solution(num_list) {
    return num_list.reverse();
}

//배열 자르기
function solution(numbers, num1, num2) {
    let answer = []; //배열 선언 시 꼭 =[] 이걸 같이 붙여야 하나봄
    for (let i = num1; i <= num2; i++) {
        answer.push(numbers[i]);
    }
    return answer;
}

//문자열 뒤집기
function solution(my_string) {
    let answer = ''; //문자열이면 선언 시 = "" 붙여주기
    for (let i = my_string.length - 1; i >= 0; i--) {
        //length 함수는 문자열에도 쓸 수 있음
        //배열은 0번째부터 시작해서 .length-1번째까지 있음, 전체 개수가 .length개
        answer += my_string[i]; //문자열도 배열처럼 []로 각 원소?가 몇 번째인지를 나타낼 수 있다면 배열과 문자열의 차이는 뭐지? 배열이 더 큰 범주인가
    }
    return answer;
}

//모스 부호
/*
function solution(letter) {
    let answer = '';
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
};
    for (let i=0; i<=letter.length; i++) {
        answer+=letter.morse;
    }
    
    return answer;
}
*/
// let morse = [
//     {'.-':'a'},{'-...':'b'},{'-.-.':'c'},{'-..':'d'},{'.':'e'},{'..-.':'f'},{'--.':'g'},{'....':'h'},{'..':'i'},{'.---':'j'},{'-.-':'k'},{'.-..':'l'},{'--':'m'},{'-.':'n'},{'---':'o'},{'.--.':'p'},{'--.-':'q'},{'.-.':'r'},{'...':'s'},{'-':'t'},{'..-':'u'},{'...-':'v'},{'.--':'w'},{'-..-':'x'},{'-.--':'y'},{'--..':'z'}
// ];
// let morse = [
//     ['.-':'a'], ['-...':'b'], ['-.-.':'c'], ['-..':'d'], ['.':'e'], ['..-.':'f'], ['--.':'g'], ['....':'h'], ['..':'i'], ['.---':'j'], ['-.-':'k'], ['.-..':'l'], ['--':'m'], ['-.':'n'], ['---':'o'], ['.--.':'p'], ['--.-':'q'], ['.-.':'r'], ['...':'s'], ['-':'t'], ['..-':'u'], ['...-':'v'], ['.--':'w'], ['-..-':'x'], ['-.--':'y'], ['--..':'z']
// ];
// let morse = [
//     ['.-','a'], ['-...','b'], ['-.-.','c'], ['-..','d'], ['.','e'], ['..-.','f'], ['--.','g'], ['....','h'], ['..','i'], ['.---','j'], ['-.-','k'], ['.-..','l'], ['--','m'], ['-.','n'], ['---','o'], ['.--.','p'], ['--.-','q'], ['.-.','r'], ['...','s'], ['-','t'], ['..-','u'], ['...-','v'], ['.--','w'], ['-..-','x'], ['-.--','y'], ['--..','z']
// ];
// let morse = [
//     {'.-','a'},{'-...','b'},{'-.-.','c'},{'-..','d'},{'.','e'},{'..-.','f'},{'--.','g'},{'....','h'},{'..','i'},{'.---','j'},{'-.-','k'},{'.-..','l'},{'--','m'},{'-.','n'},{'---','o'},{'.--.','p'},{'--.-','q'},{'.-.','r'},{'...','s'},{'-','t'},{'..-','u'},{'...-','v'},{'.--','w'},{'-..-','x'},{'-.--','y'},{'--..','z'}
// ];

//모스부호 (1)
function solution(letter) {
    let morse = [
        { '.-': 'a' },
        { '-...': 'b' },
        { '-.-.': 'c' },
        { '-..': 'd' },
        { '.': 'e' },
        { '..-.': 'f' },
        { '--.': 'g' },
        { '....': 'h' },
        { '..': 'i' },
        { '.---': 'j' },
        { '-.-': 'k' },
        { '.-..': 'l' },
        { '--': 'm' },
        { '-.': 'n' },
        { '---': 'o' },
        { '.--.': 'p' },
        { '--.-': 'q' },
        { '.-.': 'r' },
        { '...': 's' },
        { '-': 't' },
        { '..-': 'u' },
        { '...-': 'v' },
        { '.--': 'w' },
        { '-..-': 'x' },
        { '-.--': 'y' },
        { '--..': 'z' },
    ];
    let answer = morse.map(solution(letter));
    return answer;
}

//OX퀴즈
function solution(quiz) {
    let result = '';
    for (let i = 0; i < quiz.length; i++) {
        let list = quiz[i].split(' ');
        let num1 = list[0];
        let num2 = list[2];
        let num3 = list[4];
        if (list[2] === '+') {
            let res = num1 + num2;
            if (res === num3) {
                result.push = 'O';
            } else if (res != num3) {
                result.push = 'X';
            }
            return result;
        } else if (list[2] === '-') {
            let res = num1 - num2;
            if (res === num3) {
                result.push = 'O';
            } else if (res != num3) {
                result.push = 'X';
            }
            return result;
        }
    }
}

//옹알이 (1)
function solution(babbling) {
    //babbling.split(',');
    let answer = 0;
    for (let i = 0; i <= babbling.length - 1; i++) {
        let result = [];
        if (babbling[i].indexOf('aya') != -1) {
            //aya는 존재한다
            result.push('y');
        } else result.push('n');
        if (babbling[i].indexOf('ye') != -1) {
            //ye는 존재한다
            result.push('y');
        } else result.push('n');
        if (babbling[i].indexOf('woo') != -1) {
            //woo는 존재한다
            result.push('y');
        } else result.push('n');
        if (babbling[i].indexOf('ma') != -1) {
            //ma는 존재한다
            result.push('y');
        } else result.push('n');
        if (result.indexOf('n') != -1) {
            //n이 있다
            answer += 0;
        } else answer += 1;
    }
    return answer;
}

//서울에서 김서방 찾기
function solution(seoul) {
    let answer = '';
    for (let i = 0; i <= seoul.length - 1; i++) {
        if (seoul[i] === 'Kim') {
            answer = `김서방은 ${i}에 있다`;
            //$는 객체 식별자. 변수 함수 등 다 식별함
            //``는 백틱. 백틱 안에는 ${} 쓸 수 있음. 만약 '' 쓰면 '김서방은 '+i+'에 있다'라 해야 돼서 귀찮아짐
        }
    }
    return answer;
}
