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
const incomeInput=document.getElementById('income');
console.log('incomeInput',incomeInput);
const incomeButton = document.getElementById('addIncome');
console.log('incomeButton', incomeButton);
let ENTRY_LIST = [];

incomeButton.addEventListener('click', function(e){
    e.preventDefault();
    if(!incomeButton) return;

    let incomes= {
        amount:parseFloat(incomeInput.value)
    };
    console.log('incomes', incomes);
    ENTRY_LIST.push(incomes);
    console.log('ENTRY_LIST', ENTRY_LIST);
})


addButton.addEventListener('click', function(e){
    e.preventDefault();
     if (!nameInput.value || !dateInput.value || !amountInput.value) return;
     
     let expenses = {
        place:nameInput.value,
        date:dateInput.value,
        amount:parseFloat(amountInput.value)}
    console.log('expenses', expenses);
     ENTRY_LIST.push(expenses);
     console.log('ENTRY_LIST', ENTRY_LIST);

     clearInput([nameInput,dateInput,amountInput]);
     function clearInput(inputsArray){
         inputsArray.forEach(input => {
             input.value= "";
         })
     }

     function addTransactionDOM (expenses) {
     
        const item = document.createElement("li");
        item.innerHTML = `${expenses.place}    ${expenses.date}    ${expenses.amount} RON`;
        console.log('item', item);
        const removeBtn = document.createElement('i');

        //aici nu stiu cum sa fac selectia ca in momentul in care apas Gunoiul Rosu din dreptul fiecarui element sa dispara acel element.
        removeBtn.innerHTML = `<i class="fas fa-trash" id="removeButton"></i>`;
        console.log('removeBtn', removeBtn);
        expenseList.append(item);
        item.appendChild(removeBtn);
        removeButton =document.getElementById('removeButton');
        console.log('removeButton', removeButton);
        removeButton.addEventListener('click', function(e){
            expenseList.remove(this.item);
        })
     };
      
     addTransactionDOM(expenses);
    console.log(ENTRY_LIST.lenght); 
})
       