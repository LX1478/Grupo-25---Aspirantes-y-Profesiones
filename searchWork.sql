CREATE DATABASE searchWork;
USE searchWork;

CREATE TABLE professions(
		id				bigint unsigned not null auto_increment,
        name			varchar(120) not null,
        createdAt		date,
        updateAt		date,
        deleteAt		date,
        primary key(id)
);

CREATE TABLE aplicants(
		id				bigint unsigned not null auto_increment,
        dni				int unsigned not null unique,
        name			varchar(120) not null,
        surname			varchar(60) not null,
        email 			varchar(255) not null unique,
        phone			varchar(30) not null,
        urlLinkedin		varchar(255) not null,
        dateOfBirth		date not null,
        sex				enum("Masculino", "Femenino", "Otro") not null,
        image			varchar(255) default "default.png",
        professionId	bigint unsigned not null,
        createdAt		date,
        updateAt		date,
        deleteAt		date,
        primary keY(id),
        foreign key(professionId)	references professions(id)
);

