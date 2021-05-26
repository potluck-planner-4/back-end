exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('potlucks_food').del()
      .then(function () {
        // Inserts seed entries
        return knex('potlucks_food').insert([
            { potluck_id: 1, food_id: 1 },
            { potluck_id: 1, food_id: 2 },
            { potluck_id: 2, food_id: 1 },
            { potluck_id: 2, food_id: 3 },
            { potluck_id: 3, food_id: 1 },
            { potluck_id: 3, food_id: 2 },
            { potluck_id: 3, food_id: 3 },
        ]);
      });
  };