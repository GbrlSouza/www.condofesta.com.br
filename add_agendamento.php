<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $nome = htmlspecialchars($data['nome']);
    $logradouro = htmlspecialchars($data['logradouro']);
    $dataAgendamento = htmlspecialchars($data['data']);

    $xmlFile = 'agendamentos.xml';
    $xml = new SimpleXMLElement($xmlFile, null, true);

    $agendamento = $xml->addChild('agendamento');
    $agendamento->addChild('nome', $nome);
    $agendamento->addChild('logradouro', $logradouro);
    $agendamento->addChild('data', $dataAgendamento);

    $xml->asXML($xmlFile);
}
