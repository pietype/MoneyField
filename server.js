import express from 'express'


const DEFAULT_PORT = 5555
const PORT = process.env.PORT || DEFAULT_PORT


const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const path = __dirname + '/public/index.html'
  console.log(path)
  res.sendFile(path)
})


app.listen(PORT)
