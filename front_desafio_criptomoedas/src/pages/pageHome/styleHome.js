import styled from 'styled-components';

const StyleHomeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: yellow;
  #sectionMenuV {
    width: 250px;
    height: 100%;
    background-color: red;
  }
  #asideHome {
    width: calc(100% - 250px);
    height: 100%;
    background-color: green;
  }
`;

export default StyleHomeWrapper;