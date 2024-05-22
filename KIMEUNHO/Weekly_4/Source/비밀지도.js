function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        let rearr1 = arr1[i].toString(2).padStart(n, '0');
        let rearr2 = arr2[i].toString(2).padStart(n, '0');
        let combined = '';
        for (let j = 0; j < n; j++) {
            combined += rearr1[j] === '1' || rearr2[j] === '1' ? '#' : ' ';
        }
        answer.push(combined);
    }
    return answer;
}
