ALTER TABLE `usuario`
DROP FOREIGN KEY `fk_user_pessoa`;

ALTER TABLE `usuario`
DROP COLUMN `id_pessoa`,
DROP COLUMN `token_recover`,
DROP COLUMN `token`,
DROP COLUMN `key_password`,
DROP COLUMN `fone`,
CHANGE COLUMN `login` `login` VARCHAR(50) NOT NULL AFTER `id`,
CHANGE COLUMN `senha` `senha` VARCHAR(50) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL AFTER `login`,
CHANGE COLUMN `nome` `nome` VARCHAR(250) NOT NULL ,
DROP INDEX `fk_user_pessoa` ,
DROP INDEX `token_UNIQUE` ,
DROP INDEX `token_recover_UNIQUE` ;

ALTER TABLE `usuario`
CHANGE COLUMN `senha` `senha` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL ;

update usuario u
set u.senha = '$2a$10$9.as8AnQ3OhulpuRVMF.qOAU4Fzo0gABDV5a5rMjplaAo7HT8do/O',
login = 'gf'
where u.id = 1;
