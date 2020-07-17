export const isJSON = item => {
    item = (typeof item !== "string") ? JSON.stringify(item) : item
    try {
        item = JSON.parse(item)
    } catch (e) {
        return false
    }
    if (typeof item === "object" && item !== null) return true
    return false
}

export const isTrue = (value) => {
    if (["false", "null", "0", "undefined", "NaN"].includes(String(value))) return false
    return true
}