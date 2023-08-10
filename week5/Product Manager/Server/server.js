const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 8000;
app.use(cors())
require('./config/mongoose.config');
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );