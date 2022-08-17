import React, { useContext } from 'react';
import { nanoid } from 'nanoid';

import Context from '../../context/DataContext'; 
import { ARR_COINS } from '../../services/help/arrCoins';
import StyleAsideWrapper from './styleAside';

function Aside() {
  const{ dataUser } = useContext(Context);
  const coins = ARR_COINS.map((obj) => ({ name: obj.name, score: 0 }));
  const arrCoinsScore = dataUser && coins.map((obj) => {
    dataUser.forEach((e) => {
      if (e.name_crypto === obj.name) {
        obj.score += 1;
      }
    });  
    return obj;
  })
    .sort((a, b) => b.score - a.score);
  
  return (
    <StyleAsideWrapper>
      <div>
        <select name="upvote" id="selectUpVote">
          <option value="">Selecione uma moeda</option>
          {coins && coins.map((obj) => (
            <option key={nanoid()} value={obj.name}>{obj.name}</option>
          ))}
        </select>
      </div>
      <h2>Favoritas</h2>
      {arrCoinsScore && <div id="coinsPopular">
        <ul>
          { arrCoinsScore.map((obj, index) => (
            <li id="sortCoins" key={ nanoid() }>
              <span>{ index + 1 }° - </span>
              <span>{ obj.name }</span>
            </li>
            )) }
        </ul>
      </div> }
    </StyleAsideWrapper>
  );
}

export default Aside;