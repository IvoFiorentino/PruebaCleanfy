CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `firstname` TEXT NOT NULL,
   `lastname` TEXT NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `category` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `password` TEXT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `marca` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `marca` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` TEXT NOT NULL,
   `price` INT NOT NULL,
   `discount` VARCHAR(255),
   `image` VARCHAR(255) NOT NULL,
   `category` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products_users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `product_id` INT NOT NULL,
   `user_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products_marcas` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `product_id` INT NOT NULL,
   `marca_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products_users` ADD CONSTRAINT `FK_03299c92-542c-454c-b6ef-b04c19236365` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `products_users` ADD CONSTRAINT `FK_ca44aaab-de42-4235-a914-d9a22422c6c7` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `products_marcas` ADD CONSTRAINT `FK_e2b3bc31-d94d-4292-9b2b-fa00a734e4b8` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `products_marcas` ADD CONSTRAINT `FK_7665afea-2019-4288-88af-dcd82dd33bea` FOREIGN KEY (`marca_id`) REFERENCES `marca`(`id`)  ;




insert into users (id, firstname, lastname, email, category, image, password) values (1, 'Maris', 'Dwerryhouse', 'mateo.d8@hotmail.com', 'admin', 'img', 'password');
insert into users (id, firstname, lastname, email, category, image, password) values (2, 'Luis', 'Chesswas', 'lchesswas1@seesaa.net', 'client','http://dummyimage.com/100x100.png/ff4444/ffffff', 'password');
insert into users (id, firstname, lastname, email, category, image, password) values (3, 'Denis', 'Cattonnet', 'dcattonnet2@time.com', 'client','http://dummyimage.com/100x100.png/ff4444/ffffff','password');
insert into users (id, firstname, lastname, email, category, image, password) values (4, 'Silvana', 'Jewitt', 'sjewitt3@abc.net.au', 'client','http://dummyimage.com/100x100.png/ff4444/ffffff','password');


insert into products (id, name, price, discount, image, category) values (1, 'Steampan - Half Size Shallow', 4.64, 52, 'http://dummyimage.com/100x100.png/dddddd/000000', 'a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla');
insert into products (id, name, price, discount, image, category) values (2, 'Chicken - Soup Base', 9.95, 61, 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus');
insert into products (id, name, price, discount, image, category) values (3, 'Creme De Cacao Mcguines', 6.31, 69, 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare');
insert into products (id, name, price, discount, image, category) values (4, 'Oil - Pumpkinseed', 6.92, 61, 'http://dummyimage.com/100x100.png/dddddd/000000', 'nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus');
insert into products (id, name, price, discount, image, category) values (5, 'Cinnamon Rolls', 6.16, 38, 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec');
insert into products (id, name, price, discount, image, category) values (6, 'Cheese - Oka', 9.64, 63, 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum');
insert into products (id, name, price, discount, image, category) values (7, 'Nescafe - Frothy French Vanilla', 7.25, 41, 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'semper sapien a libero nam dui proin leo odio porttitor id consequat');
insert into products (id, name, price, discount, image, category) values (8, 'Steampan - Foil', 4.98, 27, 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet');
insert into products (id, name, price, discount, image, category) values (9, 'Beef - Tongue, Cooked', 6.42, 37, 'http://dummyimage.com/100x100.png/5fa2dd/ffffff', 'leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu');
insert into products (id, name, price, discount, image, category) values (10, 'Plastic Arrow Stir Stick', 5.05, 27, 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus');
insert into products (id, name, price, discount, image, category) values (11, 'Baking Soda', 9.04, 68, 'http://dummyimage.com/100x100.png/dddddd/000000', 'nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes');

insert into marca (id, marca) values (1, 'Genesis');
insert into marca (id, marca) values (2, '928');
insert into marca (id, marca) values (3, 'Tracer');
insert into marca (id, marca) values (4, 'Compass');
insert into marca (id, marca) values (5, '300E');
insert into marca (id, marca) values (6, 'Continental GTC');
insert into marca (id, marca) values (7, 'Santa Fe');
insert into marca (id, marca) values (8, 'Titan');
insert into marca (id, marca) values (9, 'I');
insert into marca (id, marca) values (10, 'F150');
insert into marca (id, marca) values (11, 'Jetta');
