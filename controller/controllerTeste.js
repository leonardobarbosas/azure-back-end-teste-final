const express = require('express');

const router = express.Router();

router.get('/read', (req, res)=>{
    res.status(200).json(
        {msg:"ROTA DE LEITURA DE DADOS"} 
    );
});

router.post('/create', (req, res)=>{
    res.status(200).json(
        {msg:"ROTA DE GRAVAÇÃO DE DADOS"} 
    );
});

router.put('/update', (req, res)=>{
    res.status(200).json(
        {msg:"ROTA DE ATUALIZAÇÃO DE DADOS"} 
    );
});

router.delete('/delete', (req, res)=>{
    res.status(200).json(
        {msg:"ROTA DE EXCLUSÃO DE DADOS"} 
    );
});

module.exports = router;