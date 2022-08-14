import React from 'react';

import StyleHomeWrapper from './styleHome';
import Header from '../../components/header/Header';

function Home() {
  return (
    <StyleHomeWrapper>
      <section id="sectionMenuV">
        <div id="infoMenu">
          Infomaçẽos
        </div>
        <div id="divMenuV">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </section>
      <aside id="asideHome">
        <Header />
      </aside>
    </StyleHomeWrapper>
  );
}

export default Home;