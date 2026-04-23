let budgetItems = [];
let totalIncome = 0;
let totalExpenses = 0;

// listener
function addIncome() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (description && !isNaN(amount)) {
        budgetItems.push({ description, amount, type: 'income' });
        updateBudget();
    }
}

function addExpense() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (description && !isNaN(amount)) {
        budgetItems.push({ description, amount, type: 'expense' });
        updateBudget();
    }
}

function clearInput() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

function removeItem() {
    const budgetItemsList = document.getElementById('budgetItems');
    while (budgetItemsList.firstChild) {
        budgetItemsList.removeChild(budgetItemsList.firstChild);
    }

    // Filter out checked items
    budgetItems = budgetItems.filter(item => !item.checked);

    updateBudget();
}

function updateBudget() {
    totalIncome = 0;
    totalExpenses = 0;

    const budgetItemsList = document.getElementById('budgetItems');
    budgetItemsList.innerHTML = '';

    budgetItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.description}</td>
            <td>${item.amount.toFixed(2)}</td>
            <td>${item.type}</td>
            <td><input type="checkbox" onclick="toggleCheck(${index})"></td>
        `;
        budgetItemsList.appendChild(row);

        if (item.type === 'income') {
            totalIncome += item.amount;
        } else {
            totalExpenses += item.amount;
        }
    });

    document.getElementById('totalIncome').innerText = totalIncome.toFixed(2);
    document.getElementById('totalExpenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('remainingBalance').innerText = (totalIncome - totalExpenses).toFixed(2);
}

function toggleCheck(index) {
    budgetItems[index].checked = !budgetItems[index].checked;
}