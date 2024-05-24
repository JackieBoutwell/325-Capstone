import express from 'express';
import { getPlants, createPlants, deletePlants} from '../controller/plantController.js'

// import { getAllPlants, getOnePlant, createPlant, deletePlant, updatePlant } from "../controller/plants.js"

const router = express.Router();

//GET- will use the callback function in  plantcontroller.js
router.get('/', getPlants);

// //POST api/plants
router.post('/', createPlants);

// // DELETE api/plants
router.delete('/:id', deletePlants);


// // GET all plant
// router.get('/', getAllPlants)

// // GET a single plant
// router.get('/:id', getOnePlant)

// // POST a new plant
// router.post('/', createPlant)

// // DELETE a plant
// router.delete('/:id', deletePlant)

// // UPDATE a plant
// router.patch('/:id', updatePlant)

export default router;