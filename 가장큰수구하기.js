
function 가장큰수(숫자들) { 
    let 숫자 = 0 
    for (let i = 0; i < 숫자들.length; i++) {
        if (숫자 < 숫자들[i]) {
            숫자 = 숫자들[i]
        }
    }   
    console.log(숫자)
}
let 숫자들 = [3, 0, 3423, 4, 23, 2, 5, 12, 3, 9]
console.log(가장큰수(숫자들))