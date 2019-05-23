const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router')
const router = new Router()

const koaBody = require('koa-body');
const cors = require('@koa/cors');

const { Client } = require('pg');
const db = new Client({
    // конфиг подключения к БД
  user: 'postgres',
  host: 'localhost', 
  database: 'test', 
  password: 'admin', 
  port: 5432
});
db.connect();

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(koaBody());

// контроллеры ******************************//
const regUserDB = async ctx => {
    //определяем логин и пароль в переменные
    const {login, password} = ctx.request.body;
    // ищем в БД пользователей по логину и сравниваем 
    const res = await db.query("SELECT * FROM users WHERE login='" + login + "'");
    if (res.rows[0] === undefined) {
        // если не нашли создаем нового пользователя
        await db.query("INSERT INTO users (login, password) VALUES ('" + login + "', '" + password + "')");
        ctx.status = 200;
        // в ответ посылаем строку с результатом
        ctx.body = 'Успешно!';
    } else {
        ctx.status = 200;
        ctx.body = 'Ошибка!';
    }
    console.log(ctx.body);
};

const logUserDB = async ctx => {
    //определяем логин и пароль в переменные
    const {login, password} = ctx.request.body;
    // ищем в БД пользователя по логину и сравниваем пароли
    const res = await db.query("SELECT * FROM users WHERE login='" + login + "'");
    if (res.rows[0] !== undefined && res.rows[0].password === password) {
        // если сошлись отправляем положительный результат
        ctx.status = 200;
        ctx.body = 'Успешно!';
    } else {
        ctx.status = 200;
        ctx.body = 'Ошибка!';
    }
    console.log(ctx.body);
};

const allUserDB = async ctx => {
        //получаем от БД логины всех пользователей
        const res = await db.query('SELECT login FROM users');
        // получаем массив и отправляем в ответ 
        ctx.body = res.rows;
        console.log(res.rows);
        ctx.status = 200;
};
//********************************************//

// роуты *************************************//
router.post('/login', koaBody(), logUserDB);
router.post('/reg', koaBody(), regUserDB);
router.get('/users', koaBody(), allUserDB);
//********************************************//

// прослушиваем порт 3000
app.listen(3000, function() {
    console.log('Server running on http://localhost:3000')
});