import mongoose from "mongoose";

const FilmSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        episode_id: { type: Number, required: true },
        opening_crawl: { type: String, required: true },
        director: { type: String, required: true },
        producer: { type: String, required: true },
        release_date: { type: Date, required: true },
        characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }],
        planets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Planet' }],
        starships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Starship' }],
        vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }],
        species: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Species' }]
    },
    {
        timestamps: true
    }
);

export const Film = mongoose.model('Film', FilmSchema);