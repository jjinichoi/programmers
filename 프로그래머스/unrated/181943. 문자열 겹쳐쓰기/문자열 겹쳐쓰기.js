function solution(my_string, overwrite_string, s) {
    let answer = [];
    answer = my_string.split('');
    answer.splice(s,overwrite_string.length,overwrite_string)
    
    return answer.join('');
}

console.log(solution)