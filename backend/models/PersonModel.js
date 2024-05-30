import mongoose from "mongoose";

// Define the Schema for the Person model
const PersonSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        height: { type: Number, required: true },
        mass: { type: Number, required: true },
        hair_color: { type: String, required: true },
        skin_color: { type: String, required: true },
        eye_color: { type: String, required: true },
        birth_year: { type: String, required: true },
        gender: { type: String, required: true },
        homeworld: { type: mongoose.Schema.Types.ObjectId, ref: 'Planet', required: true },
        films: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Film' }],
        species: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Species' }],
        vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }],
        starships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Starship' }]
    },
    {
        timestamps: true
    }
);

export const Person = mongoose.model('Person', PersonSchema);