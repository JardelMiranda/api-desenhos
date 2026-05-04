const container = document.getElementById('container');
const search = document.getElementById('search');

let personagens = [];

// Buscar dados da API
fetch('https://rickandmortyapi.com/api/character')
  .then(res => res.json())
  .then(data => {
    personagens = data.results;
    mostrar(personagens);
  });

// Mostrar personagens na tela
function mostrar(lista) {
  container.innerHTML = '';

  lista.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <h3>${p.name}</h3>
      <img src="${p.image}">
      <p>Status: ${p.status}</p>
    `;

    container.appendChild(card);
  });
}

// Filtro de busca
search.addEventListener('input', () => {
  const filtrados = personagens.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  );

  mostrar(filtrados);
});