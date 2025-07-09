CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  imagem_perfil VARCHAR(255),
  nome_completo VARCHAR(100),
  idade INT,
  rua VARCHAR(100),
  bairro VARCHAR(100),
  estado VARCHAR(50),
  biografia TEXT
);