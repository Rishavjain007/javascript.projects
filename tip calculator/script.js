const inputbill = document.getElementById('bill');
const inputtip = document.getElementById('tip');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', function() {
    const bill = parseFloat(inputbill.value);
    const tip = parseFloat(inputtip.value);
    const tipAmount = bill * (tip / 100);
    const total = bill + tipAmount;
    if (inputbill.value === '' || inputtip.value === '') {
        alert('Please enter the values');
        return;
    }
    result.innerHTML = `<h1>Tip: ${tipAmount.toFixed(2)}₹</h1><h1>Total: ${total.toFixed(2)}₹</h1>`;
    console.log(total);
    inputbill.value = '';
    inputtip.value = '';
}); 

