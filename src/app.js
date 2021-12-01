const express = require('express');
const morgan = require('morgan');
const app = express();
const apiRouter = require('./router')
require('dotenv').config()
const conection = require('./config/configDB')

app.set('port', process.env.PORT || 8000);
app.use(morgan('dev'));
app.use(express.json());

conection(app)
apiRouter(app);

app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});