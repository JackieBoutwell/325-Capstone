import Plant from "../models/plants.js"

export const getPlants = async (req, res) => {
    try {
        const plants = await Plant.find()
        res.status(200).json (plants)
    } catch (err) {
        console.log(err.message)
        res.status(400).json(err)
    }
}

export const createPlants = async (req, res) => {
    try {
        console.log(req.body)
        const plants = await Plant.create(req.body)
        res.status(200).json(plants)
    } catch {
        console.log(err.message)
        res.status(400).json(err)
    }
}


export const deletePlants = async (req, res) => {
    try {
        await Plant.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'successfully deleted' })
    } catch (err) {
        console.log(err.message)
        res.status(400).json(err)
    }
}