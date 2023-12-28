const setInputValue = (input, value) => {
    input.value = value;
};
const inputsSyncronizer = (targetInput, baseInput) => {
    baseInput.addEventListener('input', () => {
        targetInput.value = baseInput.value;
    });
};
export { setInputValue, inputsSyncronizer };
//# sourceMappingURL=inputHelpers.js.map