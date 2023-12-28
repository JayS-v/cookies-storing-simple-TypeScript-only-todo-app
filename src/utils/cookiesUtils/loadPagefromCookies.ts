const loadPagefromCookies  = (
    cookieValueString: string, 
    addToHTML: (itemID: string, itemText: string) => void
    ): void => {
    const cookieValueArray = JSON.parse(cookieValueString);

    // Reverse the array to maintain the correct order
    cookieValueArray.reverse();

    cookieValueArray.forEach(
        (eachValue: { itemID: string; itemText: string }) => {
            const itemID = eachValue.itemID;
            const itemText = eachValue.itemText;

            addToHTML(itemID, itemText);
        }
    );
}

export default loadPagefromCookies;