Json-server is a simple tool primarily for prototyping and mockups. It lets you generate a full REST API with CRUD (Create, Read, Update, Delete) operations without writing any server-side code
   - RU: Json-server это простой инструмент в первую очередь для прототипирования и макетов. Он позволяет генерировать полный REST API с операциями CRUD (Create, Read, Update, Delete) без написания какого-либо серверного кода


## 1. Full Documentation: 
   - RU: Полная документация: 
[Json-server](https://github.com/typicode/json-server)

## 2. Install json-server globally:
   - RU: Установите json-server глобально:
```bash
npm install -g json-server
```

## 3. Create a db.json file with some data:
   - RU: Создайте файл db.json с некоторыми данными:
```json
{
    "users": [
        {
            "id": 1,
            "name": "admin",
            "email": "admin@gmail.com",
            "password": "qweqweqwe",
            "role": "admin"
        }
    ]
}
```

## 4. Start json-server:
    - RU: Запустите json-server:
```bash
json-server --watch db.json
```

## 5. USE json-server in your project:
    - RU: ИСПОЛЬЗУЙТЕ json-server в своем проекте:
We can use any HTTP method (GET, POST, PUT, DELETE) to interact with the server. 
We can also use query parameters to filter the data. 
Here are some examples of JS:

### `GET`
```javascript
fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => console.log(data))
```

### `POST`
```javascript
fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John Doe',
        email: ''
        ...
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
```


### `PUT`
```javascript
fetch('http://localhost:3000/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John Doe',
        email: ''
        ...
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
```

### `DELETE`
```javascript
fetch('http://localhost:3000/users/1', {
    method: 'DELETE'
})
    .then(response => response.json())
    .then(data => console.log(data))
```
