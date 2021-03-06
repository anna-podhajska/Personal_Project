var createServer = require('./server')

var Knex = require('knex')
var config = require('../knexfile')[process.env.NODE_ENV || "development"]
var knex = Knex(config)

var server = createServer(knex)


var PORT = process.env.PORT || 3001

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
