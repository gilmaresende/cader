UPDATE `enum_origem_despesa` SET `value` = '3' WHERE (`value` = '0');

INSERT INTO `enum_origem_despesa` (`value`, `descricao`) VALUES ('2', 'FATURA_CARTAO');

update despesa t
set t.origem = 3
where t.origem = 0
and t.id > 0;


INSERT INTO `enum_origem_movimento` (`value`, `descricao`) VALUES ('4', 'MANUAL');

update MOVIMENTO m
set m.origem_movimento = 4
where m.origem_movimento = 0
and m.id>0;

DELETE FROM `enum_origem_movimento` WHERE (`value` = '0');

INSERT INTO `enum_status_despesa` (`value`, `descricao`) VALUES ('2', 'ABERTO');

update DESPESA m
set m.status = 2
where m.status = 0
and m.id>0;

DELETE FROM `enum_status_despesa` WHERE (`value` = '0');

INSERT INTO `enum_receita_despesa` (`value`, `descricao`) VALUES ('2', 'RECEITA');

UPDATE MOVIMENTO M
SET M.pagamento_recebimento = 2
WHERE M.pagamento_recebimento = 0
AND M.ID>0;

DELETE FROM `enum_receita_despesa` WHERE (`value` = '0');


DELETE FROM `enum_receita_despesa` WHERE (`value` = '0');

INSERT INTO `enum_origem_receita` (`value`, `descricao`) VALUES ('3', 'MANUAL');

update receita t
set t.origem = 3
where t.origem = 0
and t.id > 0;

DELETE FROM `enum_origem_receita` WHERE (`value` = '0');
