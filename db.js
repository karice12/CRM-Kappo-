const SUPABASE_CONFIG = {
    url: 'https://qvromhtadqksiylgotrq.supabase.co',
    key: 'sb_publishable_5LNpGfaW6hqb7jXLaA4CQw_2QalW4x_' 
};

const DB = {
    async query(method, table, data = null) {
        const headers = {
            'apikey': SUPABASE_CONFIG.key,
            'Authorization': `Bearer ${SUPABASE_CONFIG.key}`,
            'Content-Type': 'application/json'
        };
        try {
            const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/${table}`, {
                method: method,
                headers: headers,
                body: data ? JSON.stringify(data) : null
            });
            return await res.json();
        } catch (e) { console.error("Erro DB:", e); return []; }
    }
};

const SessionManager = {
    save(user) { localStorage.setItem('_kappo_session', JSON.stringify({user, date: Date.now()})); },
    get() { 
        const s = localStorage.getItem('_kappo_session');
        return s ? JSON.parse(s) : null;
    },
    destroy() { 
        localStorage.removeItem('_kappo_session'); 
        window.location.reload(); 
    }
};