export function getKey() {
    const chars = "abcdefghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    const length = 32
    let result = "";
    for (let i = 0; i <= (length - 1); i ++) {
        result += chars[Math.round(Math.random() * (length - 1))];
    }
    return result;
}