INSERT INTO `cader-dev-1`.`enum_origem_movimento` (`value`, `descricao`) VALUES ('4', 'MANUAL NOVO');

update movimento m
set m.origem_movimento = 4
where  m.origem_movimento = 0;

DELETE FROM `cader-dev-1`.`enum_origem_movimento` WHERE (`value` = '0');

UPDATE `cader-dev-1`.`enum_origem_movimento` SET `descricao` = 'MANUAL' WHERE (`value` = '4');

INSERT INTO `cader-dev-1`.`enum_receita_despesa` (`value`, `descricao`) VALUES ('2', 'RECEITA');

UPDATE `cader-dev-1`.`carteira` SET `ativa` = '1' WHERE (`id` = '8');
UPDATE `cader-dev-1`.`carteira` SET `ativa` = '1' WHERE (`id` = '9');
UPDATE `cader-dev-1`.`carteira` SET `ativa` = '1' WHERE (`id` = '13');

update movimento m
set m.pagamento_recebimento = 2
where m.pagamento_recebimento = 0;

UPDATE `cader-dev-1`.`carteira` SET `ativa` = '0' WHERE (`id` = '8');
UPDATE `cader-dev-1`.`carteira` SET `ativa` = '0' WHERE (`id` = '9');
UPDATE `cader-dev-1`.`carteira` SET `ativa` = '0' WHERE (`id` = '13');

DELETE FROM `cader-dev-1`.`enum_receita_despesa` WHERE (`value` = '0');
