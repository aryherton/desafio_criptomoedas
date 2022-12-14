import styled from 'styled-components';

const StyleAsideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 100%;
  margin-right: 20px;
  margin-top: 60px;
  #selectUpVote {
    background-color: #393C3F;
    border: none;
    height: 30px;
    border-radius: 2px;
    color: #F9B50A;
    
  }
  h2 {
    color: #C2C8D1;
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  #coinsPopular {
    width: 80%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: yellow;;
    background-image: linear-gradient(to right, #393C3F, #151c26, #393C3F);
    border: 2px solid #393C3F;
    ul {
      #sortCoins {
        margin-bottom: 5px;
      }
    }
  }
`;

export default StyleAsideWrapper;