FROM mysql:5.7

RUN apt-get update

COPY ./docker/mysql /docker/mysql/
COPY ./docker/mysql-entrypoint.sh /docker/

EXPOSE 3306

ENTRYPOINT [ "sh", "./docker/mysql-entrypoint.sh" ]