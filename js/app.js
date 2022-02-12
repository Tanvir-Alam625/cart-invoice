// selection submit btn
const submitButton = document.getElementById('detail-submit-btn');
console.log(submitButton);
// selection add btn 
const addButton = document.getElementById('add-details-btn');
console.log(addButton);
// submit btn event handler
submitButton.addEventListener('click',function(){
const detailsInput = document.getElementById('buyer-details-input');
const detailsInputValue = detailsInput.value;
document.getElementById('buyer-info').innerText = detailsInputValue;
console.log(detailsInput);
});
function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    input.value = '';
    return inputValue;
}
// add btn event handler 
addButton.addEventListener('click',function(){
    const tableValue = document.getElementById('info-table');
    // getInputValue('item-name-input');
    const itemPrice = getInputValue('item-price-input');
    const itemQuantity = getInputValue('item-quantity-input');
    const tr = document.createElement('tr');
    const totalPrice = itemPrice * itemQuantity;
    const  totalPriceValue = document.getElementsByClassName('total-price');
    console.log(totalPriceValue);
    const tableData = `
            <th >${getInputValue('item-name-input')}</th>
            <td>${itemPrice}</td>
            <td>${itemQuantity}</td>
            <td class ="total-price">${totalPrice}</td>
`;
console.log(tableData);
tr.innerHTML = tableData;
tableValue.appendChild(tr);

})