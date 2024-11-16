
import DB from './classrooms.json' with { type: "json" }
import express from 'express'
//var cors = require('cors')
import cors from 'cors'

const app = express();
app.use(cors())

const PORT = 3080;

app.get('/', (req, res) => {
    res.send(DB);
});

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
