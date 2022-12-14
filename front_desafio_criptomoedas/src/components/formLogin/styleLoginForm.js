import styled from 'styled-components';

export const LoginFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 450px;
    height: 350px;
    background-color: ${props => props.theme.colors.formLoginBG};
    border-radius: 10px;
    border: 3px solid ${props => props.theme.colors.formBorder};
    .form-group {
      display: flex;
      flex-direction: column;
      color: #f7b809;
      font-size: 20px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      letter-spacing: 3px;
      input {
        margin-top: 10px;
        width: 350px;
        height: 40px;
        border-radius: 5px;
        border: 0px;
        ::-moz-placeholder {
          font-size: 16px;
           font-style: italic;
           color: ${props => props.theme.colors.placeholderInput};
        }
        text-indent: 10px;
      }
    }
    #buttonsFormLogin{
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      margin-top: 20px;
      #btnFirst {
        width: 150px;
        height: 40px;
        border-radius: 5px;
        background-color: #e6e6ed;
        border: none;
        font-size: 16px;
      }
      #btnFirst:hover {
        cursor: pointer;
        background-color: #c7c7e0;
        border: 2px solid #4ef46c;
        font-size: 18px;
        color: #9212ed;
      }
      #buttonRegister {
        color: yellow;
        font-size: 16px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        background: none;
        border: 1px solid #f7b809;
        border-radius: 5px;
        width: 150px;
        height: 40px;
      }
      #buttonRegister:hover {
        cursor: pointer;
        color: #f7b809;
        border-color: yellow;
      }
    }
  }
  #alertNotFound {
    color: yellow;
    font-size: 18px;
    margin-top: 30px;
  }
`;