var express = require('express')

var app = express()

app.use(express.static('./'))
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Application started running on port http://localhost:${PORT}`))