const App = {
    init() {
        if (!Auth.checkSession()) return;
        this.loadHome();
    },

    changeTab(tab) {
        const view = document.getElementById('app-view');
        if(tab === 'home') this.loadHome();
        if(tab === 'clientes') view.innerHTML = '<h2>Carregando Clientes...</h2>';
    },

    async loadHome() {
        const view = document.getElementById('app-view');
        view.innerHTML = `
            <div class="card">
                <h3>Bem-vindo ao Kappo Business</h3>
                <p>Use o menu lateral para navegar.</p>
            </div>
        `;
    }
};

window.onload = () => App.init();