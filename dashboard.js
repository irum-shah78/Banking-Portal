let balance = 0;
const transactions = [];

function updateBalance() {
  const balanceElement = document.getElementById("balance");
  balanceElement.textContent = balance.toFixed(2);
}

function updateTransactionHistory() {
  const transactionList = document.getElementById("transactions");
  transactionList.innerHTML = "";

  transactions.forEach((transaction, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${transaction.type}: $${transaction.amount.toFixed(2)}`;
    transactionList.appendChild(li);
  });
}

function cashIn() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid Amount!");
    return;
  }
  balance += amount;
  transactions.push({ type: "Cash In", amount });
  updateBalance();
  updateTransactionHistory();
}

function cashOut() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid Amount!");
    return;
  }
  if (amount > balance) {
    alert("Insufficient Balance!");
    return;
  }
  balance -= amount;
  transactions.push({ type: "Cash Out", amount });
  updateBalance();
  updateTransactionHistory();
}
