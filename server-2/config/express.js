const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const cors = require('cors');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(cors({
    origin: 'http://localhost:3000'
  }));

  // MIDDLEWARES
  app.use(bodyParser.json());
  require('../src/routes/routes')(app);
  return app;

};

/*
const express = require("express")
const cors = require("cors")
const routes = require('./routes/routes')

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

module.exports = app
*/

