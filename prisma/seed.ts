import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const password = await hash('admin123', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'darlan@catofe.com.br' },
    update: {},
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