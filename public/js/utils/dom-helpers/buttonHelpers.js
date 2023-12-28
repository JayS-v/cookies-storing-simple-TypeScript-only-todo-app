const setButtonAttributes = (button, buttonText, buttonClass, clickHandler) => {
    button.textContent = buttonText;
    button.className = buttonClass;
    button.addEventListener('click', clickHandler);
};
const setItemButton = (targetElement, buttonText, buttonClass, clickHandler, itemID, isDisabled) => {
    const itemButton = document.createElement('button');
    setButtonAttributes(itemButton, buttonText, buttonClass, () => clickHandler(itemID));
    targetElement.appendChild(itemButton);
    if (isDisabled === 'disabled') {
        itemButton.disabled = true;
    }
};
export { setButtonAttributes, setItemButton };
//# sourceMappingURL=buttonHelpers.js.map