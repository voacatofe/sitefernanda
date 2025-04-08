// Credenciais administrativas 
// IMPORTANTE: Em um cenário real, você iria usar hashes de senha e não senhas em texto puro
// Isto é uma solução simples para um uso administrativo limitado
const ADMIN_USERS = [
  {
    email: 'admin@fernandasoaresimoveis.com.br',
    password: 'senha_segura_admin123', // Use uma senha forte em produção
    name: 'Administrador',
    role: 'admin'
  },
  // Você pode adicionar mais usuários aqui
];

// Função para calcular um hash simples da senha (NÃO use em produção para senhas críticas)
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Converte para um inteiro de 32 bits
  }
  return hash.toString(16); // Converte para hexadecimal
}

// Funções de autenticação
export const auth = {
  // Verificar se o usuário está logado
  isAuthenticated() {
    if (typeof window === 'undefined') return false;
    
    const token = localStorage.getItem('auth_token');
    if (!token) return false;
    
    try {
      // Verificar se o token não expirou
      const data = JSON.parse(token);
      return data.expiresAt > Date.now();
    } catch (error) {
      return false;
    }
  },

  // Obter o usuário logado
  getUser() {
    if (typeof window === 'undefined') return null;
    
    const token = localStorage.getItem('auth_token');
    if (!token) return null;
    
    try {
      const data = JSON.parse(token);
      if (data.expiresAt > Date.now()) {
        return {
          email: data.email,
          name: data.name,
          role: data.role
        };
      }
      return null;
    } catch (error) {
      return null;
    }
  },

  // Login com email e senha
  login(email, password) {
    // Procurar o usuário nas credenciais predefinidas
    const user = ADMIN_USERS.find(user => 
      user.email.toLowerCase() === email.toLowerCase() && 
      user.password === password
    );

    if (!user) {
      return { success: false, message: 'Credenciais inválidas' };
    }

    // Criar token com tempo de expiração (24 horas)
    const token = {
      email: user.email,
      name: user.name,
      role: user.role,
      // Adicionar um salt aleatório ao token para evitar reutilização em outros contextos
      tokenId: simpleHash(user.email + Date.now() + Math.random()),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 horas
    };

    // Salvar no localStorage
    localStorage.setItem('auth_token', JSON.stringify(token));
    
    return { 
      success: true, 
      user: {
        email: user.email,
        name: user.name,
        role: user.role
      }
    };
  },

  // Logout
  logout() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('auth_token');
  }
}; 