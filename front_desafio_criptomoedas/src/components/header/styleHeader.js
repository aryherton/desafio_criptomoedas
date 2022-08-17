import styled from 'styled-components';

const StyleHeaderWrapper = styled.header`
    background-color: #0B0E14;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    width: 100%;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.59);
    #divImgLogo {
        margin-left: 80px;
        width: 90px;
        height: 90px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    #favoriteCoin {
        color: #F9B50A;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
            color: #C2C8D1;
            margin-bottom: 10px;
        }
    }
    #divInfoUser {
        color: #C2C8D1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 150px;
        height: 100%;
        font-size: 18px;
        margin-right: 80px;
        #buttonSair {
            width: 60px;
            height: 30px;
            background-color: #F9B50A;
            border-radius: 80px;
            button {
                width: 100%;
                height: 100%;
                background: none;
                border: none;
                border-radius: 80px;
            }
        }
    }
`;

export default StyleHeaderWrapper;