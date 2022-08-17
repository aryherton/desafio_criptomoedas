import styled from 'styled-components';

const StyleTableInfoCoins = styled.div`
  width: 100%;
  height: 100%;
  table {
    background-color: yellow;
    width: 100%;
    text-align: center;
  }
  .thTable {
    width: 110px;
    height: 45px;
    padding-top: 20px;
    background-color: #393c3f;
    color: #fff;
  }
  #thName {
    width: 90px;
    height: 25px;
    padding-left: 25px;
    background-color: #393c3f;
    color: #fff;
  }
  .tr-even {
    background-color: #0B0E14;
    width: 100%;
    height: 40px;
    color: #F9B50A;
    font-size: 14px;
  }
  .tr-odd {
    background-color: #1b1d23;
    color: #fff;
    width: 100%;
    height: 40px;
    font-size: 14px;
  }
  #tdFirst {
    width: 10%;
    height: 40px;
  }
  .imgAndNameCoin {
    width: 90px;
    height: 25px;
    display: flex;
    justify-content: space-around;
    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      margin-left: 5px;
      margin-top: 6px;
    }
    #spanName {
      margin-top: 10px;
    }
  }
`;

export default StyleTableInfoCoins;