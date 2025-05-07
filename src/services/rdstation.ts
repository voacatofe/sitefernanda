// Serviço de integração com RD Station Marketing
// Documentação: https://developers.rdstation.com/reference/introducao-rdsm

interface RDStationConversion {
  name?: string;
  email: string;
  phone?: string;
  cf_interesse?: string;
  cf_mensagem?: string;
  traffic_source?: string;
  tags?: string[];
}

// Substitua com sua chave de API do RD Station
const API_KEY = process.env.NEXT_PUBLIC_RDSTATION_API_KEY || "";

/**
 * Envia uma conversão para o RD Station Marketing via API Key
 * @param conversion Dados da conversão a serem enviados
 * @param identifier Identificador único da conversão (ex: "formulario-download", "agenda-visita")
 * @returns Promise com o resultado da requisição
 */
export async function sendRDStationConversion(
  conversion: RDStationConversion,
  identifier: string
) {
  // Verificar se a API KEY está definida
  if (!API_KEY) {
    console.error("RD Station API Key não configurada");
    return { success: false, error: "API Key não configurada" };
  }

  try {
    // Preparar os dados da conversão com dados adicionais do analytics
    const payload = {
      conversion_identifier: identifier,
      ...conversion,
    };

    // Enviar a conversão para o RD Station
    const response = await fetch(
      `https://api.rd.services/platform/conversions?api_key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro ao enviar conversão para RD Station:", errorData);
      return { success: false, error: errorData };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Falha ao enviar conversão para RD Station:", error);
    return { success: false, error };
  }
} 