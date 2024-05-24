import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
    common_name: { type: String, required: true },
    plant_family: { type: String, required: true},
    scientific_name: { type: String,required: true },
    sunlight_requirements: { type: String, required: true },
    water_requirements: { type: String, required: true },
    region: { type: String, required: true },
    grow_zone: { type: String, required: true },
    hardiness: { type: String, required: true },
}, { timestamp: true })


// WILL NEED TO ADD A USER PROPERTY  user: {type: String, require: true}
// for capstone will need mutiple schema or multiple models




//  Created an index


// plantSchema.index({ common_name: 1 });
// export default mongoose.model('plant', plantSchema)


// or you can write it like this
const plant = mongoose.model('plants', plantSchema)
export default plant

