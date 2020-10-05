const menu = (() => {
  const anchor = document.createElement('a');
  anchor.href = '#';
  anchor.textContent = 'Menu';
  anchor.classList.add('mx-5');
  anchor.setAttribute('id', 'menu-btn');


  const container = document.createElement('div');
  container.classList.add('link-bg', 'p-4');
  container.innerHTML = `
  <div class="card-deck">
    <div class="card">
      <img class="card-img-top" src="https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="Card image cap">
      <div class="card-body">
        <h2 class="card-title">oignons bhaia</h2>
        <p class="card-text">onion donuts with chickpea flour</p>
        <p class="card-text">€3.50</p>
      </div>
    </div>

    <div class="card">
      <img class="card-img-top" src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="Card image cap">
      <div class="card-body">
        <h2 class="card-title">mozarella pizza</h2>
        <p class="card-text">onion donuts with chickpea flour</p>
        <p class="card-text">€3.50</p>
      </div>
    </div>

    <div class="card">
      <img class="card-img-top" src="https://images.unsplash.com/photo-1560684352-8497838a2229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=456&q=80" alt="Card image cap">
      <div class="card-body">
        <h2 class="card-title">white soup</h2>
        <p class="card-text">onion donuts with chickpea flour</p>
        <p class="card-text">€3.50</p>
      </div>
    </div>

    <div class="card">
      <img class="card-img-top" src="https://images.unsplash.com/photo-1582142338198-3be6ddf03d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="Card image cap">
      <div class="card-body">
        <h2 class="card-title">english breakfast</h2>
        <p class="card-text">onion donuts with chickpea flour</p>
        <p class="card-text">€3.50</p>
      </div>
    </div>
  </div>
  `;
  const content = () => container;

  const link = () => anchor;

  return { content, link };
})();

export default menu;