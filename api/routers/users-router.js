const express = require("express")
const { insert, findBy } = require("../models/users-model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../secret")
const { restrict } = require("../middleware/middleware")

const router = express.Router()

router.post("/users", async (req, res, next) => {
	try {
		const { username, password } = req.body
		const user = await findBy(username)

		if (user) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		const newUser = await insert({
			username,
			password: await bcrypt.hash(
				password,
				parseInt(process.env.BCRYPT_TIME_COMPLEXITY),
			),
		})

		res.status(201).json(newUser)
	} catch(err) {
		next(err)
	}
})


router.post("/login", async (req, res, next) => {
	try {
		const { username, password } = req.body
		
		const user = await findBy(username)
		
		if (!user) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
		}

		// hash the password again and see if it matches what we have in the database
		const passwordValid = await bcrypt.compare(password, user.password)
		
		if (!passwordValid) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
		}

		console.log(JWT_SECRET)
		// generate a new token
		const token = 
		jwt.sign({
			userID: user.id,
		}, JWT_SECRET)

		res.cookie("token", token)
		res.json({
			message: `Welcome ${user.username}!`,
		})
	} catch(err) {
		next(err)
	}
})

router.get("/logout", restrict(), async (req, res, next) => {
	try {
		// this will delete the session in the database and try to expire the cookie,
		// though it's ultimately up to the client if they delete the cookie or not.
		// but it becomes useless to them once the session is deleted server-side.
		req.session.destroy((err) => {
			if (err) {
				next(err)
			} else {
				res.status(204).end()
			}
		})
	} catch (err) {
		next(err)
	}
})

module.exports = router