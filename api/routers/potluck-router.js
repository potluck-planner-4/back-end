const express = require("express")
const { findById, insert, update, addFood, updateFood, findFoodById } = require("../models/potluck-model")

const router = express.Router()

router.get("/potluck/:id", async (req, res, next) => {
	try {
		const potluck = await findById(req.params.id)
		if (!potluck) {
			return res.status(404).json({
				message: "Potluck not found",
			})
		}

		res.json(potluck)
	} catch (err) {
		next(err)
	}
})

router.post("/potluck", async (req, res, next) => {
	try {
		const potluck = await insert({
			date: req.body.date,
            time: req.body.time,
            location: req.body.location
		})

		res.status(201).json(potluck)
	} catch (err) {
		next(err)
	}
})

router.post("/potluck/:id/food", async (req, res, next) => {
	try {
        const food = await addFood({ food: req.body.food })

		res.status(201).json(food)
	} catch (err) {
		next(err)
	}
})

router.put("/potluck/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		await update(id, req.body)
		const potluck = await findById(id)
		
		res.json(potluck)
	} catch(err) {
		next(err)
	}
})

router.put("/potluck/:id/food", async (req, res, next) => {
	try {
		const { id } = req.params
		await updateFood(id, req.body)
		const food = await findFoodById(id)
		
		res.json(food)
	} catch(err) {
		next(err)
	}
})

module.exports = router