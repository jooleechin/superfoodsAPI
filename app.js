const express = require('express')
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const model = require('./model/index.js')
const controller = require('./controller/index.js')

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/superfoods', controller.getAll)

app.get('/superfoods/:id', controller.getByID)

app.post('/superfoods', controller.createSuperfood)

app.put('/superfoods/:id', controller.updateSuperfood)

app.delete('/superfoods/:id', controller.deleteSuperfood)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)

module.exports = app
