let input=document.getElementsByName('itemAdded');
console.log('inputValue', input);
let addButton=document.getElementById('addButton');
console.log('addButton', addButton);
const nameInput=document.getElementById('expense');
console.log('nameInput', nameInput);
const dateInput=document.getElementById('date');
console.log('dateInput', dateInput);
const amountInput=document.getElementById('amount');
console.log('amountInput', amountInput);
const nameItem=document.getElementById('nameItem');
const dateItem=document.getElementById('dateItem');
const amountItem=document.getElementById('amountItem');
const expenseList=document.querySelector(".list")
console.log('expenseList', expenseList);

addButton.addEventListener('click', function(e){
    e.preventDefault();
     if (!nameInput.value || !dateInput.value || !amountInput.value) return;
     
     let expense = {
         place:nameInput.value,
         date:dateInput.value,
         amount:parseFloat(amountInput.value),
      };
     console.log('expense', expense);
     let ENTRY_LIST = [];
     ENTRY_LIST.push(expense);
     console.log('ENTRY_LIST', ENTRY_LIST);

     clearInput([nameInput,dateInput,amountInput]);
     function clearInput(inputsArray){
         inputsArray.forEach(input => {
             input.value= "";
         })
     }

     function addTransactionDOM (expense) {
        const item = document.createElement("li");
        item.innerHTML = `${expense.place}    ${expense.date}    ${expense.amount} RON`;
        console.log('item', item);
        const removeBtn=document.createElement('i');
        removeBtn.innerHTML= `<i class="fas fa-trash" id="removeButton"></i>`;
        console.log('removeBtn', removeBtn);

        expenseList.appendChild(item);
        item.appendChild(removeBtn);
       };

    addTransactionDOM(expense);
    
    //aici am nevoie de ajutor caci nu stiu ce conditie sa pun in momentul in care apas pe removeBtn sa dispara acel item.
    
})
