function compareTriplets(a, b) {
    let score = [0,0]
    for(let i=0; i<a.length;i++) {
        if(a[i]>b[i]) {
            score[0] += 1
        }
        if(a[i]<b[i]) {
            score[1] += 1
        }
    }
    return score
}