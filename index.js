import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/users.js";

dotenv.config();

const port = process.env.PORT || 3000;
const CONNECTION_URL = process.env.CONNECTION_URL;

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/api', router); 

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(port, () => console.log(`app is listining on port ${port}`)))
    .catch((error) => console.log(error.message))