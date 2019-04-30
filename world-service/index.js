const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('World!'))

app.listen(port, () => console.log(`World app listening on port ${port}!`))