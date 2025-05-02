// Script para criar configuração de roteamento estático
const fs = require('fs');
const path = require('path');

function createStaticRouteConfig(landingPage) {
  const appDir = path.join(__dirname, '../src/app');
  const routeConfig = `
export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return [];
}
`;

  // Criar pasta para configuração de rota
  const routesDir = path.join(appDir, 'lp', landingPage);
  if (!fs.existsSync(routesDir)) {
    fs.mkdirSync(routesDir, { recursive: true });
  }

  // Gravar config no arquivo de rota
  fs.writeFileSync(path.join(routesDir, 'route-config.js'), routeConfig);

  // Se houver API routes, vamos desativá-las
  const apiDir = path.join(appDir, 'api');
  if (fs.existsSync(apiDir)) {
    const apiRouteConfig = `
export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = false;

// Esta API não está disponível em builds estáticos
export function GET() {
  return new Response('API não disponível em modo estático', { status: 404 });
}

export function POST() {
  return new Response('API não disponível em modo estático', { status: 404 });
}
`;

    // Adicionar configuração para desativar rotas de API
    const apiRoutes = fs.readdirSync(apiDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const route of apiRoutes) {
      const apiRouteDir = path.join(apiDir, route);
      fs.writeFileSync(path.join(apiRouteDir, 'static-config.js'), apiRouteConfig);
    }
  }
}

module.exports = { createStaticRouteConfig }; 