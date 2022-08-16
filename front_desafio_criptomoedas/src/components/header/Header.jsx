import React, { useContext } from 'react';

import Context from '../../context/DataContext';

import StyleHeaderWrapper from './styleHeader';
import Logo from '../../img/logo.png';

function Header() {
  const { dataUser } = useContext(Context);
  const emailUser = JSON.parse(localStorage.getItem('user')).email;
  const user = dataUser && dataUser.filter((obj) => obj.email === emailUser)[0].name;
  
  return (
    <StyleHeaderWrapper>
      <div id="divImgLogo">
        <img src={ Logo } alt="logo" />
      </div>
      <div id="divInfoUser">
        <div>
          <p>Olá,</p>
          <p>{user && user}</p>
        </div>
        <div id="buttonSair">
          <button type="button" className="btn btn-primary">Sair</button>
        </div>
      </div>
    </StyleHeaderWrapper>
  );
}

export default Header;