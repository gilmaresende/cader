create table report (
   id bigint not null auto_increment,
    body tinyblob,
    name varchar(255),
    primary key (id)
) engine=InnoDB