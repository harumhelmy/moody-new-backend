const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()
const schema = require('./schema.js')

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(3000, ()=>{
    console.log('hello, we are here listening on you on port 3000')
})


