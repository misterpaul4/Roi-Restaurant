import mainImg from "./mod/hero";
import navBar from "./mod/navbar";
import "bootstrap";
import "./css/style.css";
import home from "./mod/location";
import menu from './mod/menu';
import contact from './mod/contact'

const render = (() => {
  const container = document.getElementById("content");
  const contentBox = mainImg();

  container.appendChild(navBar());
  container.appendChild(contentBox);

  let currentActiveLink;

  const clearHtml = () => {
    contentBox.innerHTML = ' ';
  }

  const setActiveLink = (anchor) => {
    currentActiveLink.classList.remove('active-link');
    currentActiveLink = anchor;
    anchor.classList.add('active-link');
  }

  window.onload = () => {
    setActiveLink(home.link());
    contentBox.appendChild(home.content());
    currentActiveLink = home.link();
  };

  home.link().addEventListener('click', () => {
    clearHtml();
    setActiveLink(home.link());
    contentBox.appendChild(home.content());
  });

  menu.link().addEventListener('click', () => {
    clearHtml();
    setActiveLink(menu.link());
    contentBox.appendChild(menu.content());
  })

  contact.link().addEventListener('click', () => {
    clearHtml();
    setActiveLink(contact.link());
    contentBox.appendChild(contact.content());
  })
})();
