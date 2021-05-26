exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('food').del()
      .then(function () {
        // Inserts seed entries
        return knex('food').insert([
            { food: 'hamburgers' },
            { food: 'napkins' },
            { food: 'salad' }
        ]);
      });
  };