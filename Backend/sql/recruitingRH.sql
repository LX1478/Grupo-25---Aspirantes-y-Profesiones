CREATE DATABASE recruitingRH;
USE recruitingRH;

CREATE TABLE roles(	
		id					int unsigned not null auto_increment,		
        name				varchar(30) not null,
        description			varchar(120) not null,
        primary key(id)
);

CREATE TABLE professions(
		id					bigint unsigned not null auto_increment,
        name				varchar(120) not null,
        description			varchar(1024) not null,
        createdAt			TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt			TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deletedAt			TIMESTAMP NULL,
        primary key(id)
);

CREATE TABLE applicants(
		id					bigint unsigned not null auto_increment,
        roleId				int unsigned default 2 not null,
        dni					int unsigned not null unique,
        name				varchar(120) not null,
        surname				varchar(60) not null,
        description			varchar(1024) not null,
        email 				varchar(255) not null unique,
        password			varchar(255) not null,
        phone				varchar(30) not null,
        urlLinkedin			varchar(255) not null,
        dateOfBirth			date not null,
        sex					enum("Masculino", "Femenino", "Otro") not null,
        image				varchar(255) default "default.png",
        location			varchar(255) not null,
        professionId		bigint unsigned not null,
        createdAt			TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt			TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deletedAt			TIMESTAMP NULL,
        primary key(id),
        foreign key(roleId)	references roles(id),
        foreign key(professionId) references professions(id)
);

CREATE TABLE companies(
		id					bigint unsigned not null auto_increment,
        roleId				int unsigned default 3 not null,
		name				varchar(120) not null,
        description			varchar(1024) not null,
        industry			varchar(60) not null,
        webSite				varchar(120) not null,
        logo				varchar(255) default "default.png",
        email				varchar(255) not null unique,
        password			varchar(255) not null,
        location			varchar(255) not null,
        createdAt			TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt			TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deletedAt			TIMESTAMP NULL,
        primary key(id),
        foreign key(roleId)	references roles(id)
);

CREATE TABLE vacancies(
		id					bigint unsigned not null auto_increment,
        companyId			bigint unsigned not null,
        professionId		bigint unsigned not null,
        number				int unsigned not null,	
        description			varchar(1024) not null,
        modality			enum("Presencial", "Remoto", "Semipresencial") not null,
		createdAt			TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updatedAt			TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		deletedAt			TIMESTAMP NULL,
		primary key(id),
        foreign key(companyId) references companies(id),
        foreign key(professionId) references professions(id)
);


CREATE TABLE recruiting(
		id					bigint unsigned not null auto_increment,
        companyId			bigint unsigned not null,
		applicantId			bigint unsigned not null,
		createdAt			TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updatedAt			TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		deletedAt			TIMESTAMP NULL,
		primary key(id),
        foreign key(companyId) references companies(id),
        foreign key(applicantId) references applicants(id)
);



