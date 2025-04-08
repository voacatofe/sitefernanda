const { compare, hash } = require('bcryptjs')

async function main() {
  const storedHash = '$2a$12$3I9lLRO8awUxfrPTyMDOLeaDLpDRE05M1BYo46rsd1FxOvYqBtZoG'
  const password = '123456'
  
  console.log('Testando senha:', password)
  console.log('Hash armazenado:', storedHash)
  
  const isValid = await compare(password, storedHash)
  console.log('Senha válida:', isValid)
  
  // Gerando um novo hash para comparação
  const newHash = await hash(password, 12)
  console.log('Novo hash gerado:', newHash)
}

main().catch(console.error) 