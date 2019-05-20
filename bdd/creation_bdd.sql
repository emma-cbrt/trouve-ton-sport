drop table if exists evenement;
drop table if exists partenariat;
drop table if exists pratiquer;
drop table if exists utilisateur;
drop table if exists proposer;
drop table if exists sport;
drop table if exists clubsport;
drop table if exists ville;


create table Ville(idVille smallint not null,
nomVille VARCHAR(50) not null,
constraint cp_ville Primary Key (idVille)
);


create table ClubSport(idCS smallint not null,
nomCS VARCHAR(50) not null,
descCS VARCHAR(280),
adr1CS integer not null,
adr2CS VARCHAR(50) not null,
cpCS integer not null,
idVille smallint not null,
constraint cp_CS Primary Key (idCS),
constraint ce_CS FOREIGN key (idVille) references Ville(idVille)
);

create table Sport(idSport smallint not null,
nomS VARCHAR(30) not null,
constraint cp_sport Primary Key (idSport)
);

create table Proposer(idCS smallint not null,
idSport smallint not null,
constraint cp_proposer Primary Key (idCS,idSport),
constraint ce1_proposer FOREIGN KEY (idCS) REFERENCES ClubSport(idCS),
constraint ce2_proposer FOREIGN KEY (idSport) REFERENCES Sport(idSport)
);


create table Utilisateur(		idUser smallint not null auto_increment,
								nomUser VARCHAR(50) not null,
								prenomUser VARCHAR(50) not null,
								telUser varchar(10) not null,
								emailUser varchar(60) not null,
								mdpUser varchar(60) not null,
								idVille smallint not null,
								constraint cp_utilisateur primary key (idUser, emailUser),
								constraint ce1_utilisateur FOREIGN KEY (idVille) REFERENCES Ville(idVille)
);

create table Pratiquer(			idUser smallint not null,
								idSport smallint not null,
								constraint cp_pratiquer primary key (idUser,idSport),
								constraint ce1_pratiquer FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser),
								constraint ce2_pratiquer FOREIGN KEY (idSport) REFERENCES Sport(idSport)
);


create table Evenement(			idEvent smallint not null,
								nomEvent varchar(60) not null,
								descEvent text,
								dateEvent date not null,
								idSport smallint not null,
								idVille smallint not null,
								idUser smallint not null,
								constraint cp_event primary key (idEvent),
								constraint ce1_event FOREIGN KEY (idSport) REFERENCES Sport(idSport),
								constraint ce2_event FOREIGN KEY (idVille) REFERENCES Ville(idVille),
								constraint ce3_event FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser)
);

CREATE TRIGGER after_suppr_user AFTER DELETE
ON Utilisateur FOR EACH ROW
corps_trigger;