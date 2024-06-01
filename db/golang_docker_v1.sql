create database food;
use food;
create table food(
	id varchar(36) not null primary key,
    fname varchar(100) not null,
    ftype varchar(36) not null, 
    id_owner varchar(36) not null,
    image varchar(255) not null,
    description text(255) not null,
    quantity int
);

create table user(
	id varchar(36) not null primary key,
    name varchar(100) not null,
    email varchar(100) not null unique,
    isverified boolean
);

insert into user values ('uss1','Nam','nam@gmail.com',false);

insert into food  values ('hhsd1', 'coffee', 'drink','uss1','','coffee is good for health, but not good for me',10);


