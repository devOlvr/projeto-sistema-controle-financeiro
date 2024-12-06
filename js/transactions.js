const counterMoney = {
  valueAccount: 0,
  payment: 0,
  description: "",
};

function updateValue() {
  const counterActual = document.querySelector("#counter");
  counterActual.innerHTML = `R$${counterMoney.valueAccount.toFixed(2)}`;
}

function showMessage(errorMessage) {
  alert(errorMessage);
}

function handleTransaction(isIncome) {
  const valueInput = parseFloat(document.querySelector("#valueInput").value);
  const descriptionValue = document.querySelector("#descriptionInput").value;

  if (isNaN(valueInput) || valueInput <= 0) {
    showMessage("INSIRA UM VALOR VÁLIDO");
    return;
  }

  if (
    !isIncome &&
    (counterMoney.valueAccount <= 0 || valueInput > counterMoney.valueAccount)
  ) {
    showMessage("SALDO INVÁLIDO");
    return;
  }

  if (isIncome) {
    counterMoney.valueAccount += valueInput;
  } else {
    counterMoney.valueAccount -= valueInput;
  }

  counterMoney.payment = valueInput;
  counterMoney.description = descriptionValue;

  console.log(
    isIncome ? "Transação Recebida" : "Transação Realizada:",
    counterMoney
  );
  showMessage(isIncome ? "PIX RECEBIDO DE ANÔNIMO" : "TRANSAÇÃO REALIZADA");
  updateValue();
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const outcomeValue = document.querySelector("#outcomeValue").checked;
  const incomeValue = document.querySelector("#incomeValue").checked;

  if (outcomeValue) {
    handleTransaction(false);
  } else if (incomeValue) {
    handleTransaction(true);
  } else {
    showMessage("Erro ao tentar fazer uma transação!");
  }
});
