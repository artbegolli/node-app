const express = require('express')
const axios = require('axios')
const request = require('request');
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello!'))

app.listen(port, () => {
    console.log(`Hello app listening on port ${port}!`)
    console.log('Making request to world service');
    setInterval(() => {
        console.log('Making req...');
        axios.get('http://world-service:80/')
            .then(function (response) {
                console.log('SUCCESS:::', response.data);
            })
            .catch(function (error) {
                console.log('ERROR:::', error);
            })
        }, 
        3000)
})