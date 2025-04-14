-- crear db
CREATE SCHEMA catalogo;
-- usar db
USE catalogo;
-- crear tablas
CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(500) NOT NULL,
    mail TEXT NOT NULL,
    userpassword VARCHAR(500) NOT NULL
);

-- agregar columna
ALTER TABLE users ADD prueba DECIMAL(3,1);
-- modificar columna
ALTER TABLE users MODIFY prueba DECIMAL(3,1) NOT NULL;
INSERT INTO users VALUES (DEFAULT, "Celina", "celimaccari@gmail.com", "Hola123");

-- actualizar
UPDATE users SET username="Celina" WHERE id=1;

-- eliminar columna
DELETE FROM users WHERE id = 3;
DELETE FROM users WHERE id = 2;
DELETE FROM users WHERE id = 1; 

ALTER TABLE users ADD fecha DATE NOT NULL;
ALTER TABLE users ADD dni INT UNSIGNED UNIQUE NOT NULL;
ALTER TABLE users ADD fotoperfil VARCHAR(500);
ALTER TABLE users ADD createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE users ADD updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE users ADD deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP;

CREATE TABLE products (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    productimage VARCHAR(500) NOT NULL,
    productname VARCHAR(500) NOT NULL,
    productdescription VARCHAR(500) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);
ALTER TABLE users DROP COLUMN fecha;
ALTER TABLE users DROP COLUMN dni;
ALTER TABLE users DROP COLUMN fotoperfil;
ALTER TABLE users ADD birthday DATE NOT NULL;
ALTER TABLE users ADD dni INT UNSIGNED UNIQUE NOT NULL;
ALTER TABLE users ADD profileimage VARCHAR(500);

CREATE TABLE comments (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    productid INT UNSIGNED,
    usersid INT UNSIGNED,
    commenttext VARCHAR(500) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (productid) REFERENCES products(id),
    FOREIGN KEY (usersid) REFERENCES users(id)
);

ALTER TABLE users MODIFY dni CHAR(8) NOT NULL;
INSERT INTO users VALUES (DEFAULT, "Celina", "celimaccari@gmail.com", "Hola123", DEFAULT, DEFAULT, DEFAULT, 05-01-2006, 47127379, "https://em-content.zobj.net/source/apple/237/blonde-woman-type-1-2_1f471-1f3fb-200d-2640-fe0f.png");
INSERT INTO users VALUES (DEFAULT, "Pilar", "pilaruncal@gmail.com", "Hola345", DEFAULT, DEFAULT, DEFAULT, 12-11-2005, 46861068, "https://em-content.zobj.net/source/apple/237/blonde-woman-type-1-2_1f471-1f3fb-200d-2640-fe0f.png");
INSERT INTO users VALUES (DEFAULT, "Sol", "solburgos@gmail.com", "Hola678", DEFAULT, DEFAULT, DEFAULT, 15-11-2005, 47248478, "https://emojitool.com/img/apple/ios-14.5/woman-medium-skin-tone-473.png");
INSERT INTO users VALUES (DEFAULT, "Catalina", "catalinapiantoni@gmail.com", "Hola910", DEFAULT, DEFAULT, DEFAULT, 05-01-2006, 47000000, "https://em-content.zobj.net/source/apple/237/blonde-woman-type-1-2_1f471-1f3fb-200d-2640-fe0f.png");
INSERT INTO users VALUES (DEFAULT, "Tini", "tinistoessel@gmail.com", "Hola112", DEFAULT, DEFAULT, DEFAULT, 21-03-2000, 41000000, "https://emojitool.com/img/apple/ios-14.5/woman-medium-skin-tone-473.png");

UPDATE users SET id=1 WHERE id=4;
UPDATE users SET id=2 WHERE id=5;
UPDATE users SET id=3 WHERE id=6;
UPDATE users SET id=4 WHERE id=7;
UPDATE users SET id=5 WHERE id=8;

UPDATE users SET birthday='2006-01-05' WHERE id=1;
UPDATE users SET birthday='2005-11-12' WHERE id=2;
UPDATE users SET birthday='2005-11-15' WHERE id=3;
UPDATE users SET birthday='2006-01-05' WHERE id=4;
UPDATE users SET birthday='2000-03-21' WHERE id=5;

