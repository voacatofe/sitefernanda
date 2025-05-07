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
    // Preparar os dados da conversão no formato esperado
    // A API requer event_type, event_family e payload como campos obrigatórios
    const payload = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: identifier,
        name: conversion.name || "",
        email: conversion.email,
        personal_phone: conversion.phone || "",
        cf_interesse: conversion.cf_interesse || "",
        cf_mensagem: conversion.cf_mensagem || "",
        traffic_source: conversion.traffic_source || window.location.href,
        tags: conversion.tags || [],
        // Adicionando campos de geolocalização
        client_tracking_id: "",
        available_for_mailing: true,
        legal_bases: [
          {
            category: "communications",
            type: "consent",
            status: "granted"
          }
        ]
      }
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

    const data = await response.json();
    
    if (!response.ok) {
      console.error("Erro ao enviar conversão para RD Station:", data);
      return { success: false, error: data };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Falha ao enviar conversão para RD Station:", error);
    return { success: false, error };
  }
} 