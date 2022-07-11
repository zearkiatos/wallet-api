FROM  mcr.microsoft.com/azure-sql-edge:latest


COPY ./docker/mssql /docker/mssql/
COPY ./docker/mssql-entrypoint.sh /docker/

EXPOSE 1433