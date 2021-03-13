import React from 'react';
import './style.css';

function Content() {
  return (
    <div className="DE-content">
      <p>
        Welkom op deze site, ik ben Jolijn en ik praat graag over huid <br />
        Ik hoop dat je het interessant vindt wat ik te vertellen heb..
      </p>
      <div style={{ height: 300, width: 600, position: 'relative' }}>
        <img src="https://image.flaticon.com/icons/png/512/2269/2269004.png" className="App-logo" alt="logo" style={{ position: 'absolute' }} />
      </div>
      <p> Wil je meer weten over schimmelnagels? Ga dan naar mijn insta!</p>
      <a className="App-link" href="https://www.instagram.com/skintherapist.jolyn/" target="_blank" rel="noopener noreferrer">
        KLIK HIER VOOR DE INSTAGRAM PAGINA
      </a>
      <p> #skinfluencer</p>
    </div>
  );
}
export default Content;
