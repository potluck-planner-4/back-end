const db = require("../../data/config")

const insert = async (data) => {
    const [id] = await db("users").insert(data)
	return findBy(id)	
}

const findBy = (username) => {
	return db("users")
		.where({ username })
		.first()
}

module.exports = { 
    insert,
    findBy
}