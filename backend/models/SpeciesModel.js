import mongoose from "mongoose";

const SpeciesSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        classification: { type: String, required: true },
        designation: { type: String, required: true },
        average_height: { type: Number, required: true },
        skin_colors: { type: String, required: true },
        hair_colors: { type: String, required: true },
        eye_colors: { type: String, required: true },
        average_lifespan: { type: Number, required: true },
        homeworld: { type: mongoose.Schema.Types.ObjectId, ref: 'Planet' },
        language: { type: String, required: true },
        people: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }],
        films: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Film' }]
    },
    {
        timestamps: true
    }
);

export const Species = mongoose.model('Species', SpeciesSchema);