const updateCookiesList = (cookieName, listArray) => {
    const taskInfoArray = listArray.map(item => {
        const itemID = item.id;
        const itemText = item.textContent.trim();
        return { itemID, itemText };
    });
    // Convert the list items to JSON
    const jsonList = JSON.stringify(taskInfoArray);
    // console.log(jsonList);
    //Store JSON in cookies
    document.cookie = `${cookieName}=${jsonList}`;
};
export default updateCookiesList;
//# sourceMappingURL=updateCookiesList.js.map