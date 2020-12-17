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
       updateBalance();
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
     ENTRY_LIST.push(expenses);
     clearInput([nameInput,dateInput,amountInput]);
     function clearInput(inputsArray){
         inputsArray.forEach(input => {
             input.value= "";
         })
         };

     function addTransactionDOM (expenses) {
        const item = document.createElement("li");
        item.innerHTML = `${expenses.place}    ${expenses.date}    ${expenses.amount} RON`;
        const removeBtn = document.createElement('i');
        // e messy asa, nu ai nevoie sa faci asa aici si nu cu innerHTML
        removeBtn.innerHTML = `<i class="fas fa-trash" id="removeButton"></i>`;
        expenseList.append(item);
        item.appendChild(removeBtn);
        


        removeBtn.addEventListener('click', function(e){
        expenseList.removeChild(item);
        ENTRY_LIST.splice(this,1);
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
       
     // showBalance.innerHTML = `<p>${balanceTotal} RON</p>`;
      updateBalance()
    });
    function updateBalance(){
        incomeTotal = calculateIncome(income,ENTRY_LIST);
        expenseTotal = calculateIncome(expense, ENTRY_LIST);
        balanceTotal = calculateBalance(incomeTotal,expenseTotal);
     
        showIncome.innerHTML = `<p>${incomeTotal} RON</p>`;
        showExpenses.innerHTML = `<p>${expenseTotal} RON</p>`;
        showBalance.innerHTML = `<p>${balanceTotal} RON</p>`;
     
         };
    
     

  