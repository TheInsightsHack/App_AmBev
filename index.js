var request = require('request');

content = {"from":"broken-clownfish","to":"","contents":[{"type":"text","text":"Vitoria noob1"}]};

request.post({
    headers: {'content-type' : 'application/json', 'X-API-TOKEN': 'dekG603V4x7FoAwcCF3Y2XMPSmcB9iBqOWKi'},
    url: 'https://api.zenvia.com/v1/channels/whatsapp/messages',
    body: JSON.stringify(content)
}, function(error, response, body){
    console.log(body);
});