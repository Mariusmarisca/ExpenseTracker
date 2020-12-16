let input=document.getElementsByName('itemAdded');
// cand nu mai ai nevoie de console-uri pt debug e super ok sa le stergi, iti aglomereaza foarte tare codul
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
const balanceWrapper = document.getElementsByClassName('balance-wrapper');
console.log('balanceWrapper', balanceWrapper);
const totalIncome = document.getElementsByClassName('totalIncome');
const showIncome = document.getElementById('showIncome');
const totalExpenses = document.getElementsByClassName('totalExpenses');
const showExpenses = document.getElementById('showExpenses');
const totalBalance = document.getElementsByClassName('totalBalance');
const showBalance = document.getElementById('showBalance');


incomeButton.addEventListener('click', function(e){
    e.preventDefault();
    if(!incomeInput.value) return;

    let incomes= {
        type: incomeInput.id,
        amount:parseFloat(incomeInput.value)
    };
    console.log('incomes', incomes);
    ENTRY_LIST.push(incomes);
    console.log('ENTRY_LIST', ENTRY_LIST);
    clearInput([incomeInput]);
    function clearInput(inputsArray){
        inputsArray.forEach(
            input => {
                input.value = "";
            });
          }
    incomeTotal = calculateIncome(income,ENTRY_LIST);
    function calculateIncome(type,ENTRY_LIST){
        let sum = 0;
        ENTRY_LIST.forEach( entry => {
            if (entry.type === "income") {
                sum += entry.amount;}
        });
        return sum;
        };
       showIncome.innerHTML=`<p>${incomeTotal} RON</p>`;
        console.log(incomeTotal);    
   });


addButton.addEventListener('click', function(e){
    e.preventDefault();
     if (!nameInput.value || !dateInput.value || !amountInput.value) return;
     
    //  cred ca pot sa cureti putin codul, nu ai nevoie de toate declaratiile astea si de in functii in callback-ul de click pe add, ci poti sa le definesti/declari in afara si doar sa le folosesti aici
     let expenses = {
        type: nameInput.id,
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
         };

     function addTransactionDOM (expenses) {
        const item = document.createElement("li");
        item.innerHTML = `${expenses.place}    ${expenses.date}    ${expenses.amount} RON`;
        console.log('item', item);
        const removeBtn = document.createElement('i');
        // e messy asa, nu ai nevoie sa faci asa aici si nu cu innerHTML
        removeBtn.innerHTML = `<i class="fas fa-trash" id="removeButton"></i>`;
        console.log('removeBtn', removeBtn);
        expenseList.append(item);
        item.appendChild(removeBtn);
        console.log(ENTRY_LIST.length);

        removeBtn.addEventListener('click', function(e){
        expenseList.removeChild(item);
        ENTRY_LIST.splice(this,1)
        console.log(ENTRY_LIST.length);
           });

        expenseTotal = calculateExpenses(expense,ENTRY_LIST);
        function calculateExpenses (type,ENTRY_LIST) {
         let sum = 0;
         ENTRY_LIST.forEach(
         entry => {
             if( entry.type === "expense") {
                 sum += entry.amount;}
             });
         return sum;
         };
     showExpenses.innerHTML = `<p>${expenseTotal} RON</p>`;
    }
     addTransactionDOM(expenses);

     balanceTotal = calculateBalance(incomeTotal,expenseTotal);
     function calculateBalance(incomeTotal,expenseTotal){
         return incomeTotal - expenseTotal;
     }

    // e ok scrisa la nivelul celorlalte si probabil doresti sa o apelezi la click pe functionalitatea de add

    // La functia asta nu stiu daca ii ok scrisa aici si unde trebuie sa o trigger-uiesc?
    // function updateBalance(){
       // incomeTotal = calculateIncome(income,ENTRY_LIST);
      //  expenseTotal = calculateExpenses(expense,ENTRY_LIST);
       // balanceTotal = calculateBalance(incomeTotal,expenseTotal);
    
       // showIncome.innerHTML = `<p>${incomeTotal} RON</p>`;
       // showExpenses.innerHTML = `<p>${expenseTotal} RON</p>`;
       // showBalance.innerHTML = `<p>${balanceTotal} RON</p>`;
    
    //  };
    // good practice este sa selectezi elementul din DOM, <p> in acest caz si sa adaugi text cu informatia pe care o doresti.
    // nu este asa de ok sa adaugi html de fiecare data
      showBalance.innerHTML = `<p>${balanceTotal} RON</p>`;
      
    });


     

  