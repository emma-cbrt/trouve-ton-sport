alter session set nls_date_format = 'DD/MM/YYYY';
delete from evenement;
delete from partenariat;
delete from pratiquer;
delete from utilisateur;
delete from proposer;
delete from sport;
delete from clubsport;
delete from ville;

insert into ville values (1,'Montpellier');
insert into ville values (2,'Marseille');
insert into ville values (3,'Grenoble');
insert into ville values (4,'Bordeaux');

insert into clubsport values (1,'Set Club','Le set club est un complexe sportif qui ravira les petits et les grands pour son grand nombre d\'activités proposées.',17,'rue de la charrue', 34090, 1);
insert into clubsport values (2,'KeepCool','Salle de sport proposant un nombre important de machine, pour les débutant comme les accros de la muscu!',34,'boulevard Flemming',33000, 4);
insert into clubsport values (3,'ClubFitness','Club de fitness avec des coatch hyper qualifiés qui te proposeront des entraînement adaptés',3,'boulevard philippon', 13004,2);
insert into clubsport values (4,'Piscine Olympique d\'Antigone','Piscine Olympique',195,'Avenue Jacques Cartier',34000,1);
insert into clubsport values (5,'SurfsurMars','Cours et location de planche à voile, canoë, etc',91,'Promenade Georges Pompidou', 13008,2);
insert into clubsport values (6,'Club Escalade Jean Perrin','Club familial qui propose des sorties escalade dans des recoins peu connus, Vues à couper le souffle!',14,'rue du commandant perreau',38100,3);
insert into clubsport values (7,'Ski\'Gre','Cours et possibilités de faire du hors-piste avec des guides pour les adeptes des sensations fortes!',32,'Avenue du 8 Mai 1945',38400,3);
insert into clubsport values (8,'Wave Surf','Cours de surf dans un cadre magnifique vers la dune du pila, transport du club à la plage pris en charge',18,'Rue des Menuts', 38200,4);

insert into Sport values(1, 'Squash');
insert into Sport values(2, 'Tennis');
insert into Sport values(3,'Golf');
insert into Sport values(4, 'Running');
insert into Sport values(5, 'Natation');
insert into Sport values(6, 'Musculation');
insert into Sport values(7, 'Yoga');
insert into Sport values(8, 'Basket');
insert into Sport values(9, 'Paddle');
insert into Sport values(10, 'Planche à Voile');
insert into Sport values(11, 'Canoë');
insert into Sport values(12, 'Escalade');
insert into Sport values(13, 'Ski');
insert into Sport values(14, 'Snowboard');
insert into sport values (15, 'Fitness');	
insert into sport values (16, 'Surf');	


insert into proposer values (1,1);
insert into proposer values (1,2);
insert into proposer values (1,3);
insert into proposer values (1,5);
insert into proposer values (1,6);
insert into proposer values (1,9);
insert into proposer values (2,6);
insert into proposer values (3,6);
insert into proposer values (3,15);
insert into proposer values (4,5);
insert into proposer values (5,10);
insert into proposer values (5,11);
insert into proposer values (5,16);
insert into proposer values (6,12);
insert into proposer values (7,13);
insert into proposer values (7,14);
insert into proposer values (8,16);


-- create table Utilisateur(		idUser smallint not null,
-- 								nomUser VARCHAR(50) not null,
-- 								prenomUser VARCHAR(50) not null,
-- 								sexeUser varchar(1) not null,
-- 								telUser varchar(10) not null,
-- 								emailUser varchar(60) not null,
-- 								mdpUser varchar(60) not null,
-- 								idVille smallint not null,
-- 								constraint cp_utilisateur primary key (idUser),
-- 								constraint ce1_utilisateur FOREIGN KEY (idVille) REFERENCES Ville(idVille)
-- );	

-- insert into Utilisateur values (1,'Cabaret','Emma','F','0659827654','emma@gmail.com',);
-- insert into Utilisateur values (2,'Developper 2(3x+5)','5eme',1,'07/01/2019');
-- insert into Utilisateur values (3,'Calculer (-3)-(2)','5eme',2,'10/01/2019');
-- insert into Utilisateur values (4,'Calculer la médiane de la série suivante : 12 - 14 - 15 - 19 -22 -25','5eme',1,'08/02/2019');
-- insert into Utilisateur values (5,'Tracer un triangle equilatéral de 6 cm de côte','6eme',3,'08/10/2018');
-- insert into Utilisateur values (6,'Calculer la longueur du segment [AB]','4eme',2,'10/11/2018');
-- insert into Utilisateur values (7,'Tracer l''image de A par la translation qui transforme B en C','4eme',2,'10/11/2018');
-- insert into Utilisateur values (8,'Simplifier l''expression suivante puis exprimer son double en fonction de x','4eme',2,'10/11/2018');
-- insert into Utilisateur values (9,'Calculer le triple de 9','6eme',2,'12/01/2019');
-- insert into Utilisateur values (10,'Effectuer les calculs suivants : 8 + 3 * 5 ; 17 - 3*2','6eme',5,'14/01/2019');
-- insert into Utilisateur values (11,'Developper l''expression suivante : (2x-5)²','3eme',5,'19/01/2019');	


