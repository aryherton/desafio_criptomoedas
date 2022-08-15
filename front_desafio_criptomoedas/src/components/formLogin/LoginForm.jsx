import React, { useState, useContext } from 'react';

import Context from '../../context/DataContext';
import { creatRegister, login, getAllUser, updateUser } from '../../services/requestApi';

import { LoginFormWrapper } from './styleLoginForm';

function LoginForm() {
    const { setDataUser } = useContext(Context);
    const [name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [typeForm, setTypeForm] = useState('login');

    const loginAndRegister = async () => {
        let token = '';
        if (typeForm === 'register') {
            // token = await creatRegister('user/register', {
            //     name,
            //     email,
            //     password,
            // });
            const obj = {
                id: "62f81a594fe42fd199d7b773",
                name: "Maria",
                email: "mtestttttt.com",
                name_crypto: "USD",
            };
            const test = await getAllUser('user', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNpY2Vyb0B0ZXN0LmNvbSIsImV4cCI6MTY2MDY3MzM2MSwiaWF0IjoxNjYwNTg2OTYxLCJpc3MiOiJjcmlwdG9tb2VkYXMifQ.o1u0MI1jCrBRnR_dbJ1BGU17v5ztv1uFYeF9FQl8Oso');
            console.log(test);
        } else {
            token = await login('user/login', {
                email,
                password,
            });
        }
        // await localStorage.setItem('token', token);
        // if (token) {
        //     const obj = {
        //         "id": "62f81a594fe42fd199d7b773",
        //         "name": "Maria",
        //         "email": "mtestttttt.com",
        //         "password": "123456789",
        //         "name_crypto": "Real Brasileiro"
        //     };
        //     const test = await getAllUser('user/62f81a594fe42fd199d7b773', obj, token);
        //     console.log(test);
        // }

        // setDataUser(mockUserApi);
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