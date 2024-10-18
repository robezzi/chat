import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'; // Импортируйте Inertia
import "../styles/login.css";
import logo from "../img/logo.svg";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post('/login', { username, password }, {
            onSuccess: () => {
                // Перенаправление на главную страницу или другую страницу
                Inertia.visit('/home');
            },
            onError: (error) => {
                setErrors(error);
            }
        });
    };

    return (
        <div className="login-page">
            <div className='login-container'>
                <img src={logo} alt="Логотип" className='logo-login' />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">username</label>
                    <input type="text" name="text" id="text" placeholder="Введите ваш username" value={username} onChange={(e) => setUsername(e.target.value)} required
                    />
                    {errors.username && <div className="error">{errors.username}</div>}
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password" placeholder="Введите пароль"
                        value={password} onChange={(e) => setPassword(e.target.value)} required
                    />
                    {errors.password && <div className="error">{errors.password}</div>}

                    <button type="submit">Войти</button>
                </form>
                <a href="#">Зарегистрироваться сейчас!</a>
            </div>
        </div>
    );
}

export default Login;