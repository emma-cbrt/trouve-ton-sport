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
insert into clubsport values (6,'Club Escalade Jean Perrin','Club familial qui propose des sorties escalade dans des recoins peu connus, Vues à couper le souffle!',14,'rue du commandant perreau',38100, 3);
insert into clubsport values (7,'Ski\'Gre','Cours et possibilités de faire du hors-piste avec des guides pour les adeptes des sensations fortes!',32,'Avenue du 8 Mai 1945',38400, 3);
insert into clubsport values (8,'Wave Surf','Cours de surf dans un cadre magnifique vers la dune du pila, transport du club à la plage pris en charge',18,'Rue des Menuts', 38200, 4);

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


commit;