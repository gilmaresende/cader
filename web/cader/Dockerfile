# Use a imagem oficial do Node.js como base
FROM node:18

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos de configuração da aplicação (package.json e angular.json)
COPY package*.json angular.json ./

# Instala as dependências da aplicação
RUN npm install

# Instala globalmente o Angular CLI
RUN npm install -g @angular/cli

# Copia o restante do código da aplicação para o contêiner
COPY . .

# Expõe a porta em que a aplicação Angular vai rodar
EXPOSE 4200

# Define o comando para iniciar o servidor de desenvolvimento do Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
