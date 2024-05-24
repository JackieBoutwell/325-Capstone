import express from 'express'
import 'dotenv/config'
import mongoConfig from "./config.js"
import cors from 'cors'

// import db from "./db/conn.js"
// import mongoose from "mongoose";

//import schema from mongoose
// import Plant from "./models/plant.js"

// import Routes
import plantRoutes from './routes/allPlants.js'

// // import Seed function
// import { seedData } from './models/seedFunction.js';
//express app
const app = express();

const port = 8080



//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//middleware
app.use(express.json());
app.use(cors());
// app.use('/api/allPlants', allPlantRoutes)
app.use('/api/plants', plantRoutes)


// will keep this here for testing.
app.get('/', (req, res) => {
    res.json('Hello! (from Server)')
})

//added a index route that is interacting with the database.
//Moved to  allPlant routes.

// app.get('api/plants', async (req, res) => {
//     try {
//         const plant = await plants.find({})
//         res.status(200).json (plants)
//     } catch (err) {
//         console.log(err.message)
//         res.status(400).json(err)
//     }
// })

app.listen(port, () => {
    console.log('Listening on port: ' + port)
    mongoConfig()
})