require('dotenv').config();
const {USER} = require('./utils/config/app-constants').ROUTES.USER;
const {DISCUSSION} = require('./utils/config/app-constants').ROUTES.DISCUSSION;
const {COMMENT} = require('./utils/config/app-constants').ROUTES.COMMENT;
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
//app.use(express.static('public/build')); // Static Content

app.use(USER, require('./api/v1/routes/user'));
app.use(DISCUSSION, require('./api/v1/routes/discussion'));
app.use(COMMENT, require('./api/v1/routes/comment'));

const server = app.listen(process.env.PORT, (err) => {
    if(err){
        console.log('Server Crash', err);
    }
    else{
        console.log('Server Up', server.address().port);
    }
})