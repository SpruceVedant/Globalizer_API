const bodyparser = require('body-parser');
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const session = require('express-session');
const path = require('path');
const MongoDBStore = require('connect-mongodb-session')(session);


const app = express();
// const store = new MongoDBStore({
//     uri: process.env.MONGO_URI,
//     collection: 'sessions'
//   });

const connection = require("./db");

const sopRoute = require('./routes/sopRoute');
const docRoutes = require('./routes/docRoutes');
const authRoutes = require("./routes/auth");
const studentRoutes = require('./routes/stuDetailsRoute');
const queryRoutes = require('./routes/queryRoutes')

// app.use('/marketing', (req, res, next) => {
//     console.log('got it' + req.body);
//     res.end();
// });
// sessions
// app.use(
//     session({
//         secret: 'keyboardcat',
//         resave: false,
//         saveUninitialized: true,
//         store:store
        
//     })
// )

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
 app.use(express.static('client/build'));
 app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname + '/client/build/index.html'));
 });
}


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());



// routes
app.use("/api", authRoutes);
app.use('/sop', sopRoute);
app.use('/doc', docRoutes);
app.use('/student', studentRoutes);
app.use('/queries', queryRoutes);
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
