import getCookieValueByName from './utils/cookiesUtils/getCookieValueByName.js';
import loadPagefromCookies from './utils/cookiesUtils/loadPagefromCookies.js';
import { input, newList, cookieName, setInputButton } from './mainScripts.js';
import { cookieItemLoader } from './itemOperations.js';
document.addEventListener('DOMContentLoaded', () => {
    input.insertAdjacentElement('afterend', newList);
    setInputButton(input, 'Save');
    const cookieValueString = getCookieValueByName(cookieName);
    console.log('----existing cookie', cookieValueString);
    if (cookieValueString !== null) {
        loadPagefromCookies(cookieValueString, cookieItemLoader);
    }
});
//# sourceMappingURL=index.js.map