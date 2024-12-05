const counterMoney = {
  valueAccount: Number,
  description: String,
};

function handleOutcomeTransaction() {
  const outcomeValue = document.querySelector("#outcomeValue").checked;
  const valueInput = parseFloat(document.querySelector("#valueInput").value);
  const descriptionValue = document.querySelector("#descriptionInput").value;

  if (isNaN(valueInput) || valueInput <= 0) {
    alert("INSIRA UM NÚMERO VÁLIDO");
    return;
  }

  if (outcomeValue) {
    counterMoney.valueAccount = valueInput * -1;
    counterMoney.description = descriptionValue;
    console.log(counterMoney);
    document.querySelector(
      "#counter"
    ).innerHTML = `R$${counterMoney.valueAccount}`;
  } else {
    alert("Erro ao tentar atualizar o saldo");
  }

  if (counterMoney.valueAccount < 0) {
    document.querySelector("#counter").style.color = "red";
  } else {
    document.querySelector("#counter").style.color = "green";
  }
}

function handleIncomeTransaction() {
  const incomeValue = document.querySelector("#incomeValue").checked;
  const valueInput = parseFloat(document.querySelector("#valueInput").value);
  const descriptionValue = document.querySelector("#descriptionInput").value;

  if (isNaN(valueInput) || valueInput <= 0) {
    alert("INSIRA UM NÚMERO VÁLIDO");
    return;
  }

  if (incomeValue) {
    counterMoney.valueAccount += valueInput;
    counterMoney.description = descriptionValue;
    console.log(counterMoney);
    document.querySelector(
      "#counter"
    ).innerHTML = `R$${counterMoney.valueAccount}`;
  } else {
    alert("Erro ao tentar atualizar o saldo");
  }

  if (counterMoney.valueAccount < 0) {
    document.querySelector("#counter").style.color = "red";
  } else {
    document.querySelector("#counter").style.color = "green";
  }
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const outcomeValue = document.querySelector("#outcomeValue").checked;
  const incomeValue = document.querySelector("#incomeValue").checked;

  if (outcomeValue) {
    handleOutcomeTransaction();
  } else if (incomeValue) {
    handleIncomeTransaction();
  } else {
    alert("Erro ao tentar fazer uma transação!");
  }
});
