import cookie from "cookie"

const ParseCookies = (req) => {
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}
export default ParseCookies 