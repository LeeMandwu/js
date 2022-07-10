let 연어들 = [50, 100, 200, 300]
function pricemeasurement(연어들) {
    for (i = 0; i < 4; i++) {
        console.log("이 연어는 " + 연어들[i] * 100 + "원입니다.")
    }
}
pricemeasurement(연어들)