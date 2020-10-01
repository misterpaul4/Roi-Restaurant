const contactForm = () => {
  const container = document.createElement('form');
  container.innerHTML = `
    <input type='email' id='email' placeholder="Email"><br>
    <input type='tel' id='number' placeholder="Phone Number"><br>
    <buton type='submit'>Submit</button>
  `
  return container
}

const contactLink = () => {
  const link = document.createElement('a');
  link.href = '#';
  link.textContent = 'Contact';

  return link
}

export { contactLink, contactForm };