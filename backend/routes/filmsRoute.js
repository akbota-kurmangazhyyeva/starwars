import express from "express";
import { Film } from "../models/FilmModel.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const {
            title, episode_id, opening_crawl, director, producer, release_date, characters, planets, starships, vehicles, species
        } = req.body;

        if (!title || !episode_id || !opening_crawl || !director || !producer || !release_date) {
            return res.status(400).send({ message: "Send all required fields: title, episode_id, opening_crawl, director, producer, release_date" });
        }

        const newFilm = { title, episode_id, opening_crawl, director, producer, release_date, characters, planets, starships, vehicles, species };
        const film = await Film.create(newFilm);

        return res.status(201).send(film);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const films = await Film.find({});

        return res.status(200).json({
            count: films.length,
            data: films
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const film = await Film.findById(id);

        return res.status(200).json(film);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const {
            title, episode_id, opening_crawl, director, producer, release_date, characters, planets, starships, vehicles, species
        } = req.body;

        if (!title || !episode_id || !opening_crawl || !director || !producer || !release_date) {
            return res.status(400).send({ message: "Send all required fields: title, episode_id, opening_crawl, director, producer, release_date" });
        }

        const { id } = req.params;
        const result = await Film.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) {
            return res.status(404).send({ message: "Film Not Found" });
        }

        return res.status(200).send({ message: "Film was updated successfully!", data: result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Film.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: "Film Not Found" });
        }

        return res.status(200).send({ message: "Film was deleted successfully!" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
