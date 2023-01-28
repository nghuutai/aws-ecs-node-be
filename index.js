const express = require('express')
const cors = require('cors');

const PORT = "8080";
// const HOST = "0.0.0.0";

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send({
        data: { id: 1, fullname: 'Nguyen Huu Tai' }
    });
});

app.get('/users', (req, res) => {
    res.send({
        data: [
            { id: 1, fullname: 'Nguyen Huu Tai' },
            { id: 2, fullname: 'Nguyen Huu Tay' },
        ]
    });
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);