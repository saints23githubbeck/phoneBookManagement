const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());

app.use(cors());


const clientsRouter = require('./routes/api/clients');
app.use('/api/clients', clientsRouter);

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Development Servere Running On Port  ${port}`);