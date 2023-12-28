const setInputValue = (input: HTMLInputElement, value: string): void => {
    input.value = value;
};


const inputsSyncronizer = (targetInput: HTMLInputElement, baseInput: HTMLInputElement): void => {
    baseInput.addEventListener('input', () => {
        targetInput.value = baseInput.value;
    })
} 

export { setInputValue, inputsSyncronizer };