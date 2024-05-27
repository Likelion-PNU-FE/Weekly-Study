function solution(babbling) {
    const valids = ['aya', 'ye', 'woo', 'ma'];
    let answer = 0;
    for (let word of babbling) {
        let start = word;
        for (let valid of valids) {
            start = start.split(valid).join(' ');
        }
        if (start.trim() === '') answer++;
    }
    return answer;
}
