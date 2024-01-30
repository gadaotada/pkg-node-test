const Express = require('express');
const cors = require('cors');
const http = require('http');

const { shouldRun } = require('./os/check.js');
const { timeStampGen } = require('./general.js');

const PORT = process.env.PORT || 3000;
const app = Express();

app.use(cors("*"));
app.use(Express.json());

app.get('/getall', (req, res) => {
    if (shouldRun()) {
        res.status(200).json({msg: `${timeStampGen()} GET request received at /geall`});
        return;
    }
    res.status(401).json({msg: "Not allowed"})
});

app.post('/postall', (req, res) => {
    if (shouldRun()) {
        res.status(200).json({msg: `${timeStampGen()} POST request received at /postall with data:`, data:req.body});
        return;
    }
    res.status(401).json({msg: "Not allowed"})
});

http.createServer(app).listen(PORT, () => {
    console.log(shouldRun())
    console.log(`Server running on port ${PORT}`);
});