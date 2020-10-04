const home = (() => {
  const anchor = document.createElement('a');
  anchor.setAttribute('id', 'home-btn');
  anchor.href = '#';
  anchor.textContent = 'Home';

  const container = document.createElement('div');
  container.classList.add('d-flex', 'flex-wrap', 'link-bg');
  container.innerHTML = `
    <div class="card m-3">
      <img class="card-img-top" src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">51 Humboldt Ave #3
        Providence, Rhode Island(RI), 02906.</p>
        <p>+123-787-1478</p>
      </div>
    </div>

    <div class="card m-3">
      <img class="card-img-top" src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">17746 74th Pl N
        Osseo, Minnesota(MN), 55311.</p>
        <p>+123-787-1478</p>
      </div>
    </div>

    <div class="card m-3">
      <img class="card-img-top" src="https://images.unsplash.com/photo-1464979681340-bdd28a61699e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">2600 Rehberg Ln
        Billings, Montana(MT), 59102.</p>
        <p>+123-787-1478</p>
      </div>
    </div>

    <div class="card m-3">
      <img class="card-img-top" src="https://images.unsplash.com/photo-1491223343498-58796d6b503d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">25164 Alta Vista Dr
        Moreno Valley, California(CA), 92557.</p>
        <p>+123-787-1478</p>
      </div>
    </div>
    `;

  const link = () => anchor;

  const content = () => container;

  return { link, content };
})();

export default home;
