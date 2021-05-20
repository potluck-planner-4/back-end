# back-end

| N | Method | Endpoint                | Description                                                                                                                              |
| - | ------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | GET    | /potluck/:id               | Returns the potluck object with the specified id contained in the database                                                                   |
| 2 | POST    | /potluck          | Creates a potluck using the information sent inside the request body and returns the newly created potluck object                          |                                                                                      |
| 3 | POST   | /users              | Creates a user using the information sent inside the request body and returns the newly created user object                          |
| 4 | POST    | /potluck/:id/food          | Creates the food of the potluck with the specified id sent inside the request body and returns the newly created food object         |
| 5 | PUT | /potluck/:id          | Updates the potluck with the specified id and returns the updated potluck object                                                           |
| 6 | PUT    | /potluck/:id/food | Updates the food of the potluck with the specified id and returns the updated food object                                          |

### Database Persistence Helpers

- `find()`: calling find returns a promise that resolves to an array
- `findById()`: this method expects an `id` as it's only parameter and returns a promise that resolves to the post corresponding to the `id` provided or `undefined` if no post with that `id` is found.
- `insert()`: calling insert passing it a `potluck` object will add it to the database and return a promise that resolves to an object with the `id` of the inserted potluck. The object looks like this: `{ id: 123 }`.
- `update()`: accepts two arguments, the first is the `id` of the potluck to update and the second is an object with the `changes` to apply. It returns a promise that resolves to the count of updated records. If the count is 1 it means the record was updated correctly.


### User Schema

```js
{
  username: "The username", // String, required, unique
  password: "The password", // String, required
}
```

### Potluck Schema

```js
{
  date: "The potluck date", // Date, required
  time: "The potluck time", // Time, required
  location: "The potluck location", // String, required
}
```

### Food Schema

```js
{
  food: "The food name", // String, required
}
```
