import mongoose from "mongoose";

const VehicleSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        model: { type: String, required: true },
        manufacturer: { type: String, required: true },
        cost_in_credits: { type: Number, required: true },
        length: { type: Number, required: true },
        max_atmosphering_speed: { type: Number, required: true },
        crew: { type: Number, required: true },
        passengers: { type: Number, required: true },
        cargo_capacity: { type: Number, required: true },
        consumables: { type: String, required: true },
        vehicle_class: { type: String, required: true },
        pilots: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }],
        films: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Film' }]
    },
    {
        timestamps: true
    }
);

export const Vehicle = mongoose.model('Vehicle', VehicleSchema);