## Configure Postgres container to execute the application
```docker run --name myPostgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres```
