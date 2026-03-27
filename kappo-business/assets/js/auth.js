const Auth = {
  handleLogin() {
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;

    // Login padrão: admin / admin123
    if (user === 'admin' && pass === 'admin123') {
      SessionManager.save(user);
      window.location.reload(); // Recarrega para ativar o dashboard
    } else {
      alert("Usuário ou senha incorretos.");
    }
  },

  check() {
    const session = SessionManager.get();
    const loginScreen = document.getElementById('login-screen');
    const dashboard = document.getElementById('main-dashboard');

    if (session) {
      loginScreen.classList.remove('active');
      loginScreen.classList.add('hidden');
      dashboard.classList.remove('hidden');
      return true;
    }
    return false;
  }
};

// Verifica assim que o arquivo carrega
window.addEventListener('DOMContentLoaded', () => Auth.check());