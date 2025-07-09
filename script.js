const API_URL = 'http://localhost:3001/usuario';

function carregarPerfil() {
  fetch(API_URL)
    .then(response => response.json())
    .then(usuario => {
      document.getElementById('imagem').src = usuario.imagem_perfil || '';
      document.getElementById('nome').innerText = usuario.nome_completo || '';
      document.getElementById('idade').innerText = usuario.idade || '';
      document.getElementById('endereco').innerText = `${usuario.rua || ''}, ${usuario.bairro || ''}, ${usuario.estado || ''}`;
      document.getElementById('biografia').innerText = usuario.biografia || '';


      document.getElementById('imagem_perfil').value = usuario.imagem_perfil || '';
      document.getElementById('nome_completo').value = usuario.nome_completo || '';
      document.getElementById('idade_input').value = usuario.idade || '';
      document.getElementById('rua').value = usuario.rua || '';
      document.getElementById('bairro').value = usuario.bairro || '';
      document.getElementById('estado').value = usuario.estado || '';
      document.getElementById('biografia_input').value = usuario.biografia || '';
    })
    .catch(error => console.error('Erro ao carregar perfil:', error));
}

document.getElementById('formPerfil').addEventListener('submit', function(e) {
  e.preventDefault();

  const dados = {
    imagem_perfil: document.getElementById('imagem_perfil').value,
    nome_completo: document.getElementById('nome_completo').value,
    idade: document.getElementById('idade_input').value,
    rua: document.getElementById('rua').value,
    bairro: document.getElementById('bairro').value,
    estado: document.getElementById('estado').value,
    biografia: document.getElementById('biografia_input').value
  };

  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
  .then(response => response.json())
  .then(result => {
    alert('Dados atualizados com sucesso!');
    carregarPerfil(); 
  })
  .catch(error => console.error('Erro ao salvar perfil:', error));
});

carregarPerfil();
