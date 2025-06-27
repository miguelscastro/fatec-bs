function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let fruits = [apples, oranges]
    let apple = 0, orange = 0
    for(let i=0; i<=fruits[0].length; i++) {
        if(a + fruits[0][i] >= s && a + fruits[0][i] <= t) {
            apple += 1
        }
    }
    for(let i=0; i<=fruits[1].length; i++) {
        if(b + fruits[1][i] >= s && b + fruits[1][i] <= t) {
            orange += 1
        }
    }
    console.log(apple)
    console.log(orange)
}
