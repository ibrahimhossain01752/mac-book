function setInnerText(id, value) {
    document.getElementById(id).innerText = value
}

const mcost = document.getElementById('mcost');


mcost.addEventListener('click', function () {
    setInnerText('shipping1', 180)

    calculateTotal()
});



const storage = document.getElementById('storage');
const shippingStorage = document.getElementById('shipping2');


storage.addEventListener('click', function () {
    setInnerText('shipping2', 180)
    calculateTotal()

});

const date = document.getElementById('date');
const shippingDate = document.getElementById('shipping3');

date.addEventListener('click', function () {
    setInnerText('shipping3', 20)
    calculateTotal()
});

const shippingPrice = document.getElementById('best-price');



//update total
function innerTextConverter(id) {
    const element = document.getElementById(id).innerText;
    const number = parseFloat(element);
    return number;
}

function calculateTotal() {


    let BestPrice = innerTextConverter('best-price');
    let ExtraMemoryPrice = innerTextConverter('shipping1');

    let ExtraStoragePrice = innerTextConverter('shipping2');
    let DeliveryPrice = innerTextConverter('shipping3');
    let total = BestPrice + storagePrice1 + ExtraMemoryPrice + ExtraStoragePrice + DeliveryPrice;
    document.getElementById('total').innerText = total








}



document.getElementById('login-submit').addEventListener('click', function () {
    const priceTotal = document.getElementById('total').innerText


    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    const grandAmount = document.getElementById('grand-amount')
    // check  password
    if (userPassword == 'stevekaku') {
        const promoPrice = parseFloat(priceTotal) - (parseFloat(priceTotal) * 0.20)
        document.getElementById('grand-amount').innerText = promoPrice

    }
    else {
        incorecctPromo();
        document.getElementById(userPassword).value = '';
    }
});