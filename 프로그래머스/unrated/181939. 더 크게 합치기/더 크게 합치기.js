function solution(a, b) {
    let answer = 0;
    
    const strA = String(a);
    const strB = String(b);
    
    if((strA + strB) >= (strB + strA)){
        answer = strA + strB;
    }else{
        answer = strB + strA;
    }
    
    return Number(answer);
}

console.log(solution)