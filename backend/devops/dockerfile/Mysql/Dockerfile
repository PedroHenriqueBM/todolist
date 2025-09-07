FROM mysql:8.1

# Define variáveis de ambiente padrão (você pode sobrescrever no docker run)
ENV MYSQL_ROOT_PASSWORD=root123
ENV MYSQL_DATABASE=meubanco
ENV MYSQL_USER=devuser
ENV MYSQL_PASSWORD=devpass

# Expõe a porta padrão do MySQL
EXPOSE 3306

# Comando padrão para rodar o MySQL
CMD ["mysqld"]
