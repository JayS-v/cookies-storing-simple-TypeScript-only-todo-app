import { inputsSyncronizer } from './utils/dom-helpers/inputHelpers.js';
import { setButtonAttributes } from './utils/dom-helpers/buttonHelpers.js';

import { inputItemAdder, finishEditing } from './itemOperations.js';


const input = document.querySelector<HTMLInputElement>('[data-list="input"]');
const newList = document.createElement('ul');
newList.className = 'new-list';
let myTasksList: any[] = [];
const cookieName = 'listItems';


const inputEnterListener = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
        inputItemAdder();
    }
}

const setInputButton = (input: HTMLInputElement, buttonName: string, itemID?: string): void => {
    const existingButton = document.querySelector<HTMLButtonElement>('.input-button');
    const newButton = document.createElement('button');

    const setSaveButton = (): void => {
        setButtonAttributes(newButton, 'Save', 'input-button input-button_save', inputItemAdder);
       
        input.addEventListener('keydown', inputEnterListener);
        input.placeholder = "write your new task here and click on Enter or Save to add"

        if(existingButton) {
            existingButton.replaceWith(newButton);
        } 
    };

    const setEditButton = (): void => {
        if(itemID){
            setButtonAttributes(newButton, 'Edit', 'input-button input-button_edit', () => finishEditing(itemID));
            input.placeholder = "edit your task here or in task field"

            const item = document.getElementById(itemID) as HTMLInputElement | null;
            if (item) {
                input.removeEventListener('keydown', inputEnterListener);
                inputsSyncronizer(item, input);
            }
        }
        existingButton?.replaceWith(newButton);
    };

    if (!existingButton) {
        input.insertAdjacentElement('afterend', newButton);
        setSaveButton();
    } else {
        if (buttonName === 'Save') {
            setSaveButton(); 
        } else if (buttonName === 'Edit') {
            setEditButton();
        }
    }
};

export { input, newList, myTasksList, cookieName, setInputButton };