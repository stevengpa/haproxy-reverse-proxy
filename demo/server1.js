const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 9090;

app.get('/api/s1', (req, res) => {
    res.json({ hi: 'From Server 1'}).end();
});

app.listen(PORT, () => {
    console.log(`Server 1 - Running on PORT ${PORT}`);
})