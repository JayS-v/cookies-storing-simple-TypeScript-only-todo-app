const getCookieValueByName = (cookieName: string): string | null  => {
    const searchingCookieName = `${cookieName}=`;
    const existingCookies = document.cookie;
    const cookiesArray = existingCookies.split(';');

    for (const eachCookie of cookiesArray) {
        const trimmedCookie = eachCookie.trim();
        const targetCoockieNameIndex =  trimmedCookie.indexOf(searchingCookieName);

        if (targetCoockieNameIndex === 0) {
            const cookieWithDeletedName = trimmedCookie.substring(searchingCookieName.length);
            return cookieWithDeletedName;
        }
    }

    return null;
}

// otherwise :
// const getCookieValueByName = (name) => {
//     const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
//     return match ? match[2] : "";
// }

export default getCookieValueByName;