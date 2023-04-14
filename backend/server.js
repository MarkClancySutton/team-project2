//Imports
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ResultsRoute from "./routes/resultRoute.js";



const app = express();
//Connect to the mongodb atlas server 
mongoose.connect('mongodb+srv://C20437052:Scampidog12@cluster0.5nq8pul.mongodb.net/Rights-app',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
//if you dont connect 
db.on('error', (error) => console.log(error));
//if connection works
db.once('open', () => console.log('Database Connected...'));

//Set up the app to use all the routes and express 
app.use(cors());
app.use(express.json());
app.use(ResultsRoute);


//set the server to port 5000 
app.listen(3000, ()=> console.log('Server up and running...'));