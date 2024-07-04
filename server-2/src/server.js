const app = require('../config/express')();
const port = app.get('port');

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});


/*const app = require("./express")
const port = process.env.PORT 
//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
//segunda chave: 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
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})*/