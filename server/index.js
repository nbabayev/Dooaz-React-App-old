const express = require('express')
const app = express();
const router = express.Router()
const port = 8000

router.get('/', (req, res) => {
    console.log(req.body)
    res.json({hello:"me"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))