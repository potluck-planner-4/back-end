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

- `findById()`
- `insert()`
- `update()`


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
