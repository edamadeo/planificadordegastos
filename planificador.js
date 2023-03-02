planificador.js
// Obtenemos el formulario y la lista de gastos
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

// Agregamos un evento para el envío del formulario
expenseForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenimos que el formulario se envíe

  // Obtenemos los valores de los campos de entrada
  const expenseName = document.getElementById('expense-name').value;
  const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
  const expenseCategory = document.getElementById('expense-category').value;

  // Validamos que se haya ingresado un nombre y un monto válido
  if (expenseName.trim() === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
    alert('Por favor ingresa un nombre y un monto válido para el gasto');
    return;
  }

  // Creamos un objeto con los datos del nuevo gasto
  const expense = {
    name: expenseName,
    amount: expenseAmount,
    category: expenseCategory
  };

  // Agregamos el nuevo gasto a la lista de gastos
  const expenseItem = document.createElement('li');
  expenseItem.innerHTML = `${expense.name} - $${expense.amount} - ${expense.category}`;
  expenseList.appendChild(expenseItem);

  // Calculamos el total de los gastos y lo mostramos en la página
  const totalExpenses = calculateTotalExpenses();
  const totalExpensesElement = document.getElementById('total-expenses');
  totalExpensesElement.innerHTML = `Total de gastos: $${totalExpenses}`;

  // Limpiamos los campos de entrada
  expenseForm.reset();
});

// Función para calcular el total de los gastos
function calculateTotalExpenses() {
  let totalExpenses = 0;
  const expenseItems = expenseList.getElementsByTagName('li');
  for (let i = 0; i < expenseItems.length; i++) {
    const expenseParts = expenseItems[i].innerHTML.split(' - ');
    const expenseAmount = parseFloat(expenseParts[1].replace('$', ''));
    totalExpenses += expenseAmount;
  }
  return totalExpenses.toFixed(2);
}
