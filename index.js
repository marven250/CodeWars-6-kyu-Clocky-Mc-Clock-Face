var whatTimeIsIt = function (angle) {
    let calc = Math.floor(angle / 30)
    let remain = angle % 30
    let min = Math.floor(remain * 2)

    if (angle == 0) return "12:00"
    if (calc == 0 && min < 10) return `12:0${min}`
    if (calc == 0 && min > 9) return `12:${min}`
    if (remain == 0 && calc < 10) return `0${calc}:00`
    if (remain == 0 && calc > 9) return `${calc}:00`
    if (min < 10 && calc < 10) return `0${calc}:0${min}`
    if (min < 10 && calc > 9) return `${calc}:0${min}`
    if (min > 9 && calc < 10) return `0${calc}:${min}`
    if (min > 9 && calc > 9) return `${calc}:${min}`
}