import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Context from '../../context/DataContext';

import StyleHeaderWrapper from './styleHeader';
import Logo from '../../img/logo.png';

function Header() {
  let favoriteCoin = '';
  const nav = useNavigate();
  const { dataUser } = useContext(Context);
  const getStorage = JSON.parse(localStorage.getItem('user'));
  let userName = '';

  if (getStorage) {
    const emailUser = getStorage.email;
    userName = dataUser && dataUser.filter((obj) => obj.email === emailUser)[0];
    favoriteCoin = userName.name_crypto;
  
    let userStorage = JSON.parse(localStorage.getItem('user'));
    userStorage.name = userName.name;
    userStorage.id = userName.id;
    userStorage.name_crypto = userName.name_crypto;

    localStorage.setItem('user', JSON.stringify(userStorage));
  } else {
    nav('/');
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    nav('/');
  };
  
  return (
    <StyleHeaderWrapper>
      <div id="divImgLogo">
        <img src={ Logo } alt="logo" />
      </div>
      {favoriteCoin
        && (
        <div id="favoriteCoin">
          <p>Sua moeda favorita: </p>
          <h2>{favoriteCoin}</h2>
          </div>
        )
      }
      <div id="divInfoUser">
        <div>
          <p>Olá,</p>
          <p>{userName && userName.name}</p>
        </div>
        <div id="buttonSair">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>
      </div>
    </StyleHeaderWrapper>
  );
}

export default Header;