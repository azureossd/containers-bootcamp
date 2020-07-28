const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/',function(req,res){

    var request = require('request');
    var server_url = process.env.server_url +  '/api/items';
    console.log("Requesting: " + server_url)

    request(server_url, function (error, response, body) {

      if (!error && response.statusCode == 200) {
        res.json(body);
      } else {
        res.send(error);
      }
    });

});

app.listen(port, () => console.log(`Client app listening on port ${port}!`))