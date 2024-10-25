# CondoFesta

**CondoFesta** é uma aplicação web simples e intuitiva para agendamento de espaços em condomínios para festas e eventos. A aplicação permite que moradores reservem facilmente o salão de festas ou outros espaços comuns, oferecendo uma visão clara da disponibilidade e dos horários reservados.

## Funcionalidades

- **Mapa Interativo**: Visualize o local de eventos no condomínio.
- **Formulário de Agendamento**: Os moradores podem agendar espaços informando o nome completo, o endereço e a data desejada.
- **Agenda de Reservas**: Exibe todos os agendamentos com datas e horários reservados, garantindo a transparência entre os moradores.
- **Horário de Funcionamento**: Espaço disponível para reservas das 09h00 às 22h00.

## Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript
- **Framework de Estilo**: Bootstrap 5.3
- **Mapa**: Integração com Google Maps Embed para exibir a localização do espaço de eventos

## Estrutura do Projeto

```
CondoFesta/
├── index.html        # Estrutura da página principal com mapa e formulário
└── README.md         # Documentação do projeto
```

## Pré-requisitos

- **Editor de Código**: VSCode, Sublime, ou qualquer editor de preferência.
- **Navegador**: Google Chrome, Firefox, Edge ou outro navegador moderno para visualização da aplicação.

## Como Utilizar

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/GbrlSouza/www.condofesta.com.br.git
   cd www.condofesta.com.br
   ```

2. **Abra o Arquivo HTML**:
   Abra o arquivo `index.html` no seu navegador para iniciar o CondoFesta.

## Uso da Aplicação

1. **Visualize o Mapa**: O mapa interativo permite que os moradores vejam o local de eventos do condomínio.
2. **Preencha o Formulário**: Informe o nome completo, endereço do condomínio e data desejada.
3. **Consulte a Agenda**: Todos os agendamentos são exibidos em uma tabela abaixo, com informações de data, nome do morador e endereço.

## Melhorias Futuras

- **Validação de Dados**: Implementação de validação adicional para impedir reservas duplicadas em uma mesma data.
- **Notificações por E-mail**: Envio de confirmações de reserva e lembretes para os moradores.
- **Sistema de Aprovação**: Permitir que administradores aprovem ou recusem reservas.
