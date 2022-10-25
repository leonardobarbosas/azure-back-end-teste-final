const express = require('express');
const dataHora = require('../helpers/funcoes');

console.log(dataHora())

const router = express.Router();

router.get('/read', (req, res)=>{
    res.status(200).json(
        {
            msg:"DEPLOY AZURE: ROTA DE LEITURA DE DADOS",
            dataHora: dataHora(),
        } 
    );
});

router.post('/create', (req, res)=>{
    res.status(200).json(
        {
            msg:"DEPLOY AZURE: ROTA DE GRAVAÇÃO DE DADOS",
            dataHora: dataHora(),
        } 
    );
});

router.put('/update', (req, res)=>{
    res.status(200).json(
        {
            msg:"DEPLOY AZURE: ROTA DE ATUALIZAÇÃO DE DADOS",
            dataHora: dataHora(),
        } 
    );
});

router.delete('/delete', (req, res)=>{
    res.status(200).json(
        {
            msg:"DEPLOY AZURE: ROTA DE EXCLUSÃO DE DADOS",
            dataHora: dataHora(),
        } 
    );
});

module.exports = router;