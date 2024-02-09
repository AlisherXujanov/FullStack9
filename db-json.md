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

For changing the port, use the --port flag:
    - RU: Для изменения порта используйте флаг --port:
```bash
json-server --watch db.json --port 7070
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



# Usage the OMDb 
Usage the OMDb API with JavaScript using the fetch function. This example will search for a movie by title.
   - RU: Использование OMDb API с помощью JavaScript с использованием функции fetch. В этом примере будет выполнен поиск фильма по названию.
```javascript
function searchMovie(title) {
    const GIVEN_URL = "url that is sent to your email after registration" // it should contain the apikey
    const url = new URL(GIVEN_URL  + "&t=" + encodeURI(title));
    url.search = new URLSearchParams({
        apikey: apiKey,
        t: title
    });

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error('Error: ', err));
}

searchMovie('Inception');
```

This script sends a GET request to the OMDb API with the title of the movie as a parameter. The API responds with a JSON object containing information about the movie, which is then logged to the console.
   - RU: Этот скрипт отправляет GET-запрос к API OMDb с названием фильма в качестве параметра. API отвечает JSON-объектом, содержащим информацию о фильме, который затем регистрируется в консоли.

Remember to replace 'your_api_key' with your actual API key.
    - RU: Не забудьте заменить 'your_api_key' на свой фактический ключ API.

GET api_key from: [API_KEY](https://www.omdbapi.com/apikey.aspx)