import mainImg from './mod/hero';
import navBar from './mod/navbar';
import locations from './mod/location';
import 'bootstrap';
import './css/style.css';

const render = (() => {
  const container = document.getElementById('content');
  const contentBox = mainImg();
  container.appendChild(navBar());
  container.appendChild(contentBox);
  contentBox.appendChild(locations());
})();
