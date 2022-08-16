import axios from 'axios';

import { ARR_COINS } from './help/arrCoins';

export const getDataApiMercBTC = async () => {
    
    const dataCoins = await Promise.all(
        ARR_COINS.map(async (coin) => {
            const { data } = await axios.get(`https://www.mercadobitcoin.net/api/${coin.name}/trades/`)
            .then(resp => resp)
                .catch(error => console.log(error));
            const resp = await axios.get(`https://www.mercadobitcoin.net/api/${coin.name}/ticker/`)
            .then(resp => resp)
            .catch(error => console.log(error));
            console.log(resp.data.ticker);
            let newObj = data.at(-1);
            
            delete newObj.tid;
            newObj.coin = coin.name;
            newObj.img = coin.img;
            newObj.maxPrice = resp.data.ticker.high;
            newObj.minPrice = resp.data.ticker.low;
            newObj.vol = resp.data.ticker.vol;
            newObj.last = resp.data.ticker.last;
            newObj.buy = resp.data.ticker.buy;
            newObj.sell = resp.data.ticker.sell;
            newObj.date = resp.data.ticker.date;

            return newObj;
        })
    );

    return dataCoins;
}