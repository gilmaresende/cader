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

 alter table despesa 
       add column update_time datetime(6);

update despesa p
set p.update_time = p.data_cadastro
where p.id > 0;       


 alter table baixa_despesa 
       add column update_time datetime(6);

update baixa_despesa p
set p.update_time = p.data_cadastro
where p.id > 0;       

    alter table baixa_despesa 
       add column id_usuario bigint;

       update baixa_despesa b
set b.id_usuario = 1
where b.id > 0;

 alter table baixa_despesa 
       add constraint FKei9rk29uc9owaqls8ilouxha4 
       foreign key (id_usuario) 
       references usuario (id);