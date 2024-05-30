import express from "express";
import { Species } from "../models/SpeciesModel.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, language, people, films } = req.body;

        if (!name || !classification || !designation || !average_height || !skin_colors || !hair_colors || !eye_colors || !average_lifespan || !homeworld || !language) {
            return res.status(400).send({ message: "Send all required fields: name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, language" });
        }

        const newSpecies = { name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, language, people, films };
        const species = await Species.create(newSpecies);

        return res.status(201).send(species);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const species = await Species.find({});

        return res.status(200).json({
            count: species.length,
            data: species
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const species = await Species.findById(id);

        return res.status(200).json(species);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, language, people, films } = req.body;

        if (!name || !classification || !designation || !average_height || !skin_colors || !hair_colors || !eye_colors || !average_lifespan || !homeworld || !language) {
            return res.status(400).send({ message: "Send all required fields: name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, language" });
        }

        const { id } = req.params;
        const result = await Species.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) {
            return res.status(404).send({ message: "Species Not Found" });
        }

        return res.status(200).send({ message: "Species was updated successfully!", data: result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Species.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: "Species Not Found" });
        }

        return res.status(200).send({ message: "Species was deleted successfully!" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
