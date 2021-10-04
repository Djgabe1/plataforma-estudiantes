const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');


//archivo rutas
const authRoute = require('./routes/auth');
const studentRoute = require('./routes/students');


dotenv.config();
//conexion base de datos
mongoose.connect(process.env.MONGODB_URL, { 
	useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
	console.log('Conneted to MongoDB');
});

//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));



//routes
app.use('/api/auth', authRoute);
app.use('/api/student', studentRoute);

//puerto
app.listen(process.env.PUERTO, () =>{
	console.log('Server is runing on port ' + process.env.PUERTO);
})