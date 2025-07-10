📄 Desafio Técnico – Perfil de Usuário
Este projeto consiste em uma aplicação web para exibir, editar e salvar informações de perfil de usuário, com armazenamento em banco de dados MySQL.

🚀 Tecnologias Utilizadas
Front-end: HTML5, CSS3, Bootstrap, JavaScript

Back-end: Node.js, Express, MySQL

Banco de Dados: MySQL

Hospedagem do Front-end: Vercel

Hospedagem do Back-end: Render (ou outro serviço de deploy Node.js)

🌐 Link da Aplicação (Front-end)
🔗 https://teste-tecnico-75p9.vercel.app

⚙ Como Rodar o Projeto Localmente
1️⃣ Clonar o Repositório
bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
2️⃣ Configuração do Banco de Dados (MySQL)
Instale e inicie o MySQL (XAMPP ou MySQL Workbench).

Crie o banco de dados executando o script localizado em:

pgsql
Copiar código
/sql/Banco de dados.sql
Insira pelo menos um usuário na tabela usuarios para visualizar no front.

3️⃣ Rodando o Back-end (API Node.js)
Navegue até a pasta do back-end:

bash
Copiar código
cd backend
Instale as dependências:

bash
Copiar código
npm install
Crie um arquivo .env dentro da pasta /backend com as suas credenciais:

ini
Copiar código
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=perfil_usuario
PORT=3001
Inicie o servidor:

bash
Copiar código
node index.js
✅ O back-end estará rodando localmente em:
http://localhost:3001

4️⃣ Rodando o Front-end Localmente (Opcional)
Navegue até a pasta front:

bash
Copiar código
cd front
Abra o arquivo index.html no navegador (ou utilize a extensão Live Server do VS Code).

💾 Estrutura do Projeto
pgsql
Copiar código
/backend
  └── index.js
/front
  ├── index.html
  ├── style.css
  └── script.js
/sql
  └── Banco de dados.sql
README.md
package.json
.gitignore
📝 Observações Importantes
O front-end foi publicado na Vercel.

O back-end pode ser publicado em serviços como Render, Railway ou Cyclic.

Caso deseje testar localmente, atualize no script.js a URL das requisições para:

js
Copiar código
fetch('http://localhost:3001/usuario')
