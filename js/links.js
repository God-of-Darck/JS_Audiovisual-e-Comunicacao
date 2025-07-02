function carregarPagina(pagina) {
      fetch(pagina)
        .then(res => {
          if (!res.ok) throw new Error('Erro ao carregar a página.');
          return res.text();
        })
        .then(html => {
          document.getElementById('content').innerHTML = html;
        })
        .catch(err => {
          document.getElementById('content').innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
          console.error(err);
        });
    }

    // Carrega a primeira página automaticamente ao iniciar
    carregarPagina('Templates/index.html');
