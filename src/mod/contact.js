const contact = (() => {
  const container = document.createElement('form');
  container.innerHTML = `
      <input type='email' id='email' placeholder="Email"><br>
      <input type='tel' id='number' placeholder="Phone Number"><br>
      <buton type='submit'>Submit</button>
    `
  const anchor = document.createElement('a');
  anchor.href = '#';
  anchor.textContent = 'Contact';
  anchor.setAttribute('id', 'contact-btn');

  const form = () => {
    return container
  }

  const link = () => {
    return anchor
  }

  return { form, link }

})();

export default contact;