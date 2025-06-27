function miniMaxSum(arr) {
    const arrayNew = arr.sort((a, b) => a - b);
    
    let min = 0, max = 0
    let arrayLength = arr.length

    for (let i = 0; i < arrayLength; i++) {
        min += arrayNew[i]
    }
    let minFinal = min - arrayNew[arrayLength - 1]

    for (let j = 0; j < arrayLength; j++) {
        max += arrayNew[j]
    }
    let maxFinal = max - arrayNew[0]
    
    console.log(`${minFinal} ${maxFinal}`)
}