
function calc(percentage) {
let amountStr =document.getElementById('amount').value;
let amount = parseFloat(amountStr) || 0;
let tipp=percentage/100;
let tipamount =Math.floor(amount*tipp);
let totalamount =Math.floor(amount+tipamount);
document.getElementById('result').textContent= tipamount.toFixed(2);
document.getElementById('result2').textContent= totalamount.toFixed(2);
}

function custom() {
    let blank = document.getElementById('blank');
    const customTipInput = document.createElement('input');
    
    
    const enterButton = document.createElement('button');
    enterButton.textContent = 'Enter'; 
    
    customTipInput.type = 'number';
    customTipInput.placeholder = 'Custom %';

  
    blank.appendChild(customTipInput);
    blank.appendChild(enterButton);

    
    enterButton.addEventListener('click', function() {
        
        const value = customTipInput.value;
        
      
        const tip = parseFloat(value) || 0;
        
        
        calc(tip);
    });
}