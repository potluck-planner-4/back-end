exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('potlucks').del()
      .then(function () {
        // Inserts seed entries
        return knex('potlucks').insert([
          { date: '06/01/2021', time: '7:00 pm', location: '8750 North Highway 191, Vernal, UT 84078' },
          { date: '07/02/2021', time: '5:00 pm', location: '600 900 S, Salt Lake City, UT 84105' },
          { date: '08/03/2021', time: '6:00 pm', location: '500 N 900 W, Vernal, UT 84078' }
        ]);
      });
  };