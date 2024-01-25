alter table baixa_despesa
add column update_time datetime(6);

update baixa_despesa t
set t.update_time = t.data_cadastro
where t.id > 0;

alter table baixa_despesa
add column id_usuario bigint;

update baixa_despesa t
set t.id_usuario = 1
where t.id > 0;

alter table cartao
add column update_time datetime;

update cartao t
set t.update_time = t.data_cadastro
where t.id > 0;

alter table carteira
add column update_time datetime(6);

update carteira t
set t.update_time = t.data_cadastro
where t.id > 0;

alter table categoria_despesa
add column update_time datetime(6);

update categoria_despesa t
set t.update_time = t.data_cadastro
where t.id > 0;

alter table categoria_receita
add column update_time datetime(6);

update categoria_receita t
set t.update_time = t.data_cadastro
where t.id > 0;

alter table despesa
add column update_time datetime(6);

update despesa t
set t.update_time = t.data_cadastro
where t.id > 0;

alter table meio_pagamento
add column update_time datetime(6);

update meio_pagamento t
set t.update_time = t.data_cadastro
where t.id > 0;

alter table movimento
add column update_time datetime(6);

update movimento t
set t.update_time = t.data_cadastro
where t.id > 0;

alter table movimento
add column id_usuario bigint not null;

update movimento t
set t.id_usuario = 1
where t.id > 0;

alter table pessoa
add column update_time datetime(6);

update pessoa t
set t.id_usuario = 1
where t.id > 0;

alter table usuario
add column login varchar(50) not null;

update baixa_despesa t
set t.id_usuario = 1
where t.id > 0;

update movimento t
set t.id_usuario = 1
where t.id > 0;

alter table baixa_despesa
add constraint exp_pay_user_fk
foreign key (id_usuario)
references usuario (id);

alter table movimento
add constraint mov_user_fk
foreign key (id_usuario)
references usuario (id);

update pessoa t
set t.update_time = t.data_cadastro
where t.id > 0;


alter table receita
add column update_time datetime(6);

update receita t
set t.update_time = t.data_cadastro
where t.id > 0;


alter table baixa_receita
add column update_time datetime(6);

update baixa_receita t
set t.update_time = t.data_cadastro
where t.id > 0;

alter table baixa_receita
add column id_usuario bigint;

update baixa_receita t
set t.id_usuario = 1
where t.id > 0;

alter table baixa_receita
add constraint bare_user_fk
foreign key (id_usuario)
references usuario (id);

alter table fatura_cartao
add column update_time datetime(6);

update fatura_cartao t
set t.update_time = t.data_cadastro
where t.id > 0;

alter table fatura_cartao
add column id_usuario bigint;

update fatura_cartao t
set t.id_usuario = 1
where t.id > 0;

alter table fatura_cartao
add constraint FK_FACA_USER
foreign key (id_usuario)
references usuario (id);

update lancamento_fatura_cartao t
set t.update_time = t.data_cadastro
where t.id > 0;

update lancamento_fatura_cartao t
set t.id_usuario = 1
where t.id > 0;

alter table lancamento_fatura_cartao
add constraint pk_lafaca_user
foreign key (id_usuario)
references usuario (id);
ALTER TABLE `compra_cartao`
CHANGE COLUMN `compra_terceiros` `compra_terceiros` SMALLINT NULL ;

alter table lote_despesa
add column update_time datetime(6);

update lote_despesa t
set t.update_time = t.data_cadastrp
where t.id > 0;

alter table item_lote_despesa
add column data_cadastro date;

alter table item_lote_despesa
add column update_time datetime(6);

alter table item_lote_despesa
add column id_usuario bigint;

update item_lote_despesa t
set t.update_time = t.data_cadastro
where t.id > 0;

update item_lote_despesa t
set t.id_usuario = 1
where t.id > 0;

alter table item_lote_despesa
add constraint FK_ITLODE_USER
foreign key (id_usuario)
references usuario (id);
