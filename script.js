function loadAgendamentos() {
  const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

  const agendaTable = document.getElementById("agenda").getElementsByTagName('tbody')[0];
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
  const agendaTable = document.getElementById("agenda").getElementsByTagName('tbody')[0];
  const newRow = agendaTable.insertRow();

  newRow.insertCell(0).innerText = nome;
  newRow.insertCell(1).innerText = logradouro;
  newRow.insertCell(2).innerText = dataFormatada;

  document.getElementById("form-agendamento").reset();

  const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

  agendamentos.push({ nome, logradouro, data: dataFormatada });
  localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
});

window.onload = loadAgendamentos;
