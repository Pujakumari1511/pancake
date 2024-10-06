const form = document.querySelector('.form-container');  // make dom object of form-container
const checkboxes = document.querySelectorAll('input[type="checkbox"]');  // make dom obeject of all checkboxes
const typeSelect = document.querySelector('#type'); // make dom object of typeSelect
const totalPriceElement = document.querySelector('#totalPrice');
let total = 0;  //make dom object of totalPriceElement
 
const pancakePriceCalc = () => {
    total = parseInt(typeSelect.value) || 0;

    checkToppings();

    totalPriceElement.textContent = `${total.toFixed(0)}€`;

    const priceBanner = document.querySelector('.price-banner');
    priceBanner.animate(
        [
            { transform: 'scale(1)' },
            { transform: 'scale(1.05)' },
            { transform: 'scale(1)' },
        ],
        {
            duration: 100,
            iterations: 1,
        }
    );
};

const checkToppings = () => {
    for (const item of checkboxes) {
        if (item.checked) {
            const itemPrice = parseInt(item.value) || 0;
            total += itemPrice;
        }
    }
};

form.addEventListener('change', pancakePriceCalc);

pancakePriceCalc();
