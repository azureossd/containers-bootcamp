const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const port = process.env.PORT || 3001;

const directoryPath = "/data";

app.get('/api/',function(req,res){
    res.json({ status: 'Response from server API.'});
});

app.get('/api/items/',function(req,res){

    var items = [];

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        
        files.forEach(function (file) {
            items.push(file) 
        });

        res.json({ 'items': items });
    });
});

app.listen(port, () => console.log(`Server app listening on port ${port}!`))