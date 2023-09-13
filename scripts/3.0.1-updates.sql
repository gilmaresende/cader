update pessoa p
set p.update_time = p.data_cadastro
where p.id > 0;

update categoria_despesa p
set p.update_time = p.data_cadastro
where p.id > 0;

update categoria_receita p
set p.update_time = p.data_cadastro
where p.id > 0;

update meio_pagamento p
set p.update_time = p.data_cadastro
where p.id > 0;

update cartao p
set p.update_time = p.data_cadastro
where p.id > 0;

update carteira p
set p.update_time = p.data_cadastro
where p.id > 0;

alter table movimento 
       add column update_time datetime(6);

alter table movimento 
       add column id_usuario bigint not null;

update movimento p
set p.id_usuario = 1
where p.id > 0;


 alter table movimento 
       add constraint moviment_user_fk 
       foreign key (id_usuario) 
       references usuario (id);



update movimento p
set p.update_time = p.data_cadastro
where p.id > 0;
