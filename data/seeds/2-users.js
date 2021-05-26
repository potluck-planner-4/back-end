
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          { username: 'kelsey5000', password: 'supersecretpassword' },
          { username: 'kelseyiscool', password: 'cooliskelsey' },
          { username: 'username', password: 'password12345' }
        ]);
      });
  };