import path from 'node:path'
import type { PrismaConfig } from 'prisma'

export default {
    schema: path.join('src/infraestructure/DatabaseModule/ORM/Prisma/Model/schema.prisma')
} satisfies PrismaConfig