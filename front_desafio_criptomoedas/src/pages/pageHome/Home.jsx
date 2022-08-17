import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Context from '../../context/DataContext';
import Header from '../../components/header/Header';
import TableInfoCoins from '../../components/tableInfo/TableInfoCoins';
import Aside from '../../components/aside/Aside';

import { getAllUser } from '../../services/requestApi';
import { getDataApiMercBTC } from '../../services/apiMercadoBtc';

import StyleHomeWrapper from './styleHome';

function Home() {
  const nav = useNavigate();
  const {
    dataUser,
    setDataUser,
    dataCryptonApi,
    setDataCryptApi,
  } = useContext(Context);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      nav('/');
    }

    if (!dataUser || !dataCryptonApi) {
      (async () => {
        const arrUsers = await getAllUser('user/', user.token);
        const dataCryptonApi = await getDataApiMercBTC();

        setDataCryptApi(dataCryptonApi);
        setDataUser(arrUsers);
      })();
    }
  }, []);

  return (
    <StyleHomeWrapper>
      <Header />
      <main>
        <section>
          <TableInfoCoins />
        </section>
        <Aside />
      </main>
    </StyleHomeWrapper>
  );
}

export default Home;