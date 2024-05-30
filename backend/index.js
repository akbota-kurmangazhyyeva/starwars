import express from 'express';
import mongoose from 'mongoose';
import peopleRoute from './routes/peopleRoute.js';
import filmsRoute from './routes/filmsRoute.js';
import speciesRoute from './routes/speciesRoute.js';
import planetsRoute from './routes/planetsRoute.js';
import vehiclesRoute from './routes/vehiclesRoute.js';
import starshipsRoute from './routes/starshipsRoute.js';
import cors from "cors";
import dotenv from 'dotenv'

const app = express();

app.use(express.json());

dotenv.config();

app.use(cors(
));

app.use('/people', peopleRoute);
app.use('/films', filmsRoute);
app.use('/species', speciesRoute);
app.use('/planets', planetsRoute);
app.use('/vehicles', vehiclesRoute);
app.use('/starships', starshipsRoute);

const port = process.env.PORT;
const MongoDBURL = process.env.url;

mongoose
    .connect(MongoDBURL)
    .then(()=>{
        console.log("Successfully connected to database!");
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
            }
        );
    })
    .catch((error)=>{
        console.log(error);
    })