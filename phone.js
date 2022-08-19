
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updateCaseNumber(true, 'phone-num-field');

    updateCasePrice(newPhoneNumber, 'phone-total-price', 1219);
    calculatePrice()
});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updateCaseNumber(false, 'phone-num-field');

    updateCasePrice(newPhoneNumber, 'phone-total-price', 1219);
    calculatePrice()
})