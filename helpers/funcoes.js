const  dataHora = ()=>{

    now = new Date;

    let dataHora = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    return dataHora;

}

module.exports = dataHora;