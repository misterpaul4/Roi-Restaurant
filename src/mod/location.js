import Icon from '../img/logo.png';


const locations = () => {
  const container = document.createElement('div');
  container.classList.add('d-flex', 'flex-wrap', 'align-items-center')
  container.innerHTML = `
  <div class="card m-3">
    <img class="card-img-top" src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">Minim sit adipisicing eu eu sint nulla ullamco sint Lorem nostrud.</p>
      <p>+123-787-1478</p>
    </div>
  </div>

  <div class="card m-3">
    <img class="card-img-top" src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">Minim sit adipisicing eu eu sint nulla ullamco sint Lorem nostrud.</p>
      <p>+123-787-1478</p>
    </div>
  </div>

  <div class="card m-3">
    <img class="card-img-top" src="https://images.unsplash.com/photo-1464979681340-bdd28a61699e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">Minim sigdfg dfg fdg5rtgrt rt rtg rtt adipisicing eu eu sint nulla ullamco sint Lorem nostrud.</p>
      <p>+123-787-1478</p>
    </div>
  </div>

  <div class="card m-3">
    <img class="card-img-top" src="https://images.unsplash.com/photo-1491223343498-58796d6b503d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">Minim sit adipisicing eu eu sint nulla ullamco sint Lorem nostrud.</p>
      <p>+123-787-1478</p>
    </div>
  </div>
  `

  return container
}

export default locations;