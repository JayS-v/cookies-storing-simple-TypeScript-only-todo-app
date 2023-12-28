const createListItem = (
    itemID: string, 
    itemText: string): { newItem: HTMLLIElement, newTask: HTMLSpanElement } => {
    const newTask = document.createElement('span');
    newTask.setAttribute('id', itemID);
    newTask.className = 'list-items';
    newTask.textContent = itemText;

    const newItem = document.createElement('li');
    newItem.appendChild(newTask);

    return { newItem, newTask };
}

const removeFromList = (itemID: string, listName:  { id: string }[]): void => {
    
    const index = listName.findIndex(nodeItem => nodeItem.id === itemID);

    // let index: number | undefined;    

    // for (let i = 0; i < listName.length; i++) {
    //     if (listName[i].id === itemID) {
    //         index = i;
    //         break;  
    //     }
    // }

    if(typeof index === 'number') {
        listName.splice(index, 1);
    }
}

export { createListItem, removeFromList };