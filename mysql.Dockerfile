FROM mysql:5.7

COPY ./docker/mysql /docker/mysql/
COPY ./docker/mysql-entrypoint.sh /docker/

EXPOSE 3306