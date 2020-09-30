
import Icon from '../img/logo.png';

const navBar = () => {
  const container = document.createElement('nav');
  container.innerHTML = `
  <div class="d-flex justify-content-between align-items-center nav-item-container mx-5 px-5">
    <img src="${Icon}" class="logo"/>
    <div class="nav-items">
      <a href="#" class="px-2 py-1">Home</a>
      <a href="#" class="px-2 py-1" class="mx-5">Menu</a>
      <a href="#" class="px-2 py-1">Contact</a>
    </div>

    <div>
      <a href="#"><i class="fab fa-facebook-square"></i></a>
      <a href="#"><i class="fab fa-instagram-square mx-2"></i></a>
      <a href="#"><i class="fas fa-paper-plane"></i></a>
    </div>
  </div>
  `

  return container
}

export default navBar