# todolist
To do List

1) criar variaveis de ambiente (.env.development,.env.production,.env.test)
2) npm run app:setup
3) npm run app:setupDatabaseContainer (No estiver no linux pode vir a calhar caso o primeiro comando dê erro: sudo env "PATH=$PATH" npm run app:setupDatabaseContainer)
4) npm run prisma:generate --env=development,production,test
5) npm run prisma:migrate --env=development,production,test
6) npm run app:dev ou app:prod