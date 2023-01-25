const express = require('express')
const app = express()

const bodyParser = require('./middlewares/index')
const routes = require('./routes/index')

bodyParser(app)
app.use('/', routes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
