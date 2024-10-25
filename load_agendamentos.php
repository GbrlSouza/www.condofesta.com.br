<?php
header('Content-Type: application/json');

$xmlFile = 'agendamentos.xml';

if (file_exists($xmlFile)) {
    $xml = simplexml_load_file($xmlFile);
    $agendamentos = [];

    foreach ($xml->agendamento as $agendamento) {
        $agendamentos[] = [
            'nome' => (string) $agendamento->nome,
            'logradouro' => (string) $agendamento->logradouro,
            'data' => (string) $agendamento->data
        ];
    }

    echo json_encode($agendamentos);
} else {
    echo json_encode([]);
}
