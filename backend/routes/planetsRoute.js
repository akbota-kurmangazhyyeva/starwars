import express from "express";
import { Planet } from "../models/PlanetModel.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const {
            name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, residents, films
        } = req.body;

        if (!name || !rotation_period || !orbital_period || !diameter || !climate || !gravity || !terrain || !surface_water || !population) {
            return res.status(400).send({ message: "Send all required fields: name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population" });
        }

        const newPlanet = { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, residents, films };
        const planet = await Planet.create(newPlanet);

        return res.status(201).send(planet);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const planets = await Planet.find({});

        return res.status(200).json({
            count: planets.length,
            data: planets
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const planet = await Planet.findById(id);

        return res.status(200).json(planet);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const {
            name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, residents, films
        } = req.body;

        if (!name || !rotation_period || !orbital_period || !diameter || !climate || !gravity || !terrain || !surface_water || !population) {
            return res.status(400).send({ message: "Send all required fields: name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population" });
        }

        const { id } = req.params;
        const result = await Planet.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) {
            return res.status(404).send({ message: "Planet Not Found" });
        }

        return res.status(200).send({ message: "Planet was updated successfully!", data: result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Planet.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: "Planet Not Found" });
        }

        return res.status(200).send({ message: "Planet was deleted successfully!" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
