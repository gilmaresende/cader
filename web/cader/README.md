#buld projeto
ng build

#instalar server
npm install -g http-server

#entrar na dist
cd dist/nome-do-seu-projeto

#executar trocando a porta
http-server -o --port 8081

# Build docker

```
docker build -t cader-w .
```

# criar container

```
docker run -p 4200:4200 --name cader-w -v C:/data-gf/projetos/cader/web/cader/:/app/ cader-w
docker run -t -p 4200:4200 --name cader-w -v C:/data-gf/projetos/cader/web/cader/:/app  cader-w
```
