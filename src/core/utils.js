export function capitalize (string ='') {
    if (typeof string !== 'string')
        return ''
    return string.charAt (0).toUpperCase () + string.slice (1)
}

export function range(start,end) {
    if (start > end)
        [end, start] = [start, end]
    return Array.from ({length: end - start + 1},
        (_, ind) => start + ind)
}