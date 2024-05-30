import mongoose from "mongoose";

const StarshipSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        model: { type: String, required: true },
        manufacturer: { type: String, required: true },
        cost_in_credits: { type: Number, required: true },
        length: { type: Number, required: true },
        max_atmosphering_speed: { type: Number, required: true },
        crew: { type: String, required: true },
        passengers: { type: Number, required: true },
        cargo_capacity: { type: Number, required: true },
        consumables: { type: String, required: true },
        hyperdrive_rating: { type: Number, required: true },
        MGLT: { type: Number, required: true },
        starship_class: { type: String, required: true },
        pilots: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }],
        films: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Film' }]
    },
    {
        timestamps: true
    }
);

export const Starship = mongoose.model('Starship', StarshipSchema);