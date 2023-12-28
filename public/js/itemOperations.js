import { setItemButton } from './utils/dom-helpers/buttonHelpers.js';
import { createListItem, removeFromList } from './utils/dom-helpers/listHelpers.js';
import { setInputValue, inputsSyncronizer } from './utils/dom-helpers/inputHelpers.js';
import updateCookiesList from './utils/cookiesUtils/updateCookiesList.js';
import { input, newList, myTasksList, cookieName, setInputButton } from './mainScripts.js';
export function cookieItemLoader(itemID, itemText) {
    const { newItem, newTask } = createListItem(itemID, itemText);
    myTasksList.push(newTask);
    setItemButton(newItem, 'Edit this item', 'item-edit-btn item-buttons', itemEditor, itemID, 'disabled');
    setItemButton(newItem, 'Delete', 'item-delete-btn item-buttons', itemDeleter, itemID, 'disabled');
    setItemButton(newItem, 'Remove from cookies', 'item-unsaved-btn item-buttons', fromCookiesRemover, itemID);
    newList.insertAdjacentElement('afterbegin', newItem);
}
export function inputItemAdder() {
    const temporaryItemID = 'uniqueID_' + Date.now();
    if (input && input.value !== '') {
        itemAdder(temporaryItemID, input.value.trim());
        setInputValue(input, '');
    }
}
export function itemAdder(itemID, itemText) {
    const { newItem, newTask } = createListItem(itemID, itemText);
    setItemButton(newItem, 'Edit this item', 'item-edit-btn item-buttons', itemEditor, itemID);
    setItemButton(newItem, 'Delete', 'item-delete-btn item-buttons', itemDeleter, itemID);
    setItemButton(newItem, 'Save to cookie', 'item-saveToCookie-btn item-buttons', toCookieSaver, itemID);
    newList.insertAdjacentElement('afterbegin', newItem);
}
export function toCookieSaver(itemID) {
    const item = document.getElementById(itemID);
    if (item) {
        const listElement = item.parentNode;
        if (listElement) {
            const saveButton = listElement.querySelector('.item-saveToCookie-btn');
            const deleteButton = listElement.querySelector('.item-delete-btn');
            const editButton = listElement.querySelector('.item-edit-btn');
            if (saveButton && deleteButton && editButton) {
                saveButton.remove();
                deleteButton.disabled = true;
                editButton.disabled = true;
            }
            myTasksList.push(item);
            updateCookiesList(cookieName, myTasksList);
            setItemButton(listElement, 'Remove from cookies', 'item-unsaved-btn item-buttons', fromCookiesRemover, itemID);
        }
    }
}
export function fromCookiesRemover(itemID) {
    removeFromList(itemID, myTasksList);
    const item = document.getElementById(itemID);
    if (item) {
        const listElement = item.parentNode;
        if (listElement) {
            const removeButton = listElement.querySelector('.item-unsaved-btn');
            const deleteButton = listElement.querySelector('.item-delete-btn');
            const editButton = listElement.querySelector('.item-edit-btn');
            if (removeButton && deleteButton && editButton) {
                removeButton.remove();
                deleteButton.disabled = false;
                editButton.disabled = false;
            }
            updateCookiesList(cookieName, myTasksList);
            setItemButton(listElement, 'Save to cookie', 'item-saveToCookie-btn item-buttons', toCookieSaver, itemID);
        }
    }
}
export function itemDeleter(itemID) {
    const item = document.getElementById(itemID);
    const listElement = item === null || item === void 0 ? void 0 : item.parentNode;
    if (listElement) {
        listElement.remove();
    }
    if (input) {
        setInputValue(input, '');
        setInputButton(input, 'Save');
    }
}
export function itemEditor(itemID) {
    const item = document.getElementById(itemID);
    if (item) {
        const listElement = item.parentNode;
        const listElementButtons = listElement.querySelectorAll('.item-buttons');
        if (listElementButtons) {
            listElementButtons.forEach(button => button.remove());
        }
        setItemButton(listElement, 'Done', 'item-done-btn item-buttons', finishEditing, itemID);
        const itemInput = document.createElement('input');
        itemInput.setAttribute('id', itemID);
        itemInput.value = item.textContent || '';
        item.replaceWith(itemInput);
        itemInput.focus();
        itemInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                finishEditing(itemID);
            }
        });
        if (input) {
            inputsSyncronizer(input, itemInput);
            //to ensure correct behavior of main input even if many tasks is editing at the same time
            itemInput.addEventListener('input', () => {
                setInputButton(input, 'Edit', itemID);
            });
            setInputValue(input, itemInput.value.trim());
            setInputButton(input, 'Edit', itemID);
        }
    }
}
export function finishEditing(itemID) {
    const itemInput = document.getElementById(itemID);
    ;
    if (itemInput && itemInput.value !== '') {
        const listElement = itemInput.parentNode;
        const newItem = document.createElement('span');
        newItem.setAttribute('id', itemID);
        newItem.className = 'list-items';
        newItem.textContent = itemInput.value.trim();
        itemInput.replaceWith(newItem);
        if (listElement && input) {
            const doneButton = listElement.querySelector('.item-done-btn');
            if (doneButton) {
                doneButton.remove();
            }
            setItemButton(listElement, 'Edit this item', 'item-edit-btn item-buttons', itemEditor, itemID);
            setItemButton(listElement, 'Delete', 'item-delete-btn item-buttons', itemDeleter, itemID);
            setItemButton(listElement, 'Save to cookie', 'item-saveToCookie-btn item-buttons', toCookieSaver, itemID);
            setInputValue(input, '');
            setInputButton(input, 'Save');
        }
    }
}
//# sourceMappingURL=itemOperations.js.map