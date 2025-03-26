const express = require('express')
const app = express()
const port = 3000

const tab = [
    {id: 1, name: "AAA", surname: "BBB", age: "33"},
    {id: 2, name: "CCC", surname: "DDD", age: "22"}
];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/a', (req, res) => {
    res.send('Kocham Kubusia')
})
app.get('/b', (req, res) => {
    res.send(tab)
})

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on ('add', (message)=>{
    console.log(`dodano: ${message}`);
})

myEmitter.emit('add', 'Moj tekst');