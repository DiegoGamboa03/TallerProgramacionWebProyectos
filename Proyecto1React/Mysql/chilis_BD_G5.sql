create database chilis_BD_G5;
use chilis_BD_G5;

-- tabla 'categorias'
CREATE TABLE categorias (
    idCategoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- tabla 'productos'
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    foodName VARCHAR(100) NOT NULL,
    foodDescription TEXT NOT NULL,
    foodPrice DECIMAL(10, 2) NOT NULL,
    foodImg VARCHAR(255) NOT NULL,
    idCategoria INT,
    FOREIGN KEY (idCategoria) REFERENCES categorias(idCategoria)
);

-- Crear la tabla 'locales'
CREATE TABLE locales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    localName VARCHAR(100) NOT NULL,
    localImg VARCHAR(255) NOT NULL,
    localDescription TEXT NOT NULL,
    localUrl VARCHAR(1024) NOT NULL
);

-- Insertar datos en la tabla 'locales'
INSERT INTO locales (localName, localImg, localDescription, localUrl) VALUES
('CHILI\'S - BENAVIDES', './assets/img/local1.jpg', 'Cadena apta para familias que ofrece alimentos estadounidenses y tex-mex en un ambiente sureño. Opciones de servicio: Tiene asientos al aire libre, Tiene menú para niños.', 'https://www.google.com/maps/place/Chili%E2%80%99s+Benavides/@-12.1270139,-77.0141709,17z/data=!4m14!1m7!3m6!1s0x9105c801a420fc79:0xed53d9e2a5c6967d!2sChili%E2%80%99s+Benavides!8m2!3d-12.1270139!4d-77.0141709!16s%2Fg%2F1tvr_sqt!3m5!1s0x9105c801a420fc79:0xed53d9e2a5c6967d!8m2!3d-12.1270139!4d-77.0141709!16s%2Fg%2F1tvr_sqt?entry=ttu'),
('CHILI\'S - MEGA PLAZA', './assets/img/local2.jpg', 'Cadena apta para familias que ofrece alimentos estadounidenses y tex-mex en un ambiente sureño. Opciones de servicio: Tiene asientos al aire libre, Tiene menú para niños.', 'https://www.google.com/maps/place/MegaPlaza/@-11.994456,-77.0628781,18z/data=!3m1!4b1!4m6!3m5!1s0x9105ce543477f8d9:0x9d64f6794789376b!8m2!3d-11.994456!4d-77.0619391!16s%2Fg%2F1td_crhq?entry=ttu'),
('CHILI\'S - MEGA PLAZA', './assets/img/local3.jpg', 'Cadena apta para familias que ofrece alimentos estadounidenses y tex-mex en un ambiente sureño. Opciones de servicio: Tiene asientos al aire libre, Tiene menú para niños.', 'https://www.google.com/maps/place/Chili%E2%80%99s+%C3%93valo+Monitor/@-12.0828117,-76.9699432,20.29z/data=!4m6!3m5!1s0x9105c654aae1a517:0xe0a92f40985a09d5!8m2!3d-12.0824514!4d-76.9701022!16s%2Fg%2F113h9w7g5?entry=ttu');


-- Insertar datos en la tabla 'categorias'
INSERT INTO categorias (nombre) VALUES
('favoritos'),
('tacosFajitas'),
('chiliar'),
('promociones');

-- Insertar datos en la tabla 'productos'
INSERT INTO productos (foodName, foodDescription, foodPrice, foodImg, idCategoria) VALUES
-- Datos de 'favoritos'
('TRIPLE DIPPER', 'Una combinación de tres de nuestras entradas favoritas Chicken Crispers®, Wings OverBuffalo y Quesadillas.', 49.00, './assets/img/pica.avif', 1),
('TOSTADA DIPPER', 'Una combinación de tres de nuestras entradas favoritas; Chicken Crispers®, Wings Over Buffalo y Quesadillas.', 49.00, './assets/img/tosta.avif', 1),
('CHICKEN CRISPERS', 'Filetitos de pechuga de pollo arrebozados y fritos. Servidos con choclo y papas fritas caseras.', 42.00, './assets/img/choclo.avif', 1),
('ALEX´S SANTA FE BURGER', 'Hamburguesa (220 gr), queso gouda, palta, cebolla roja, pickles, tomates, culantro y nuestra salsa santa fe. Servida con papas fritas. Servimos todas nuestras hamburguesas en termino 3/4.', 40.00, './assets/img/hamburg.avif', 1),

-- Datos de 'tacosFajitas'
('RANCHERO CHICKEN TACOS', 'Tres tortillas de harina con nuestros filetitos de pollo al estilo ranchero, acompañados de queso mozzarella, palta, pico de gallo* y culantro. Servido frejoles negros y arroz con choclo.', 41.00, './assets/img/taco1.avif', 2),
('TACOS CHICKEN', 'Tres tortillas de harina con nuestros filetitos de pollo al estilo ranchero, acompañados de queso mozzarella, palta, pico de gallo* y culantro. Servido con frejoles negros y arroz con choclo.', 41.00, './assets/img/taco1.avif', 2),
('CRISPY CHICKEN TACOS', '3 Tortillas con filetes crujientes de pollo, tocino, pico de gallo, quesos, lechuga, ranch y honey chipotle. Servidos con frijoles negros y arroz.', 40.00, './assets/img/taco2.avif', 2),
('FAJITAS MIXTAS', 'Pollo y carne a la parrilla servidos sobre cebollas y pimientos salteados. acompañado de tortillas, guacamole, sour cream, quesos y pico de gallo.', 53.00, './assets/img/taco3.avif', 2),

-- Datos de 'chiliar'
('TRIPLE DIPPER', 'Una combinación de tres de nuestras entradas favoritas Chicken Crispers®, Wings OverBuffalo y Quesadillas.', 49.00, './assets/img/pica.avif', 3),
('TOSTADA DIPPER', 'Una combinación de tres de nuestras entradas favoritas; Chicken Crispers®, Wings Over Buffalo y Quesadillas.', 49.00, './assets/img/tosta.avif', 3),
('CHICKEN CRISPERS', 'Filetitos de pechuga de pollo arrebozados y fritos. Servidos con choclo y papas fritas caseras.', 42.00, './assets/img/choclo.avif', 3),

-- Datos de 'promociones'
('TRIPLE DIPPER', 'Una combinación de tres de nuestras entradas favoritas Chicken Crispers®, Wings OverBuffalo y Quesadillas.', 49.00, './assets/img/pica.avif', 4),
('TOSTADA DIPPER', 'Una combinación de tres de nuestras entradas favoritas; Chicken Crispers®, Wings Over Buffalo y Quesadillas.', 49.00, './assets/img/tosta.avif', 4),
('CHICKEN CRISPERS', 'Filetitos de pechuga de pollo arrebozados y fritos. Servidos con choclo y papas fritas caseras.', 42.00, './assets/img/choclo.avif', 4),
('ALEX´S SANTA FE BURGER', 'Hamburguesa (220 gr), queso gouda, palta, cebolla roja, pickles, tomates, culantro y nuestra salsa santa fe. Servida con papas fritas. Servimos todas nuestras hamburguesas en termino 3/4.', 40.00, './assets/img/hamburg.avif', 4);



select * from productos