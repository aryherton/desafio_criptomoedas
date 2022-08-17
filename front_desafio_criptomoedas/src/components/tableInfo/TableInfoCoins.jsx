import React, { useContext } from 'react';
import { nanoid } from 'nanoid';

import Context from '../../context/DataContext';
import StyleTableInfoCoins from './styleTableInfoCoins';

function TableInfoCoins() {
  const { dataCryptonApi } = useContext(Context);
  
  return (
    <StyleTableInfoCoins>
      {
        dataCryptonApi
        &&
        <table>
          <thead>
            <tr>
              <th id="thName">Nome</th>
              <th className="thTable">Preço unitário</th>
              <th className="thTable">Quantidade de Negociação</th>
              <th className="thTable">Maior preço unitário</th>
              <th className="thTable">Menor preço unitário</th>
            </tr>
            { dataCryptonApi.map((item, index) => {
              const classTr = index % 2 === 0 ? 'tr-even' : 'tr-odd';
              return (
                <tr key={ nanoid() } className={ classTr }>
                  <td id="tdFirst">
                    <div className="imgAndNameCoin">
                      <img src={item.img} alt={item.coin} />
                      <span id="spanName">{item.coin}</span>
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.amount}</td>
                  <td>{item.maxPrice}</td>
                  <td>{item.minPrice}</td>
                </tr>
              )
            }) }
          </thead>
        </table>
      }
    </StyleTableInfoCoins>
  );
}

export default TableInfoCoins;