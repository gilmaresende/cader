alter table report add column date_register date;
alter table report add column update_time datetime(6);
alter table report add column id_user bigint;
alter table report add constraint fk_bi_user
foreign key (id_user) references usuario (id);