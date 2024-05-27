function solution(quiz) {
    let answer = [];
    for (let i = 0; i < quiz.length; i++) {
        let divide = quiz[i].split(' ');
        let num1 = divide[0];
        let op = divide[1];
        let num2 = divide[2];
        let result = divide[4];
        if (op === '+') {
            if (parseInt(result) === parseInt(num1) + parseInt(num2)) answer.push('O');
            else answer.push('X');
        } else if (op === '-')
            if (parseInt(result) === parseInt(num1) - parseInt(num2)) answer.push('O');
            else answer.push('X');
    }
    return answer;
}
