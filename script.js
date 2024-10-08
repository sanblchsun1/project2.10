fetch('http://localhost:3000/users')
    .then((response) => response.json()) // Преобразуем ответ в JSON
    .then((data) => {
        const userslist = document.getElementById('users-list');
        data.forEach(user => {
            const li = document.createElement('li');
            const bt = document.createElement('button');
            bt.textContent = "Delete";
            bt.id = user.name;
            li.textContent = `${user.name} (${user.email})`;
            userslist.appendChild(li);
            userslist.appendChild(bt);
        });
    })
    .catch((error) => {
        console.error('Ошибка при получении данных:', error)
    });

const form = document.getElementById('add-user-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
// Предотвращаем отправку формы по умолчанию
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
// Создаем объект пользователя
    const newUser = {
        name: name,
        email: email
    };
// Отправляем POST-запрос на сервер
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
// Преобразуем объект в JSON-строку
    })
        .then(response => response.json())
        .then(data => {
            console.log('Пользователь добавлен:', data);
        })
        .catch(error => console.error('Ошибка:', error));
});


fetch('http://localhost:3000/users', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Alice Updated',
        email: 'alice.updated@example.com'
    })
})
    .then(response => response.json())
    .then(data => {
        console.log('Пользователь обновлен:', data);
    })
    .catch(error => console.error('Ошибка:', error));


fetch('http://localhost:3000/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Сетевая ошибка');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));