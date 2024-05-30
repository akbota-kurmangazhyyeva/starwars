import express from "express";
import { Vehicle } from "../models/VehicleModel.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, vehicle_class, pilots, films } = req.body;

        if (!name || !model || !manufacturer || !cost_in_credits || !length || !max_atmosphering_speed || !crew || !passengers || !cargo_capacity || !consumables || !vehicle_class) {
            return res.status(400).send({ message: "Send all required fields: name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, vehicle_class" });
        }

        const newVehicle = { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, vehicle_class, pilots, films };
        const vehicle = await Vehicle.create(newVehicle);

        return res.status(201).send(vehicle);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find({});

        return res.status(200).json({
            count: vehicles.length,
            data: vehicles
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const vehicle = await Vehicle.findById(id);

        return res.status(200).json(vehicle);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, vehicle_class, pilots, films } = req.body;

        if (!name || !model || !manufacturer || !cost_in_credits || !length || !max_atmosphering_speed || !crew || !passengers || !cargo_capacity || !consumables || !vehicle_class) {
            return res.status(400).send({ message: "Send all required fields: name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, vehicle_class" });
        }

        const { id } = req.params;
        const result = await Vehicle.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) {
            return res.status(404).send({ message: "Vehicle Not Found" });
        }

        return res.status(200).send({ message: "Vehicle was updated successfully!", data: result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Vehicle.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: "Vehicle Not Found" });
        }

        return res.status(200).send({ message: "Vehicle was deleted successfully!" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
