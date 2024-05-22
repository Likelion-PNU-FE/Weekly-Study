function solution(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    let answer = 0;
    answer = result / numbers.length;
    return answer;
}
