exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('potlucks_users').del()
      .then(function () {
        // Inserts seed entries
        return knex('potlucks_users').insert([
            { potluck_id: 1, user_id: 1 },
            { potluck_id: 2, user_id: 2 },
            { potluck_id: 3, user_id: 3 },
        ]);
      });
  };