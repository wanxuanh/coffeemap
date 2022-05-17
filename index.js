const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  await prisma.users.create({
    data: {
      username: 'wanxuan.ho@gmail.com',
      password: '1234',
      name: 'wxuanh',
      reviews: 'good'
    },
  })

  const allUsers = await prisma.users.findMany({
    include: {
      username: 'wanxuan.ho@gmail.com',
    },
  })
  console.dir(allUsers, { depth: null })
}
main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })