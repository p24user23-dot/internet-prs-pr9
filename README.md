# Node.js REST API: Hospitals, Doctors, Patients

Цей проєкт є частиною лабораторної/практичної роботи з дисципліни "Інтернет програмування" (Варіант 17). 
Він являє собою RESTful API сервер на базі Node.js та фреймворку Express.js, який взаємодіє з реляційною базою даних MySQL.

## 🎯 Мета проєкту
Розробка серверної частини додатку (Back-end) для управління даними лікарень, лікарів та пацієнтів з використанням основних операцій CRUD (Create, Read, Update, Delete).

## 🛠 Технологічний стек
- **Мова:** JavaScript (Node.js)
- **Фреймворк:** Express.js
- **База даних:** MySQL
- **Бібліотеки:** `mysql2` (для асинхронної роботи з БД), `cors`

## 🗄 Структура Бази Даних
База даних `variant17` складається з трьох пов'язаних таблиць:
1. **hospitals** - список лікарень (id, name, address)
2. **doctors** - список лікарів (id, full_name, specialty, hospital_id) 
3. **patients** - список пацієнтів (id, full_name, age, doctor_id)

*Налаштовано каскадне видалення (ON DELETE CASCADE), що гарантує цілісність даних при видаленні записів.*

## 🚀 Встановлення та запуск

1. Склонуйте репозиторій:
   ```bash
   git clone https://github.com/p24user23-dot/internet-prs-pr9.git
   cd internet-prs-pr9
   ```

2. Встановіть залежності:
   ```bash
   npm install
   ```

3. Налаштуйте базу даних:
   - Відкрийте СУБД (наприклад, DBeaver, MySQL Workbench або phpMyAdmin).
   - Виконайте SQL-скрипт з файлу `database.sql`, щоб створити БД `variant17` та заповнити її тестовими даними.

4. Налаштуйте підключення до БД:
   - Відкрийте файл `services/db.js`.
   - Вкажіть ваші `user` та `password` для MySQL:
     ```javascript
     const config = {
         host: '127.0.0.1',
         user: 'root', // Ваш користувач БД
         password: 'вампароль', // Ваш пароль БД
         database: 'variant17'
     };
     ```

5. Запустіть сервер:
   ```bash
   npm start
   # або
   node server.js
   ```

Сервер запуститься за адресою: `http://localhost:3000`

## 📡 API Ендпоінти (Маршрути)

API підтримує стандартні HTTP-методи для кожної з таблиць: `/api/hospitals`, `/api/doctors`, `/api/patients`.

### Приклади для лікарень (/api/hospitals)

| Метод | Ендпоінт | Опис | Тіло запиту (Body) |
|---|---|---|---|
| **GET** | `/api/hospitals` | Отримати список всіх лікарень | Немає |
| **POST** | `/api/hospitals` | Додати нову лікарню | `{"name": "...", "address": "..."}` |
| **PUT** | `/api/hospitals/:id` | Оновити дані лікарні | `{"name": "...", "address": "..."}` |
| **DELETE**| `/api/hospitals/:id` | Видалити лікарню | Немає |

*(Аналогічні маршрути доступні для `/api/doctors` та `/api/patients` з відповідними полями).*

## 🧪 Тестування
Проєкт можна тестувати за допомогою інструментів:
- **Браузер:** для перевірки GET-запитів.
- **Postman** або **Thunder Client**: для перевірки POST, PUT, DELETE запитів.
- **PowerShell / cURL**: для доступу через консоль.
