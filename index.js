import express from 'express'
import dotenv from 'dotenv'

const env = {}
dotenv.config({ processEnv: env, override: true })
const app = express()
const port = env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World 12!')
})

app.get('/gaurav', (req, res) => {
  res.send('Hello Gaurav!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
