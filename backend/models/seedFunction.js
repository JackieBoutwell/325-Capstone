import Plant from './plant.js';

import flowerPlantsSeed from '../db/flowerPlants.js';
import gardenPlantsSeed from '../db/gardenPlants.js';
import herbPlantsSeed from '../db/herbPlants.js';
import treePlantsSeed from '../db/treePlants.js';

async function seedData(){
    try {
        await Plant.deleteMany({});
        //BLOCKER ONLY NEEDED ON 
        // await Garden.deleteMany({});
        // await Herb.deleteMany({});

        await Plant.insertMany([...flowerPlantsSeed, ...gardenPlantsSeed, ...herbPlantsSeed, ...treePlantsSeed, ])

        //BLOCKER ONLY NEEDED ON 
        // await Garden.insertMany(gardenPlantsSeed)
        // await Herb.insertMany(herbPlantsSeed)
        console.log("Seeded database correctly")
    }catch(e){
        console.log("Error seeding data: ", e)
    }
}

export {seedData}