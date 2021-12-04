const express = require('express');
const morgan = require('morgan');
const app = express();
const apiRouter = require('./router')
require('dotenv').config()
const conection = require('./config/configDB')
const cors = require('cors');
const helmet = require('helmet')

app.set('port', process.env.PORT || 8000);
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());

conection(app);
apiRouter(app);

app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});