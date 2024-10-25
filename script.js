async function loadAgendamentos() {
  const response = await fetch('load_agendamentos.php');
  const agendamentos = await response.json();
  const agendaTable = document.getElementById("agenda");

  agendamentos.forEach(agendamento => {
    const newRow = agendaTable.insertRow();
    newRow.insertCell(0).innerText = agendamento.nome;
    newRow.insertCell(1).innerText = agendamento.logradouro;
    newRow.insertCell(2).innerText = agendamento.data;
  });
}

document.getElementById("form-agendamento").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const logradouro = document.getElementById("logradouro").value;
  const dataOriginal = document.getElementById("data").value;
  const [ano, mes, dia] = dataOriginal.split("-");
  const dataFormatada = `${dia}/${mes}/${ano}`;
  const agendaTable = document.getElementById("agenda");
  const newRow = agendaTable.insertRow();

  newRow.insertCell(0).innerText = nome;
  newRow.insertCell(1).innerText = logradouro;
  newRow.insertCell(2).innerText = dataFormatada;

  document.getElementById("form-agendamento").reset();

  addAgendamentoToXML(nome, logradouro, dataFormatada);
});

function addAgendamentoToXML(nome, logradouro, data) {
  fetch('add_agendamento.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome, logradouro, data })
  });
}

window.onload = loadAgendamentos;
