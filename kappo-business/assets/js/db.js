const SUPABASE_CONFIG = {
  url: 'https://qvromhtadqksiylgotrq.supabase.co',
  key: 'sb_publishable_5LNpGfaW6hqb7jXLaA4CQw_2QalW4x_' 
};

const DB = {
  async request(method, table, data = null, query = '') {
    const url = `${SUPABASE_CONFIG.url}/rest/v1/${table}${query}`;
    const headers = {
      'apikey': SUPABASE_CONFIG.key,
      'Authorization': `Bearer ${SUPABASE_CONFIG.key}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };

    try {
      const res = await fetch(url, { method, headers, body: data ? JSON.stringify(data) : null });
      if (!res.ok) throw new Error("Erro na rede");
      return await res.json();
    } catch (e) {
      console.error("Erro no Banco:", e);
      return null;
    }
  }
};

const SessionManager = {
  save(user) { localStorage.setItem('_kappo_session', JSON.stringify({ user, loginAt: Date.now() })); },
  get() { return JSON.parse(localStorage.getItem('_kappo_session')); },
  destroy() { localStorage.removeItem('_kappo_session'); window.location.reload(); }
};