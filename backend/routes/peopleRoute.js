import express from "express";
import { Person } from "../models/PersonModel.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const {
            name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships
        } = req.body;

        if (!name || !height || !mass || !hair_color || !skin_color || !eye_color || !birth_year || !gender || !homeworld) {
            return res.status(400).send({ message: "Send all required fields: name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld" });
        }

        const newPerson = { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships };
        const person = await Person.create(newPerson);

        return res.status(201).send(person);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const people = await Person.find({});

        return res.status(200).json({
            count: people.length,
            data: people
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const person = await Person.findById(id);

        return res.status(200).json(person);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const {
            name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships
        } = req.body;

        if (!name || !height || !mass || !hair_color || !skin_color || !eye_color || !birth_year || !gender || !homeworld) {
            return res.status(400).send({ message: "Send all required fields: name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld" });
        }

        const { id } = req.params;
        const result = await Person.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) {
            return res.status(404).send({ message: "Person Not Found" });
        }

        return res.status(200).send({ message: "Person was updated successfully!", data: result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Person.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: "Person Not Found" });
        }

        return res.status(200).send({ message: "Person was deleted successfully!" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
