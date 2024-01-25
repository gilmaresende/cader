alter table compra_cartao
add column update_time datetime(6);

alter table lancamento_fatura_cartao
add column update_time datetime(6);

alter table lancamento_fatura_cartao
add column id_usuario bigint;

update compra_cartao t
set t.update_time = t.data_cadastro
where t.id > 0;

update lancamento_fatura_cartao t
set t.update_time = t.data_cadastro
where t.id > 0;

update lancamento_fatura_cartao t
set t.id_usuario = 1
where t.id > 0;

alter table lancamento_fatura_cartao
add constraint FK_lafaca_us
foreign key (id_usuario)
references usuario (id);

ALTER TABLE `compra_cartao`
CHANGE COLUMN `compra_terceiros` `compra_terceiros` SMALLINT NULL ;