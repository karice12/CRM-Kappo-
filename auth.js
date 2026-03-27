const Auth = {
    async handleLogin() {
        const user = document.getElementById('login-user').value;
        const pass = document.getElementById('login-pass').value;

        // Login simples para teste - Você pode mudar para buscar no DB depois
        if (user === 'admin' && pass === 'admin123') {
            SessionManager.save(user);
            window.location.reload();
        } else {
            alert("Acesso Negado!");
        }
    },

    checkSession() {
        const session = SessionManager.get();
        if (session) {
            document.getElementById('login-screen').classList.add('hidden');
            document.getElementById('main-dashboard').classList.remove('hidden');
            return true;
        }
        return false;
    }
};

// Tenta iniciar o Auth assim que carregar
window.addEventListener('DOMContentLoaded', () => Auth.checkSession());