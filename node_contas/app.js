var http = require('http');

const express = require('express');
const cript = require("./cript");

const app = express();
const port = 3002;

const db = require("./db");

var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs');
const { randomUUID } = require('crypto');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
const { auth,} = require('express-oauth2-jwt-bearer');

      const checkJwt = auth({
         audience: 'https://localhost:3001/login', // Chamadores habilitados
         issuerBaseURL: `https://dev-danirochacouto.us.auth0.com/`,
      });

      app.use(function(req, res, next) {
         res.setHeader('Access-Control-Allow-Origin', '*');
         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
         res.setHeader('Access-Control-Allow-Headers', 'Content-Type, authorization');
         res.setHeader('Access-Control-Allow-Credentials', true);
         next();
      });


app.get('/', (req, res) => {
    res.send('Hello Amelie e Dimitri meus amores! Estamos rodando as contas!');
  });

  app.get('/contas', checkJwt, async (req, res, next) => {
  //app.get('/contas', async (req, res, next) => {
    //if(req.cookies["auth"] !== "true"){
      //  return res.status(401).send();  
    //}
    //console.log("Retornou todos usuarios da tabela nova!");
    var resp = await db.selectContas()
    res.status(200).json(resp);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
