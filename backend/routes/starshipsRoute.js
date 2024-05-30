import express from "express";
import { Starship } from "../models/StarshipModel.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class, pilots, films } = req.body;

        if (!name || !model || !manufacturer || !cost_in_credits || !length || !max_atmosphering_speed || !crew || !passengers || !cargo_capacity || !consumables || !hyperdrive_rating || !MGLT || !starship_class) {
            return res.status(400).send({ message: "Send all required fields: name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class" });
        }

        const newStarship = { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class, pilots, films };
        const starship = await Starship.create(newStarship);

        return res.status(201).send(starship);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const starships = await Starship.find({});

        return res.status(200).json({
            count: starships.length,
            data: starships
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const starship = await Starship.findById(id);

        return res.status(200).json(starship);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class, pilots, films } = req.body;

        if (!name || !model || !manufacturer || !cost_in_credits || !length || !max_atmosphering_speed || !crew || !passengers || !cargo_capacity || !consumables || !hyperdrive_rating || !MGLT || !starship_class) {
            return res.status(400).send({ message: "Send all required fields: name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class" });
        }

        const { id } = req.params;
        const result = await Starship.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) {
            return res.status(404).send({ message: "Starship Not Found" });
        }

        return res.status(200).send({ message: "Starship was updated successfully!", data: result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Starship.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: "Starship Not Found" });
        }

        return res.status(200).send({ message: "Starship was deleted successfully!" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
