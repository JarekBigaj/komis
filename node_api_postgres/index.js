const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const databaseKomis = require('./queries');
const { response } = require('express');
const port = 8080;


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use((require, response, next) => {
    response.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/',(request,response)=>{
    response.json({ info: 'Node.js, Express, and Postgres API'})
})

app.get('/cars', databaseKomis.getCars)

app.listen(port, ()=>{
    console.log(`App runing on port ${port}.`)
})
