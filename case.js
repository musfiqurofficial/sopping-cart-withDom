
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true, 'case-num-field');

    updateCasePrice(newCaseNumber, 'case-total-price', 59);
    calculatePrice ()
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false, 'case-num-field');

    updateCasePrice(newCaseNumber, 'case-total-price', 59);
    calculatePrice ()

})
