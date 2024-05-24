import plant from "../models/plant.js";
import { seedData } from "../models/seedFunction.js";
import mongoose from "mongoose";

//routes - This was to test the API
// app.get('/', (req, res) => {
//     res.json({msg: "Welcome to the app"})
// })


// GET all plant data
const getAllPlants = async (req, res) => {
    let plantData = await plant.find({})
    res.json(plantData);
    //res.json({message: "Get all plant"})
}; 

//GET a single plant data
const getOnePlant = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Plant Data' })
    }

    const workout = await plant.findById(id)

    if (!workout) {
        return res.status(404).json({ error: 'No Plant Data' })
    }

    res.status(200).json(workout)
};

//POST a new plant data set

const createPlant = async (req, res) => {
    const { common_name, plant_family, scientific_name, hardiness, sunlight_requirements, water_requirements, region, grow_zone } = req.body

    try {
        let plantData = await plant.create({ common_name, plant_family, scientific_name, hardiness, sunlight_requirements, water_requirements, region, grow_zone })
        res.status(200).json(plantData)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

//DELETE a plant
const deletePlant = async (req, res) => {
  try {
    let plantData = await plant.deleteOne({ "_id": req.params.id })
    res.send(plantData);
    // res.json({ mssg: 'Delete a plant ' })
  } catch (error) {
    res.send("Error in Deleting the plant data").status(400);
  }
};

//UPDATE a plant
const updatePlant = async (req, res) => {
    console.log(req.params.id);
      try {
          let plantData = await plant.updateOne({"_id": req.params.id},{
              $set: {
                  "common_name": req.body.common_name,
                  "plant_family": req.body.plant_family,
                  "scientific_name": req.body.scientific_name,
                  "sunlight_requirements": req.body.sunlight_requirements,
                  "water_requirements": req.body.water_requirements,
                  "region": req.body.region,
                  "grow_zone": req.body.grow_zone,
                  "hardiness": req.body.hardiness
              }
              //also could put in req.body
          });
      res.send(plantData)
      } catch (error) {
        res.send(error.message).status(400);
    }
};


//Get all plants
// const getPlants = async (req, res) => {
//     let seedData = await plant.find({})
//     res.json{seedData}
// }
//     const plants = await plant.find({}).sort({createAt: -1})
//     res.status(200).json(plantData)
// }



//Get a single plant
// const getPlant = async (req, res) => {
//     const { id } = req.params

//     const singlePlant = await plant.findById(id)
    
//     if (!singlePlant) {
//         return res.status(404).json({ error: ' no plant available' })
//     }

//     res.status(200). jason(plantData)
//     }
// router.get('/:id', async (req, res) => {
//     let plantData = await plant.find({ "_id": req.params.id })
//   res.json(plantData)
// });


//Create new plant data set
// const createPlant = async (req, res) => {
//     const { common_name, plant_family, scientific_name, hardiness, sunlight_requirements, water_requirements, region, grow_zone } = req.body
// //add doc to db
//     try {
//         let seedData = await plant.create({ common_name, plant_family, scientific_name, hardiness, sunlight_requirements, water_requirements, region, grow_zone })
//         res.status(200).json(seedData)
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// };

//Delete plant

//Update a plant


// const posts = import('../models/postModel')
// const posts = import('../models/posts')


// function seed (req, res) {
//     await posts.deleteMany({})
//     await posts.create(posts)
//     res.json('added data to database')
// }

export { getAllPlants, getOnePlant, createPlant, deletePlant, updatePlant };