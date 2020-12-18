let input=document.getElementsByName('itemAdded');
// cand nu mai ai nevoie de console-uri pt debug e super ok sa le stergi, iti aglomereaza foarte tare codul
let addButton=document.getElementById('addButton');
const nameInput=document.getElementById('expense');
const dateInput=document.getElementById('date');
const amountInput=document.getElementById('amount');
const nameItem=document.getElementById('nameItem');
const dateItem=document.getElementById('dateItem');
const amountItem=document.getElementById('amountItem');
const expenseList=document.querySelector(".list")
const incomeInput=document.getElementById('income');
const incomeButton = document.getElementById('addIncome');
let ENTRY_LIST = [];
const balanceWrapper = document.getElementsByClassName('balance-wrapper');
const totalIncome = document.getElementsByClassName('totalIncome');
const showIncome = document.getElementById('showIncome');
const totalExpenses = document.getElementsByClassName('totalExpenses');
const showExpenses = document.getElementById('showExpenses');
const totalBalance = document.getElementsByClassName('totalBalance');
const showBalance = document.getElementById('showBalance');
const deleteBtn = document.createElement('i');



incomeButton.addEventListener('click', function(e){
    e.preventDefault();
    if(!incomeInput.value) return;
    let incomes= {
        type: incomeInput.id,
        amount:parseFloat(incomeInput.value)
    };
    ENTRY_LIST.push(incomes);
    console.log('ENTRY_LIST', ENTRY_LIST);
    updateBalance();
    clearInput([incomeInput]); 
   });


addButton.addEventListener('click', function(e){
    e.preventDefault();
     if (!nameInput.value || !dateInput.value || !amountInput.value) return;   
    //  cred ca pot sa cureti putin codul, nu ai nevoie de toate declaratiile astea si de in functii in callback-ul de click pe add, ci poti sa le definesti/declari in afara si doar sa le folosesti aici
     let expenses = {
         id: 0,
        type: nameInput.id,
        place:nameInput.value,
        date:dateInput.value,
        amount:parseFloat(amountInput.value)}
     ENTRY_LIST.push(expenses);
     updateBalance();
     clearInput([nameInput,dateInput,amountInput])
      showItem(expenseList,expenses);        
    });
    
   
    //Helping Functions

    function showItem (expenseList,expenses){
        const entry = document.createElement('li')
         entry.innerHTML= `
        <li id=${expenses.id} class=${expenses.type}>
        <div class="entry">${expenses.place}</div>
        <div id="date">${expenses.date}</div>
        <div id="amount">${expenses.amount}RON</div>
        </li>
        `;
        deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`
        deleteBtn.id = "deleteButton";   
        entry.appendChild(deleteBtn);
        expenseList.appendChild(entry);
        deleteBtn.addEventListener('click', function(e){
            e.preventDefault();
            deleteItem(entry);
        })
     }

     function deleteItem(entry) {
         ENTRY_LIST.splice(entry,1);
         expenseList.removeChild(entry,1)
         updateBalance();
     }

    function calculateTotal(type,ENTRY_LIST){
        let sum = 0;
        ENTRY_LIST.forEach( entry => {
            if (entry.type === type) {
                sum += entry.amount;}
        });
        return sum;
        };

    incomeTotal = calculateTotal("income",ENTRY_LIST);
    expenseTotal = calculateTotal("expense",ENTRY_LIST);
    balanceTotal = calculateBalance(incomeTotal,expenseTotal);

    function calculateBalance(incomeTotal,expenseTotal){
        return incomeTotal - expenseTotal;
    }

    function updateBalance(){
        incomeTotal = calculateTotal("income",ENTRY_LIST);
        expenseTotal = calculateTotal("expense", ENTRY_LIST);
        balanceTotal = calculateBalance(incomeTotal,expenseTotal);
     
        showIncome.innerHTML = `<p>${incomeTotal} RON</p>`;
        showExpenses.innerHTML = `<p>${expenseTotal} RON</p>`;
        showBalance.innerHTML = `<p>${balanceTotal} RON</p>`;
        };

    function clearInput(inputsArray){
        inputsArray.forEach(
            input => {
                input.value = "";});
              } 
    
    
     

  