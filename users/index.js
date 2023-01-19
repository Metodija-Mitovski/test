const express = require('express');

const api = express();

api.use(express.json());

api.get('/api/v1/users', (req, res) => {
    res.send({ user1: 'user1', user2: 'user2' });
});


api.get('/api/v1/users/raw', (req, res) =>{
    res.send('Users Raw')
})


api.get('/api/v1/users/:id', (req, res) => {
    res.send({ user1: 'user1'});
});



api.listen(3001, () => {
    console.log('users running on port 3001')
})