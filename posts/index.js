const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (req,res) => {
    res.send({message:'Home Page'})
})

app.get('/api/v1/posts', (req, res) => {
    res.send({1:'post 1', 2: 'post 2'})
})

app.get('/api/v1/posts/:id', (req, res) => {
    console.log(req.params)
    res.send({1:'post 1'})
})


app.listen(3000,() => {
    console.log('server up and runnig')
})