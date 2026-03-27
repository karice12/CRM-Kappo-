const App = {
  async init() {
    if (!Auth.check()) return;
    this.navigate('home');
  },

  navigate(page) {
    const view = document.getElementById('app-view');
    const title = document.getElementById('view-title');

    if (page === 'home') {
      title.innerText = "Resumo Geral";
      view.innerHTML = `<div class="card"><h3>Bem-vindo!</h3><p>Selecione uma opção no menu lateral.</p></div>`;
    }

    if (page === 'clientes') {
      title.innerText = "Gestão de Clientes";
      this.loadClientes();
    }
  },

  async loadClientes() {
    const view = document.getElementById('app-view');
    view.innerHTML = "<p>Carregando clientes do banco...</p>";
    
    const dados = await DB.request('GET', 'clientes', null, '?order=nome.asc');
    
    if (!dados) {
      view.innerHTML = "<p style='color:red'>Erro ao conectar com o Supabase. Verifique a chave no db.js</p>";
      return;
    }

    let tabela = `<table><thead><tr><th>Nome</th><th>WhatsApp</th></tr></thead><tbody>`;
    dados.forEach(c => {
      tabela += `<tr><td>${c.nome}</td><td>${c.whatsapp}</td></tr>`;
    });
    tabela += `</tbody></table>`;
    
    view.innerHTML = dados.length ? tabela : "<p>Nenhum cliente cadastrado.</p>";
  }
};

window.onload = () => App.init();