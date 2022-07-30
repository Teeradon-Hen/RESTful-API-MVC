import express from 'express';
import bodyParser from 'body-parser';
import menuRouter from './route/menuRouter.js';
import tableCustomer from './route/tableCustomerRouter.js'
const app = express();

const port = process.env.PORT ||  4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res) {
    res.send('connecting server complete');
});

app.use('/api/menu', menuRouter);
app.use('/api/tableCustomer', tableCustomer);

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}/`);
});
