const db = require("../../data/config")

const findById = (id) => {
	return db("potlucks")
        .where({ id })
        .first()		
}

const insert = async (data) => {
    const [id] = await db("potlucks").insert(data)
	return findById(id)	
}

const findFoodById = (id) => {
	return db("food")
        .where({ id })
        .first()		
} 

const addFood = async (data) => {
    const [id] = await db("food").insert(data)
	return findFoodById(id)	
}

const update = async (id, data) => {
    await db("potlucks").where({ id }).update(data)
	return findById(id)
}

const updateFood = async (id, data) => {
    await db("food").where({ id }).update(data)
	return findFoodById(id)
}

module.exports = {
	findById,
    insert,
    update,
    addFood,
    updateFood,
    findFoodById
}