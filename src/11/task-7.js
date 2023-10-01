export const doAfter = (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, sec*1000)
    });
}