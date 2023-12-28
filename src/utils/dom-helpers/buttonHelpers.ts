const setButtonAttributes = (
    button: HTMLButtonElement, 
    buttonText: string, 
    buttonClass: string, 
    clickHandler: () => void
    ): void => 
    {
        button.textContent = buttonText;
        button.className = buttonClass;
        button.addEventListener('click', clickHandler);
    };

const setItemButton = (
    targetElement: HTMLElement, 
    buttonText: string, 
    buttonClass: string, 
    clickHandler: (itemID: string) => void, 
    itemID: string, 
    isDisabled?: 'disabled'
    ): void => 
    {
        const itemButton = document.createElement('button');
        
        setButtonAttributes(itemButton, buttonText, buttonClass, () => clickHandler(itemID));
        targetElement.appendChild(itemButton);
        
        if (isDisabled === 'disabled') {
            itemButton.disabled = true;
        }
    }

export { setButtonAttributes, setItemButton };