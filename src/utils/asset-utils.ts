import { adaptUrl, useCurrentDomain } from './url-utils';

/**
 * Função para adaptar caminhos de imagens e outros assets
 * @param path Caminho do asset a ser adaptado
 */
export function getAssetPath(path: string): string {
  const currentDomain = useCurrentDomain();
  
  // Se o caminho já for uma URL absoluta, retorna sem modificar
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }
  
  // Para caminhos relativos em /public, não precisa adaptar
  if (path.startsWith('/')) {
    return path;
  }
  
  // Para outros caminhos, utiliza a mesma lógica de adaptação de URLs
  return adaptUrl(path, currentDomain);
}

/**
 * Hook para obter o caminho de asset adaptado
 * @param path Caminho do asset a ser adaptado
 */
export function useAssetPath(path: string): string {
  const currentDomain = useCurrentDomain();
  return adaptUrl(path, currentDomain);
} 