INSERT INTO products VALUES (DEFAULT, "completar", "Base líquida de larga duración", " Cobertura media a completa con acabado natural. Resiste todo el día sin sentirse pesada. Ideal para pieles mixtas a grasas.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT, "completar", "Corrector iluminador", "Cubre ojeras y manchas al instante con un efecto luminoso. Textura cremosa que se difumina fácil y no se acumula", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT, "completar", "Rubor en crema", "Aporta un toque de color suave y radiante que se integra perfectamente con la piel. Su fórmula liviana deja un acabado natural, ideal para realzar tu brillo.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT, "completar", "Polvo matificante translúcido", "Sella el maquillaje y controla el brillo sin alterar el color. Acabado suave y sin flashback.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT, "completar", "Sombra de ojos en barra", " Fórmula cremosa de alta pigmentación que se aplica con facilidad. Deja un acabado natural y duradero, ideal para un look fresco que se mantiene todo el día.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT, "completar", "Delineador líquido waterproof", "Punta ultra precisa para trazos definidos o dramáticos. Secado rápido y a prueba de todo.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT, "completar", "Máscara de pestañas volumen extremo", "Alarga, curva y da volumen desde la primera pasada. No se corre ni se descascara.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT, "completar", "Lápiz de cejas retráctil", "Trazo fino y natural para definir, rellenar y dar forma con precisión. Ideal para lograr unas cejas prolijas y con acabado impecable.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT, "completar", "Iluminador en polvo", " Brillo radiante sin partículas gruesas. Ideal para darle luz a mejillas, nariz y arco de cupido.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT, "completar", "Labial líquido mate", "Color intenso que no se transfiere. Textura ligera, no reseca y se mantiene intacto por horas.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comments VALUES (DEFAULT, 1, 1, "¡Muy bueno me encantó!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comments VALUES (DEFAULT, 1, 2, "¡Super recomendado!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comments VALUES (DEFAULT, 1, 3, "No es mi producto favorito", DEFAULT, DEFAULT, DEFAULT);
UPDATE comments SET commenttext="¡Súper recomendado!" WHERE id=3;

UPDATE products SET productimage="https://http2.mlstatic.com/D_NQ_NP_702169-MLA79667134087_092024-O.webp" WHERE id=1;
UPDATE products SET productimage="https://www.maybelline.com.ar/-/media/project/loreal/brand-sites/mny/americas/latam/products/face/concealer/instant-age-rewind-concealer/product-packshot.jpeg?rev=a3f024830ea249daaff24fdc9d832df6&cx=0.25&cy=0.31&cw=315&ch=472&hash=2CBAAF902D73D62619168645E654C814" WHERE id=2;
UPDATE products SET productimage="https://m.media-amazon.com/images/I/511naEb-UOL._AC_UF1000,1000_QL80_.jpg" WHERE id=3;
UPDATE products SET productimage="https://farmaciasdelpueblo.vtexassets.com/arquivos/ids/178206/Revlon-Polvo-Traslucido-Colorstay-Blot-0309970165123_img1.png?v=637892742963630000" WHERE id=4;
UPDATE products SET productimage="https://juleriaque.vtexassets.com/arquivos/ids/205595/hypnose-palette-5-couleurs-9808663CBA7CFDD04FAD9911C081B2F6.jpg?v=638085769004670000" WHERE id=5;
UPDATE products SET productimage="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw3ef1caeb/NATARG-95757_1.jpg" WHERE id=6;
UPDATE products SET productimage="https://cdn2.primor.eu/media/catalog/product/0/M/0MO20544_1_c58b.jpg" WHERE id=7;
UPDATE products SET productimage="https://m.media-amazon.com/images/I/71Z6khL9EPL._SL1500_.jpg" WHERE id=8;
UPDATE products SET productimage="https://http2.mlstatic.com/D_NQ_NP_833586-MLA79890068758_102024-O.webp" WHERE id=9;
UPDATE products SET productimage="https://getthelookar.vtexassets.com/arquivos/ids/164106/222118_labial-liquido-maybelline-superstay-matte-ink-x-5-ml_imagen-1.jpg?v=637612688756770000" WHERE id=10;