-- insert into Devoir values (1,'14/02/2019',1,'6eme');
-- insert into Devoir values (2,'17/02/2019',1,'5eme');
-- insert into Devoir values (3,'17/02/2019',2,'4eme');
-- insert into Devoir values (4,'18/02/2019',1,'6eme');
-- insert into Devoir values (5,'20/02/2019',2,'5eme');
-- insert into Devoir values (6,'21/02/2019',3,'4eme');
-- insert into Devoir values (7,'21/02/2019',8,'4eme');
-- insert into Devoir values (8,'26/02/2019',4,'3eme');
-- insert into Devoir values (9,'28/02/2019',2,'3eme');
-- insert into Devoir values (10,'28/02/2019',5,'3eme');

-- insert into Notion values (1,'calcul numerique');
-- insert into Notion values (2,'calcul litteral');
-- insert into Notion values (3,'calcul numerique');
-- insert into Notion values (4,'calcul litteral');
-- insert into Notion values (5,'geometrie');
-- insert into Notion values (6,'geometrie');
-- insert into Notion values (7,'geometrie');
-- insert into Notion values (8,'calcul litteral');	
-- insert into Notion values (9,'calcul numerique');
-- insert into Notion values (10,'calcul numerique');
-- insert into Notion values (11,'calcul litteral');

-- insert into Contenu values (1,1,6);
-- insert into Contenu values (1,3,4);

-- insert into Contenu values (2,2,5);
-- insert into Contenu values (2,4,2);

-- insert into Contenu values (3,6,3);
-- insert into Contenu values (3,7,4);	
-- insert into Contenu values (3,8,3);	

-- insert into Contenu values (4,1,1);
-- insert into Contenu values (4,5,2);	
-- insert into Contenu values (4,9,1);	

-- insert into Contenu values (5,1,2);	
-- insert into Contenu values (5,3,5);	
-- insert into Contenu values (5,6,5);	
-- insert into Contenu values (5,2,3);		
-- insert into Contenu values (5,11,5);	

-- insert into Contenu values (6,1,3);	
-- insert into Contenu values (6,2,6);	
-- insert into Contenu values (6,4,5);	
-- insert into Contenu values (6,8,2);		

-- insert into Contenu values (7,2,3);	
-- insert into Contenu values (7,5,2);	

-- insert into Contenu values (8,5,2);	
-- insert into Contenu values (8,2,2);	
-- insert into Contenu values (8,7,2);	
-- insert into Contenu values (8,6,2);		
-- insert into Contenu values (8,11,2);	

-- insert into Contenu values (9,2,2);	
-- insert into Contenu values (9,4,2);	
-- insert into Contenu values (9,8,2);		
-- insert into Contenu values (9,11,4);

-- insert into Contenu values (10,1,2);	
-- insert into Contenu values (10,3,2);	
-- insert into Contenu values (10,6,2);		
-- insert into Contenu values (10,9,2);
-- insert into Contenu values (10,10,2);	
-- insert into Contenu values (10,4,2);


-- insert into PASSAGE values (1,1,'15/02/2019',5);
-- insert into PASSAGE values (1,3,'15/02/2019',6);
-- insert into PASSAGE values (1,4,'15/02/2019',4);	
-- insert into PASSAGE values (2,5,'18/02/2019',5);	
-- insert into PASSAGE values (2,2,'18/02/2019',6);	
-- insert into PASSAGE values (3,1,'20/02/2019',8);		
-- insert into PASSAGE values (3,2,'20/02/2019',8);	
-- insert into PASSAGE values (3,6,'20/02/2019',7);
-- insert into PASSAGE values (4,3,'23/02/2019',3);	
-- insert into PASSAGE values (5,5,'26/02/2019',14);	
-- insert into PASSAGE values (6,4,'28/02/2019',11);
-- insert into PASSAGE values (7,3,'22/02/2019',3);
-- insert into PASSAGE values (8,4,'27/02/2019',11);	
-- insert into PASSAGE values (9,4,'01/03/2019',11);	
-- insert into PASSAGE values (10,3,'28/02/2019',11);	

-- commit;