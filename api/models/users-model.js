const db = require("../../data/config")

const insert = (data) => {
    const [id] = await db("users").insert(data)
	return findById(id)	
}

const findByUsername = (username) => {
	return db("users")
		.where({ username })
		.first()
}

module.exports = { 
    insert,
    findByUsername
}