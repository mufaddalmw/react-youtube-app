var express = require('express')

var app = express()

app.use(express.static('./'))
const PORT = 8000;
app.listen(PORT, () => console.log(`Application started running on port http://localhost:${PORT}`))