import heroContent from './mod/hero';
import './css/style.css';

const render = (() => {
  const container = document.getElementById('content');
  
  container.appendChild(heroContent());
})();
