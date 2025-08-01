// const express = require('express');
// const dotenv = require('dotenv');
// const colors = require('colors');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
// const { connectDB } = require('./Config/Db');
// const CodeRoute = require('./Routes/CodeRoute');
// const FileRoute = require("./Routes/FileRoute");

// //Configure dotenv file...
// dotenv.config();


// //Configure Database connectin file...
// connectDB();


// //Configure Object Files...
// const app = express();


// //Setup Middlewares...
// // app.use(express());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());
// app.use(methodOverride('_method'));
// app.set('view engine', 'ejs');


// //Configure Routes...
// app.use('/api', CodeRoute);
// app.use('/api', FileRoute);


// //Configure Server Port...
// const port = process.env.PORT || 9001;


// //Setup Server port...
// app.listen(port, () => {
//     console.log(`Server is successfully running at port no : ${process.env.PORT}`.bgCyan.white);
// })




const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const { connectDB } = require('./Config/Db');
const CodeRoute = require('./Routes/CodeRoute');
const FileRoute = require("./Routes/FileRoute");

// Load .env
dotenv.config();

// Connect to DB
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000", "https://zapshare.netlify.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Routes
app.use('/api', CodeRoute);
app.use('/api', FileRoute);

module.exports = app;
