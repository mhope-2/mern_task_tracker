const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');


// get env variables
dotenv.config({
    path:'./config/.env'
});

// mongoose for db connection
const connectDB = require('./config/db');
connectDB()


const app = express()
app.use(cors());
app.use(express.json());

// routes
const taskRouter = require('./routes/task.route');

app.use('/tasks', taskRouter)


const PORT = process.env.PORT

const server = app.listen(PORT,console.log(`Server Running On Port:${PORT}`));
