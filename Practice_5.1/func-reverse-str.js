export function revStr(str) {
    const reverseStr = [];
    for (let i = 0; i <= str.length - 1; i++) {
        reverseStr.unshift(str[i]);
    }
    return reverseStr.join("");
}
