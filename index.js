const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const controllerTeste = require('./controller/controllerTeste');

app.use('/', controllerTeste);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});