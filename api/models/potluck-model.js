const db = require("../../data/config")

function findById() {
	return db("potlucks")
        .where({ id })
        .first()		
}

function insert() {
	return db("")	
}

function update(id, data) {
    await db("potlucks").where({ id }).update(data)
	return findById(id)
}

module.exports = {
	findById,
    insert,
    update
}