import mongoose from "mongoose";

const PlanetSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rotation_period: { type: Number, required: true },
        orbital_period: { type: Number, required: true },
        diameter: { type: Number, required: true },
        climate: { type: String, required: true },
        gravity: { type: String, required: true },
        terrain: { type: String, required: true },
        surface_water: { type: Number, required: true },
        population: { type: Number, required: true },
        residents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person', required: false}],
        films: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Film', required: false }]
    },
    {
        timestamps: true
    }
);

export const Planet = mongoose.model('Planet', PlanetSchema);