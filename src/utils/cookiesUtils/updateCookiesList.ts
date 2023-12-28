interface ListItem {
    id: string;
    textContent: string;
}

const updateCookiesList = (cookieName: string, listArray: ListItem[]) => {
    const taskInfoArray: { itemID: string; itemText: string; }[] = listArray.map(
        item => {
           const itemID = item.id;
           const itemText = item.textContent.trim();

           return  {itemID, itemText};
        }
    )
 
    // Convert the list items to JSON
    const jsonList = JSON.stringify(taskInfoArray);
    // console.log(jsonList);

    //Store JSON in cookies
    document.cookie = `${cookieName}=${jsonList}`;
}

export default updateCookiesList;