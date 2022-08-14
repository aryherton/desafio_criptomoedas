import React, { useState } from 'react';

import { creatRegister } from '../../services/requestApi';

import { LoginFormWrapper } from './styleLoginForm';

function LoginForm() {
    const [name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [typeForm, setTypeForm] = useState('login');

    const loginAndRegister = async () => {
        if (typeForm === 'register') {
            const token = await creatRegister('user', {
                name,
                email,
                password,
            });
            console.log(token);
        }
    };

    return (
        <LoginFormWrapper>
            <form>
                {typeForm === 'register'
                    && (<div className="form-group">
                        <label htmlFor="userName">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            placeholder="Digite se nome"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>)
                }
                <div className="form-group">
                    <label htmlFor="userEmail">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userEmail"
                        placeholder="Digite se e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div id="buttonsFormLogin">
                    <button
                        id="btnFirst"
                        type="button"
                        className="btn"
                        onClick={ loginAndRegister }
                    >
                        { typeForm === 'login' ? 'Login' : 'Registre-se' }
                    </button>
                    <button
                        id="buttonRegister"
                        type="button"
                        className="btn"
                        onClick={() => setTypeForm(typeForm === "login" ? "register" : "login") }
                    >
                        {typeForm === 'login' ? 'Registre-se' : 'Login' }
                    </button>
                </div>
            </form>
        </LoginFormWrapper>
    );
}

export default LoginForm;