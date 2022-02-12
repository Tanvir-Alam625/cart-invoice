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