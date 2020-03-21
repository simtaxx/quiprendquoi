
const express = require('express')
const app = express()

const bodyParser = require('body-parser');
const axios = require('axios');


const dotenv = require('dotenv').config()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug')


/* GET ROUTES */

app.get('/', function(req, res) {

  res.render('index', { title: 'Qui prend quoi ?' });

})

app.get('/party', function(req, res) {

  axios
  .get(`${process.env.API_URL}/party/${req.params.id}`)
  .then(({ data }) =>
    res.render('party', {
      party: data,
      title: data.name,
      url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`,
      id: `${data._id}`,
      elements: data.items
    }),
  )
  .catch((err) => console.log(err));

})

app.get('/party/:id', function(req, res) {

  axios
  .get(`${process.env.API_URL}/party/${req.params.id}`)
  .then(({ data }) =>
    res.render('party', {
      party: data,
      title: data.name,
      url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`,
      id: `${data._id}`,
      elements: data.items
    }),
  )
  .catch((err) => console.log(err));

})

/* POST ROUTES */

app.post('/party', function(req, res) {

  axios
  .post(`${process.env.API_URL}/party`, req.body)
  .then(({ data }) => res.redirect(`/party/${data._id}`))
  .catch((err) => res.send(err));

})

app.post('/party/:id/items', function(req, res) {

  axios
  .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
  .then(() => res.redirect(`/party/${req.params.id}`))
  .catch((err) => res.send(err));

})

/* DELETE ROUTES */

app.post('/party/:id/items/:idItem', function(req, res) {

  axios
  .delete(`${process.env.API_URL}/party/${req.params.id}/items/${req.params.idItem}`, req.body)
  .then(() => res.redirect(`/party/${req.params.id}`))
  .catch((err) => res.send(err));

})

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`))