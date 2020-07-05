var request = require('request');

content = { 'name': 'Nome do cliente', 'cpfCnpj': 'CPF ou CNPJ do cliente', 
'email': 'marcos.vb.pinho@live.com', 'phone': 'Fone fixo', 'mobilePhone': 'Fone celular',
 'address': 'Logradouro', 'addressNumber': 'Número do endereço', 'complement': 'Complemento do endereço',
  'province': 'Bairro', 'postalCode': 'CEP do endereço',
 'externalReference': 'Identificador do cliente no seu sistema', 
 'notificationDisabled': 'true para desabilitar o envio de notificações de cobranca',
  'additionalEmails': 'Emails adicionais para envio ', 'municipalInscription': 'São Paulo', 
  'inscricaoEstadual': 'SP', 'stateInscription': 'Inscrição estadual', 
  'observations': 'Observações adicionais', 'groupName': 'Nome do grupo ao qual o cliente pertence'};

request.post({
    headers: {'content-type' : 'application/json', 'X-Api-Key': '84074730-aa61-4b45-ae96-0496e67794c3'},
    url: 'https://gateway.gr1d.io/sandbox/asaas/cobrancas-por-cartao/v1/customers',
    body: JSON.stringify(content)
}, function(error, response, body){
    console.log(body);
});
