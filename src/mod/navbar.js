
const navBar = () => {
  const container = document.createElement('nav');
  container.innerHTML = `
  <div class="d-flex justify-content-between align-items-center nav-item-container mx-5 px-5 py-3">
    <div class="box"></div>
    <div>
      <a href="#">Menu</a>
      <a href="#" class="mx-5">Contact</a>
      <a href="#">About</a>
    </div>

    <div>
      <i class="fab fa-facebook-square"></i>      
      <i class="fab fa-instagram-square mx-2"></i>    
      <i class="fas fa-paper-plane"></i>    
    </div>
  </div>
  `

  return container
}

export default navBar