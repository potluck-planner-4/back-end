exports.seed = async (knex) => {
	await knex("users").truncate()
  await knex("potlucks").truncate()
}
