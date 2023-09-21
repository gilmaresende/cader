 alter table carteira 
       add column update_time datetime(6);


 alter table cartao 
       add column update_time datetime(6);       


alter table categoria_despesa 
       add column update_time datetime(6);

alter table categoria_receita 
       add column update_time datetime(6);

alter table meio_pagamento 
       add column update_time datetime(6);

alter table pessoa 
       add column update_time datetime(6);

alter table usuario 
       add column login varchar(50) not null;

alter table usuario 
       drop index UK_pm3f4m4fqv89oeeeac4tbe2f4;

alter table usuario 
       add constraint UK_pm3f4m4fqv89oeeeac4tbe2f4 unique (login);

ALTER TABLE usuario
CHANGE COLUMN `senha` `senha` VARCHAR(150) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL ;

ALTER TABLE `usuario` 
DROP COLUMN `key_password`;

ALTER TABLE `usuario` 
DROP FOREIGN KEY `fk_user_pessoa`;
ALTER TABLE `usuario` 
DROP COLUMN `id_pessoa`,
DROP INDEX `fk_user_pessoa` ;


ALTER TABLE `usuario` 
DROP COLUMN `token_recover`,
DROP COLUMN `token`,
DROP INDEX `token_UNIQUE` ,
DROP INDEX `token_recover_UNIQUE` ;

ALTER TABLE `usuario` 
DROP COLUMN `fone`;
