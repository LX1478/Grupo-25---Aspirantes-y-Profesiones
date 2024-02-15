CREATE DATABASE recruitingRH;
USE recruitingRH;

CREATE TABLE professions(
		id				bigint unsigned not null auto_increment,
        name			varchar(120) not null,
        createdAt		TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt		TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deletedAt		TIMESTAMP NULL,
        primary key(id)
);

CREATE TABLE applicants(
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
        createdAt		TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt		TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deletedAt		TIMESTAMP NULL,
        primary keY(id),
        foreign key(professionId)	references professions(id)
);

