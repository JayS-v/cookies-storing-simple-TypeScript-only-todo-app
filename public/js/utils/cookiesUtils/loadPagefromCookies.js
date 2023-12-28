const loadPagefromCookies = (cookieValueString, addToHTML) => {
    const cookieValueArray = JSON.parse(cookieValueString);
    // Reverse the array to maintain the correct order
    cookieValueArray.reverse();
    cookieValueArray.forEach((eachValue) => {
        const itemID = eachValue.itemID;
        const itemText = eachValue.itemText;
        addToHTML(itemID, itemText);
    });
};
export default loadPagefromCookies;
//# sourceMappingURL=loadPagefromCookies.js.map