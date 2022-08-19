// Number Increase/Decrease function 
function updateCaseNumber(isIncrease, field) {
    const caseNumberField = document.getElementById(field);
    const caseNumberString = caseNumberField.value;
    const caseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = caseNumber + 1;
    } else {
        newCaseNumber = caseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
// Price Increase/Decrease function 
function updateCasePrice(newCaseNumber, priceField, price) {
    const casePrice = newCaseNumber * price;
    const casePriceField = document.getElementById(priceField);
    casePriceField.innerHTML = casePrice;
}
//sub totl 
function totalProductPrice(elementId) {
    const totalPrice = document.getElementById(elementId);
    const priceString = totalPrice.innerHTML;
    const price = parseInt(priceString);
    return price;
}

function setTextElementValueId(elementId, value) {
    document.getElementById(elementId).innerHTML = value;
}

function calculatePrice() {
    const phonePrice = totalProductPrice('phone-total-price')
    const casePrice = totalProductPrice('case-total-price')

    const totalPrice = phonePrice + casePrice
    setTextElementValueId('total-price', totalPrice)

    const taxAmountString = (totalPrice * 0.13).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTextElementValueId('tax-amount', taxAmount)

    const totalPriceWithTax = totalPrice + taxAmount;
    setTextElementValueId('total-price-with-tax', totalPriceWithTax)

}


