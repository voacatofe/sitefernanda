// Este script cria versões simplificadas dos componentes de autenticação para o build estático
const fs = require('fs');
const path = require('path');

// Backup do arquivo auth.ts original
console.log('Fazendo backup do auth.ts original...');
if (fs.existsSync('./auth.ts')) {
  fs.copyFileSync('./auth.ts', './auth.ts.bak');
}

// Criar uma versão simplificada do auth.ts para o build estático
console.log('Criando versão simplificada do auth.ts...');
const staticAuth = `
// Versão simplificada para build estático
export const auth = async () => {
  return { user: null };
};

export const signIn = async () => {
  console.log('SignIn não disponível no site estático');
  return { error: 'Not implemented in static build' };
};

export const signOut = async () => {
  console.log('SignOut não disponível no site estático');
  return { error: 'Not implemented in static build' };
};
`;

fs.writeFileSync('./auth.ts', staticAuth);

// Backup da API route
const apiDir = './src/app/api/auth/[...nextauth]';
if (fs.existsSync(`${apiDir}/route.ts`)) {
  console.log('Fazendo backup da rota de API...');
  fs.copyFileSync(`${apiDir}/route.ts`, `${apiDir}/route.ts.bak`);
}

// Criar versão estática da API route
console.log('Criando versão estática da rota de API...');
const staticRoute = `
// Versão estática para build
export const dynamic = 'force-static';

// Necessário para build estático com parâmetros dinâmicos
export function generateStaticParams() {
  return [{ nextauth: ['session'] }, { nextauth: ['signin'] }, { nextauth: ['signout'] }];
}

export function GET() {
  return new Response(JSON.stringify({ user: null }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export function POST() {
  return new Response(JSON.stringify({ error: 'Not implemented in static build' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
`;

fs.mkdirSync(apiDir, { recursive: true });
fs.writeFileSync(`${apiDir}/route.ts`, staticRoute);

// Lidar com outras rotas de API que podem causar problemas
console.log('Verificando outras rotas de API...');
const apiPaths = [
  './src/app/api/seed',
  './src/app/api/auth/callback',
  './src/app/api/auth/signin',
  './src/app/api/auth/signout'
];

apiPaths.forEach(apiPath => {
  if (fs.existsSync(`${apiPath}/route.ts`)) {
    console.log(`Fazendo backup da rota: ${apiPath}`);
    fs.copyFileSync(`${apiPath}/route.ts`, `${apiPath}/route.ts.bak`);
    
    // Criar versão estática da rota
    fs.writeFileSync(`${apiPath}/route.ts`, `
// Versão estática para build
export const dynamic = 'force-static';

// Necessário para build estático
export function generateStaticParams() {
  return [];
}

export function GET() {
  return new Response(JSON.stringify({ disabled: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export function POST() {
  return new Response(JSON.stringify({ disabled: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
`);
  }
});

console.log('Autenticação desabilitada para o build estático!'); 