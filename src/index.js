import mainImg from './mod/hero';
import navBar from './mod/navbar';
import 'bootstrap';
import './css/style.css';
import home from './mod/location';
import menu from './mod/menu';
import contact from './mod/contact';

// eslint-disable-next-line no-unused-vars
const render = (() => {
  const container = document.getElementById('content');
  const contentBox = mainImg();

  container.appendChild(navBar());
  container.appendChild(contentBox);

  const clearHtml = () => {
    contentBox.innerHTML = ' ';
  };

  let currentActiveLink = home.link();

  const setActiveLink = (anchor) => {
    currentActiveLink.classList.remove('active-link');
    currentActiveLink = anchor;
    anchor.classList.add('active-link');
  };

  window.onload = () => {
    setActiveLink(home.link());
    contentBox.appendChild(home.content());
  };

  const arr = [menu, contact, home];
  arr.forEach((item) => {
    item.link().addEventListener('click', () => {
      clearHtml();
      setActiveLink(item.link());
      contentBox.appendChild(item.content());
    });
  });
})();
