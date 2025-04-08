const { PrismaClient } = require('@prisma/client')
const { hash } = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const password = await hash('123456', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'darlan@catofe.com.br' },
    update: {
      password
    },
    create: {
      email: 'darlan@catofe.com.br',
      name: 'Admin',
      password,
      role: 'admin'
    },
  })

  console.log({ admin })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }) 