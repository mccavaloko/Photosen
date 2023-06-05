document.addEventListener('DOMContentLoaded', function() {
    exibirFotoDeGato();
  });
  
  function exibirFotoDeGato() {
    const loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.style.display = 'block';
  
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        const fotoUrl = data[0].url;
        const fotoElemento = document.createElement('img');
        fotoElemento.src = fotoUrl;
        fotoElemento.style.width = '50%';
        const container = document.getElementById('catImageContainer');
        container.innerHTML = '';
        container.appendChild(fotoElemento);
        loadingMessage.style.display = 'none';
      })
      .catch(error => {
        console.log('Ocorreu um erro:', error);
        loadingMessage.textContent = 'Erro ao carregar a imagem';
      });
  }
  