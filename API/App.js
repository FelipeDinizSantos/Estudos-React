const express = require('express');
const cors = require('cors');
const app = express();
const port = 3010;
const carsRouter = require('./app/routes/cars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/cars', carsRouter);
app.listen(process.env.PORT ? process.env.PORT : port, ()=>
{
    console.log('Servidor Iniciado na Porta: ' + port);
});