exports.up = async (knex) => {
    await knex.schema.createTable("users", table => {
		table.increments()
		table.string("username").notNull().unique()
		table.string("password").notNull()
	})
	
	await knex.schema.createTable("potlucks", table => {
		table.increments()
		table.date("date").notNull()
		table.time("time").notNull()
		table.text("location").notNull()
	})

    await knex.schema.createTable("food", table => {
		table.increments()
		table.text("food").notNull()
	})

    await knex.schema.createTable("potlucks_food", table => {
		table.integer("potluck_id")
            .notNull()
            .references("id")
            .inTable("potlucks")
            .onDelete("CASCADE")
			.onUpdate("CASCADE")
		table.integer("food_id")
            .notNull()
            .references("id")
            .inTable("food")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
	})

    await knex.schema.createTable("potlucks_users", table => {
		table.integer("potluck_id")
            .notNull()
            .references("id")
            .inTable("potlucks")
            .onDelete("CASCADE")
			.onUpdate("CASCADE")
		table.integer("users_id")
            .notNull()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
	})
};

//do i need to add a spot in the tables for whether a user is attending a potluck or not?

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists("potlucks_users")
	await knex.schema.dropTableIfExists("potlucks_food")
	await knex.schema.dropTableIfExists("food")
	await knex.schema.dropTableIfExists("potlucks")
    await knex.schema.dropTableIfExists("users")

};
