function makeElement(type, attributes, text) {
    const newEl = document.createElement(type);
    for (let attr of attributes) {
      newEl.setAttribute(attr, atributes[attr])
    }
  }
  
  const h1 = makeElement('hi', {
    class: 'title',
    id: 'blhh'
  })