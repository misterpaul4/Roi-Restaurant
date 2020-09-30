import mainImg from './mod/hero';
import navBar from './mod/navbar';
import 'bootstrap';
import './css/style.css';

const render = (() => {
  const container = document.getElementById('content');
  container.appendChild(mainImg());
  container.appendChild(navBar());
})();
